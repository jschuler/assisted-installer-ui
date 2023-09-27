/* tslint:disable */
/* eslint-disable */
/**
 * Authorization Service API
 * Enables access control on resources of OCM services
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface TermsReview
 */
export interface TermsReview {
  /**
   *
   * @type {string}
   * @memberof TermsReview
   */
  account_username: string;
  /**
   *
   * @type {boolean}
   * @memberof TermsReview
   */
  check_optional_terms?: boolean;
  /**
   *
   * @type {string}
   * @memberof TermsReview
   */
  event_code?: string;
  /**
   *
   * @type {string}
   * @memberof TermsReview
   */
  site_code?: string;
}
