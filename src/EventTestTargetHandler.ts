import { LoggerFactory } from '@codification/cutwater-logging';

const LOG = LoggerFactory.getLogger();
exports.handler = (event: any) => {
  LOG.info('Recieved event: ', event);
};
