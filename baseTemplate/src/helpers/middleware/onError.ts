import Log from '@dazn/lambda-powertools-logger';
import status from 'statuses';

import {AWSEvents} from '../../@types/AWSEvents';
import middy from "@middy/core";

export const onErrorHandler: middy.MiddlewareFn<AWSEvents> = async (request) => {
    const {
        // event,
        // context,
        error,
    } = request;
    Log.error('Error: ', error === null ? undefined : error);
    const stringifiedError = JSON.stringify(request.error);
    const errorMessage = stringifiedError === '{}' ? request.error.message : stringifiedError;
    const errorStatus = request.error.name === 'BadRequestError' ? 'Bad Request' : 'Internal Server Error';
    request.response =  ({
        statusCode: status(errorStatus) as number,
        body: errorMessage,
    });

    // Continue chain (return undefined)
    return undefined;
};