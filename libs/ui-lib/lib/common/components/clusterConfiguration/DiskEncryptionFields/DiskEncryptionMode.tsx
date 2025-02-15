import React from 'react';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import {
  Flex,
  FlexItem,
  Stack,
  StackItem,
  Text,
  TextVariants,
  TextContent,
  TooltipProps,
  Tooltip,
} from '@patternfly/react-core';
import { ENCRYPTING_DISK_DURING_INSTALLATION } from '../../../config';
import PopoverIcon from '../../ui/PopoverIcon';
import { RadioField } from '../../ui/formik';
import { TangServers } from './TangServers';
import { DiskEncryption } from '@openshift-assisted/types/assisted-installer-service';
import { useTranslation } from '../../../hooks/use-translation-wrapper';

const DiskEncryptionModeTPMv2 = () => {
  const { t } = useTranslation();
  return (
    <>
      TPM v2{' '}
      <PopoverIcon
        component={'a'}
        minWidth="22rem"
        bodyContent={
          <p>
            {t(
              'ai:TPM v2 stores passphrases in a secure cryptoprocessor contained within as server.',
            )}
            &nbsp;
            <a href={ENCRYPTING_DISK_DURING_INSTALLATION} target="_blank" rel="noopener noreferrer">
              {t('ai:Learn more')} <ExternalLinkAltIcon />
            </a>
          </p>
        }
      />
    </>
  );
};

const DiskEncryptionModeTang = () => {
  const { t } = useTranslation();
  return (
    <>
      Tang{' '}
      <PopoverIcon
        component={'a'}
        minWidth="25rem"
        bodyContent={
          <p>
            {t('ai:Tang server component that enable network-bound disk encryption (NBDE).')} &nbsp;
            <a href={ENCRYPTING_DISK_DURING_INSTALLATION} target="_blank" rel="noopener noreferrer">
              {t('ai:Learn more')} <ExternalLinkAltIcon />
            </a>
          </p>
        }
      />
    </>
  );
};

export interface DiskEncryptionModeProps {
  isDisabled: boolean;
  diskEncryptionMode: DiskEncryption['mode'];
  tooltipProps: TooltipProps;
}

export const DiskEncryptionMode = ({
  diskEncryptionMode,
  isDisabled,
  tooltipProps,
}: DiskEncryptionModeProps) => {
  const { t } = useTranslation();
  return (
    <Stack>
      <StackItem>
        <Flex>
          <FlexItem spacer={{ default: 'spacer3xl' }}>
            <Tooltip {...tooltipProps}>
              <RadioField
                isDisabled={isDisabled}
                name="diskEncryptionMode"
                label={<DiskEncryptionModeTPMv2 />}
                id="TPMV2-button"
                value="tpmv2"
              />
            </Tooltip>
          </FlexItem>
          <FlexItem spacer={{ default: 'spacer3xl' }}>
            <Tooltip {...tooltipProps}>
              <RadioField
                isDisabled={isDisabled}
                name="diskEncryptionMode"
                label={<DiskEncryptionModeTang />}
                id="tang-button"
                value="tang"
              />
            </Tooltip>
          </FlexItem>
        </Flex>
      </StackItem>
      {diskEncryptionMode === 'tang' && (
        <Stack>
          &nbsp;
          <StackItem>
            <TextContent>
              <Text component={TextVariants.h6}>{t('ai:Tang servers')}</Text>
            </TextContent>
          </StackItem>
          &nbsp;
          <TangServers isDisabled={isDisabled} tooltipProps={tooltipProps} />
        </Stack>
      )}
    </Stack>
  );
};
