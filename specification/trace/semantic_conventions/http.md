# Semantic conventions for HTTP spans

## Status

According to [OTel specifications](https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/http.md#status)

## Common Attributes

Cisco OTel Distributions SHOULD add the following attributes:

| Attribute  | Type | Description  | Example  | Metadata / Data |
|---|---|---|---|---|
| `http.request.body` | string | [HTTP message body](https://tools.ietf.org/html/rfc7230#section-3.3) of the request | - | Data
| `http.request.body` | string | [HTTP message body](https://tools.ietf.org/html/rfc7230#section-3.3) of the response | - | Data

The data MUST be trimmed according to the [Max Payload Size configuration parameter](../../../general.md#configuration)

## HTTP request and response headers

Cisco OTel Distributions SHOULD add all of the headers in the request and the response, according to [OTel specifications](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/semantic_conventions/http.md#http-request-and-response-headers).

### Type

According to OTel specifications the attribute value MUST consist of either multiple header values as an array of strings or a single-item array containing a possibly comma-concatenated string, depending on the way the HTTP library provides access to headers.

The distributions shouldn't parse the strings or split it in any way.

### Metadata / Data

All of the headers are considered as **data**.
