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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Timetable
 */
export interface Timetable {
    /**
     * 
     * @type {string}
     * @memberof Timetable
     */
    img: string;
    /**
     * 
     * @type {string}
     * @memberof Timetable
     */
    price?: string;
    /**
     * 
     * @type {string}
     * @memberof Timetable
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Timetable
     */
    date?: string;
}

export function TimetableFromJSON(json: any): Timetable {
    return TimetableFromJSONTyped(json, false);
}

export function TimetableFromJSONTyped(json: any, ignoreDiscriminator: boolean): Timetable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'img': json['img'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'date': !exists(json, 'date') ? undefined : json['date'],
    };
}

export function TimetableToJSON(value?: Timetable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'img': value.img,
        'price': value.price,
        'name': value.name,
        'date': value.date,
    };
}

