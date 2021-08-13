import * as React from 'react';
import { expandable, IRowData, sortable } from '@patternfly/react-table';
import { Host, HostsTable, HostsTableActions } from '../../../common';
import { AdditionalNTPSourcesDialogToggle } from '../../../ocm/components/hosts/AdditionaNTPSourceDialogToggle';
import { AgentK8sResource } from '../../types';
import { ClusterDeploymentHostsTablePropsActions } from '../ClusterDeployment/types';
import { getAIHosts } from '../helpers';

type GetAgentCallback = <R>(
  agentCallback: ((agent: AgentK8sResource) => R) | undefined,
  agents: AgentK8sResource[],
) => ((host: Host) => R) | undefined;

const getAgentCallback: GetAgentCallback = (agentCallback, agents) =>
  agentCallback
    ? (host) => {
        const agent = agents.find((a) => a.metadata?.uid === host.id) as AgentK8sResource;
        return agentCallback(agent);
      }
    : undefined;

export const useAgentTableActions = ({
  onDeleteHost,
  onEditRole,
  onEditHost,
  canDelete,
  canEditHost,
  canEditRole,
  agents,
}: ClusterDeploymentHostsTablePropsActions & {
  agents: AgentK8sResource[];
}): HostsTableActions =>
  React.useMemo(
    () => ({
      onDeleteHost: onDeleteHost
        ? (event: React.MouseEvent, rowIndex: number, rowData: IRowData) => {
            const agent = agents.find(
              (a) => a.metadata?.uid === rowData.host.id,
            ) as AgentK8sResource;
            onDeleteHost(agent);
          }
        : undefined,
      onEditRole: onEditRole
        ? (host: Host, role: string | undefined) => {
            const agent = agents.find((a) => a.metadata?.uid === host.id) as AgentK8sResource;
            return onEditRole(agent, role);
          }
        : undefined,
      onEditHost: getAgentCallback(onEditHost, agents),
      canDelete: getAgentCallback(canDelete, agents),
      canEditHost: getAgentCallback(canEditHost, agents),
      canEditRole: getAgentCallback(canEditRole, agents),
    }),
    [onDeleteHost, onEditHost, onEditRole, canDelete, canEditHost, canEditRole, agents],
  );

const columns = [
  { title: 'Hostname', transforms: [sortable], cellFormatters: [expandable] },
  { title: 'Role', transforms: [sortable] },
  { title: 'Status', transforms: [sortable] },
  { title: 'Discovered At', transforms: [sortable] },
  { title: 'CPU Cores', transforms: [sortable] }, // cores per machine (sockets x cores)
  { title: 'Memory', transforms: [sortable] },
  { title: 'Disk', transforms: [sortable] },
  { title: '' },
];

type AgentTableProps = ClusterDeploymentHostsTablePropsActions & {
  agents: AgentK8sResource[];
  className?: string;
};

const AgentTable: React.FC<AgentTableProps> = ({ agents, className, ...actions }) => {
  const tableCallbacks = useAgentTableActions({
    ...actions,
    agents,
  });
  const restHosts = getAIHosts(agents);
  return (
    <HostsTable
      hosts={restHosts}
      EmptyState={() => <div>no hosts</div>}
      columns={columns}
      className={className}
      AdditionalNTPSourcesDialogToggleComponent={AdditionalNTPSourcesDialogToggle}
      {...tableCallbacks}
    />
  );
};

export default AgentTable;