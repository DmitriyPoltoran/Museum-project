/* tslint:disable */
/* eslint-disable */
/**
 * Museum service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    Timetable,
    TimetableFromJSON,
    TimetableToJSON,
} from '../models';

export interface TimetableRequest {
    date?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns list of city events
     */
    async timetableRaw(requestParameters: TimetableRequest): Promise<runtime.ApiResponse<Array<Timetable>>> {
        const queryParameters: any = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/timetable`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TimetableFromJSON));
    }

    /**
     * Returns list of city events
     */
    async timetable(requestParameters: TimetableRequest): Promise<Array<Timetable>> {
        const response = await this.timetableRaw(requestParameters);
        return await response.value();
    }

}
