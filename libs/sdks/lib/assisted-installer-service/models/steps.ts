/* tslint:disable */
/* eslint-disable */
/**
 * AssistedInstall
 * Assisted installation
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { Step } from './step';

/**
 *
 * @export
 * @interface Steps
 */
export interface Steps {
  /**
   *
   * @type {Array<Step>}
   * @memberof Steps
   */
  instructions?: Array<Step>;
  /**
   *
   * @type {number}
   * @memberof Steps
   */
  next_instruction_seconds?: number;
  /**
   * What to do after finishing to run step instructions
   * @type {string}
   * @memberof Steps
   */
  post_step_action?: StepsPostStepActionEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum StepsPostStepActionEnum {
  Exit = 'exit',
  Continue = 'continue',
}