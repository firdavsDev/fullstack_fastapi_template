/* tslint:disable */
/* eslint-disable */
/**
 * fastapi_template
 * fastapi_template API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { Item } from '../models';
// @ts-ignore
import { ItemCreate } from '../models';
// @ts-ignore
import { ItemUpdate } from '../models';
/**
 * ItemsApi - axios parameter creator
 * @export
 */
export const ItemsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Item
         * @param {ItemCreate} itemCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createItem: async (itemCreate: ItemCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemCreate' is not null or undefined
            assertParamExists('createItem', 'itemCreate', itemCreate)
            const localVarPath = `/api/v1/items`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(itemCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Item
         * @param {number} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteItem: async (itemId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteItem', 'itemId', itemId)
            const localVarPath = `/api/v1/items/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Item
         * @param {number} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItem: async (itemId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getItem', 'itemId', itemId)
            const localVarPath = `/api/v1/items/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Items
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItems: async (sort?: string, range?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/items`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (range !== undefined) {
                localVarQueryParameter['range'] = range;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Item
         * @param {number} itemId 
         * @param {ItemUpdate} itemUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem: async (itemId: number, itemUpdate: ItemUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateItem', 'itemId', itemId)
            // verify required parameter 'itemUpdate' is not null or undefined
            assertParamExists('updateItem', 'itemUpdate', itemUpdate)
            const localVarPath = `/api/v1/items/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(itemUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ItemsApi - functional programming interface
 * @export
 */
export const ItemsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ItemsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Item
         * @param {ItemCreate} itemCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createItem(itemCreate: ItemCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createItem(itemCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Item
         * @param {number} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteItem(itemId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteItem(itemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Item
         * @param {number} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItem(itemId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItem(itemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Items
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItems(sort?: string, range?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Item>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItems(sort, range, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Item
         * @param {number} itemId 
         * @param {ItemUpdate} itemUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateItem(itemId: number, itemUpdate: ItemUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateItem(itemId, itemUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ItemsApi - factory interface
 * @export
 */
export const ItemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ItemsApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Item
         * @param {ItemCreate} itemCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createItem(itemCreate: ItemCreate, options?: any): AxiosPromise<Item> {
            return localVarFp.createItem(itemCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Item
         * @param {number} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteItem(itemId: number, options?: any): AxiosPromise<any> {
            return localVarFp.deleteItem(itemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Item
         * @param {number} itemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItem(itemId: number, options?: any): AxiosPromise<Item> {
            return localVarFp.getItem(itemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Items
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItems(sort?: string, range?: string, options?: any): AxiosPromise<Array<Item>> {
            return localVarFp.getItems(sort, range, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Item
         * @param {number} itemId 
         * @param {ItemUpdate} itemUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem(itemId: number, itemUpdate: ItemUpdate, options?: any): AxiosPromise<Item> {
            return localVarFp.updateItem(itemId, itemUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createItem operation in ItemsApi.
 * @export
 * @interface ItemsApiCreateItemRequest
 */
export interface ItemsApiCreateItemRequest {
    /**
     * 
     * @type {ItemCreate}
     * @memberof ItemsApiCreateItem
     */
    readonly itemCreate: ItemCreate
}

/**
 * Request parameters for deleteItem operation in ItemsApi.
 * @export
 * @interface ItemsApiDeleteItemRequest
 */
export interface ItemsApiDeleteItemRequest {
    /**
     * 
     * @type {number}
     * @memberof ItemsApiDeleteItem
     */
    readonly itemId: number
}

/**
 * Request parameters for getItem operation in ItemsApi.
 * @export
 * @interface ItemsApiGetItemRequest
 */
export interface ItemsApiGetItemRequest {
    /**
     * 
     * @type {number}
     * @memberof ItemsApiGetItem
     */
    readonly itemId: number
}

/**
 * Request parameters for getItems operation in ItemsApi.
 * @export
 * @interface ItemsApiGetItemsRequest
 */
export interface ItemsApiGetItemsRequest {
    /**
     * Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
     * @type {string}
     * @memberof ItemsApiGetItems
     */
    readonly sort?: string

    /**
     * Format: &#x60;[start, end]&#x60;
     * @type {string}
     * @memberof ItemsApiGetItems
     */
    readonly range?: string
}

/**
 * Request parameters for updateItem operation in ItemsApi.
 * @export
 * @interface ItemsApiUpdateItemRequest
 */
export interface ItemsApiUpdateItemRequest {
    /**
     * 
     * @type {number}
     * @memberof ItemsApiUpdateItem
     */
    readonly itemId: number

    /**
     * 
     * @type {ItemUpdate}
     * @memberof ItemsApiUpdateItem
     */
    readonly itemUpdate: ItemUpdate
}

/**
 * ItemsApi - object-oriented interface
 * @export
 * @class ItemsApi
 * @extends {BaseAPI}
 */
export class ItemsApi extends BaseAPI {
    /**
     * 
     * @summary Create Item
     * @param {ItemsApiCreateItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public createItem(requestParameters: ItemsApiCreateItemRequest, options?: AxiosRequestConfig) {
        return ItemsApiFp(this.configuration).createItem(requestParameters.itemCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Item
     * @param {ItemsApiDeleteItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public deleteItem(requestParameters: ItemsApiDeleteItemRequest, options?: AxiosRequestConfig) {
        return ItemsApiFp(this.configuration).deleteItem(requestParameters.itemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Item
     * @param {ItemsApiGetItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public getItem(requestParameters: ItemsApiGetItemRequest, options?: AxiosRequestConfig) {
        return ItemsApiFp(this.configuration).getItem(requestParameters.itemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Items
     * @param {ItemsApiGetItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public getItems(requestParameters: ItemsApiGetItemsRequest = {}, options?: AxiosRequestConfig) {
        return ItemsApiFp(this.configuration).getItems(requestParameters.sort, requestParameters.range, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Item
     * @param {ItemsApiUpdateItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public updateItem(requestParameters: ItemsApiUpdateItemRequest, options?: AxiosRequestConfig) {
        return ItemsApiFp(this.configuration).updateItem(requestParameters.itemId, requestParameters.itemUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}
