import { LoggerFactory } from '@codification/cutwater-logging';
import { Context } from 'aws-lambda';

const LOG = LoggerFactory.getLogger();
exports.handler = (event: any, context: Context) => {
  LOG.info('Recieved event: ', event);
};
