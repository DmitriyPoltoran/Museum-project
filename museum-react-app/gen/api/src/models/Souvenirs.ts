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
 * @interface Souvenirs
 */
export interface Souvenirs {
    /**
     * 
     * @type {string}
     * @memberof Souvenirs
     */
    img: string;
    /**
     * 
     * @type {string}
     * @memberof Souvenirs
     */
    price?: string;
    /**
     * 
     * @type {string}
     * @memberof Souvenirs
     */
    name?: string;
}

export function SouvenirsFromJSON(json: any): Souvenirs {
    return SouvenirsFromJSONTyped(json, false);
}

export function SouvenirsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Souvenirs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'img': json['img'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function SouvenirsToJSON(value?: Souvenirs | null): any {
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
    };
}


