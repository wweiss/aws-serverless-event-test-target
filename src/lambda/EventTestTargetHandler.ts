import * as AWS from 'aws-sdk';
import { Context, Callback } from 'aws-lambda';

exports.handler = (event: any, context: Context) => {
  console.log('Recieved event: ', event);
};
