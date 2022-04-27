# Semantic conventions for HTTP spans

<!-- toc -->

- [Status](#status)
- [Common Attributes](#common-attributes)
- [HTTP request and response headers](#http-request-and-response-headers)
  - [Type](#type)
  - [Metadata / Data](#metadata--data)

<!-- tocstop -->

## Status

According to [OTel specifications](https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/http.md#status)

## Common Attributes

Cisco OTel Distributions SHOULD add the following attributes:

<!-- semconv http -->

| Attribute              | Type   | Description                                                               | Examples                                             | Required |
| ---------------------- | ------ | ------------------------------------------------------------------------- | ---------------------------------------------------- | -------- |
| `http.request.header`  | string | HTTP request header. This describes the prefix to HTTP headers capturing  | `http.request.header.user-agent=chrome`              | Yes      |
| `http.response.header` | string | HTTP response header. This describes the prefix to HTTP headers capturing | `http.response.header.content-type=JSON`             | Yes      |
| `http.request.body`    | string | HTTP message request body                                                 | `{"cart": {"6200f9eefd49910014d1e789": "1"} }`       | Yes      |
| `http.response.body`   | string | HTTP message response body                                                | `{"inStock": {"6200f9eefd49910014d1e789": "true"} }` | Yes      |

<!-- endsemconv -->

The data MUST be trimmed according to the [Max Payload Size configuration parameter](../../../general.md#configuration)

## HTTP request and response headers

Cisco OTel Distributions SHOULD add all of the headers in the request and the response, according to [OTel specifications](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/semantic_conventions/http.md#http-request-and-response-headers).

### Type

According to OTel specifications the attribute value MUST consist of either multiple header values as an array of strings or a single-item array containing a possibly comma-concatenated string, depending on the way the HTTP library provides access to headers.

The distributions shouldn't parse the strings or split it in any way.

### Metadata / Data

All of the headers are considered as **data**.
