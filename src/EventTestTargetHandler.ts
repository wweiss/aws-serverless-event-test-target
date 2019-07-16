import { Context } from 'aws-lambda';

exports.handler = (event: any, context: Context) => {
  // tslint:disable-next-line: no-console
  console.log('Recieved event: ', event);
};
