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
 * @interface Photo
 */
export interface Photo {
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    img1: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    img2?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    img3?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    img4?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    img5?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    name1?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    name2?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    name3?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    name4?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    name5?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    date?: string;
}

export function PhotoFromJSON(json: any): Photo {
    return PhotoFromJSONTyped(json, false);
}

export function PhotoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Photo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'img1': json['img1'],
        'img2': !exists(json, 'img2') ? undefined : json['img2'],
        'img3': !exists(json, 'img3') ? undefined : json['img3'],
        'img4': !exists(json, 'img4') ? undefined : json['img4'],
        'img5': !exists(json, 'img5') ? undefined : json['img5'],
        'name1': !exists(json, 'name1') ? undefined : json['name1'],
        'name2': !exists(json, 'name2') ? undefined : json['name2'],
        'name3': !exists(json, 'name3') ? undefined : json['name3'],
        'name4': !exists(json, 'name4') ? undefined : json['name4'],
        'name5': !exists(json, 'name5') ? undefined : json['name5'],
        'date': !exists(json, 'date') ? undefined : json['date'],
    };
}

export function PhotoToJSON(value?: Photo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'img1': value.img1,
        'img2': value.img2,
        'img3': value.img3,
        'img4': value.img4,
        'img5': value.img5,
        'name1': value.name1,
        'name2': value.name2,
        'name3': value.name3,
        'name4': value.name4,
        'name5': value.name5,
        'date': value.date,
    };
}


