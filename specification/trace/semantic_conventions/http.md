# Semantic conventions for HTTP spans

## Status

According to [OTel specifications](https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/http.md#status)

## Common Attributes

Cisco OTel Distributions MAY add the following attributes:

| Attribute  | Type | Description  | Example  | Metadata / Data |
|---|---|---|---|---|
| `http.request.body` | string | [HTTP message body](https://tools.ietf.org/html/rfc7230#section-3.3) of the request | - | Data
| `http.request.body` | string | [HTTP message body](https://tools.ietf.org/html/rfc7230#section-3.3) of the response | - | Data

## HTTP request and response headers

According to [OTel specifications](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/semantic_conventions/http.md#http-request-and-response-headers) the type is always `string[]`.

TODO: Decide wether we want to use always split the headers or not.

Cisco OTel Distributions MAY add the following attributes:

| Attribute  | Type | Description  | Example  | Metadata / Data |
|---|---|---|---|---|
