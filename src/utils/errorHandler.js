const httpStatus = require('http-status');
const responseMapper = require('./responseMapper');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
    let errors = {};

    errors[err.name] = errors[err.name] || [];
    errors[err.name].push(err.message);

    if (err && err.errors && err.errors.length > 0) {
        errors = {};
        err.errors.map(errorObj => {
            errors[errorObj.name || errorObj.type] =
      errors[errorObj.name || errorObj.type] || [];
            errors[errorObj.name || errorObj.type].push(errorObj.message);
        });
    }

    delete errors['undefined'];
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(responseMapper(errors, false));
};

// Status Code	Constructor Name
// 400	BadRequest
// 401	Unauthorized
// 402	PaymentRequired
// 403	Forbidden
// 404	NotFound
// 405	MethodNotAllowed
// 406	NotAcceptable
// 407	ProxyAuthenticationRequired
// 408	RequestTimeout
// 409	Conflict
// 410	Gone
// 411	LengthRequired
// 412	PreconditionFailed
// 413	PayloadTooLarge
// 414	URITooLong
// 415	UnsupportedMediaType
// 416	RangeNotSatisfiable
// 417	ExpectationFailed
// 418	ImATeapot
// 421	MisdirectedRequest
// 422	UnprocessableEntity
// 423	Locked
// 424	FailedDependency
// 425	UnorderedCollection
// 426	UpgradeRequired
// 428	PreconditionRequired
// 429	TooManyRequests
// 431	RequestHeaderFieldsTooLarge
// 451	UnavailableForLegalReasons
// 500	InternalServerError
// 501	NotImplemented
// 502	BadGateway
// 503	ServiceUnavailable
// 504	GatewayTimeout
// 505	HTTPVersionNotSupported
// 506	VariantAlsoNegotiates
// 507	InsufficientStorage
// 508	LoopDetected
// 509	BandwidthLimitExceeded
// 510	NotExtended
// 511	NetworkAuthenticationRequired
