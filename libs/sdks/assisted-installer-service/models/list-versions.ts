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
import { Versions } from './versions';

/**
 *
 * @export
 * @interface ListVersions
 */
export interface ListVersions {
  /**
   *
   * @type {string}
   * @memberof ListVersions
   */
  release_tag?: string;
  /**
   *
   * @type {Versions}
   * @memberof ListVersions
   */
  versions?: Versions;
}
