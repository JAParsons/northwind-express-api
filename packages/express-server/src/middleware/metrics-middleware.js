import promBundle from 'express-prom-bundle';
// why can't I use a relative import?
// import normaliseRequestPathname from '../utils/normalise-request-pathname';
import normaliseRequestPathname from '@northwind/express-server/src/utils/normalise-request-pathname.js';

const prometheusMiddleware = promBundle({
  formatStatusCode: (res) => `${res.statusCode.toString().charAt(0)}xx`,
  includeMethod: true,
  includePath: true,
  normalizePath: normaliseRequestPathname
});

export default prometheusMiddleware;
