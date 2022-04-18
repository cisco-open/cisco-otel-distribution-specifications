## Semantic conventions for Redis data collection

<!-- toc -->

- [Client/Server, Unary/Stream attributes](#clientserver-unarystream-attributes)

<!-- tocstop -->

## Client/Server, Unary/Stream attributes

<!-- semconv rpc.grpc -->
| Attribute  | Type | Description  | Examples  | Required |
|---|---|---|---|---|
| `rpc.request.metadata` | string | prefix to request metadata | `"rpc.request.metadata.key=value` | Yes |
| `rpc.request.body` | string | The transferred body | `"{"Count":52,"ScannedCount":52}"` | Yes |
| `rpc.response.metadata` | string | prefix to response metadata | `"rpc.request.metadata.key=value` | Yes |
| `rpc.response.body` | string | The transferred body | `"{"Count":52,"ScannedCount":52}"` | Yes |

Following attributes MUST be provided **at span creation time** (when provided at all), so they can be considered for sampling decisions:

* `rpc.request.metadata`
* `rpc.response.metadata`
<!-- endsemconv -->
