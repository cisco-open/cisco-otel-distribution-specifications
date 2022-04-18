## Semantic conventions for Redis data collection

<!-- toc -->

- [Common attributes](#common-attributes)

<!-- tocstop -->

## Common attributes

<!-- semconv db.redis -->
| Attribute  | Type | Description  | Examples  | Required |
|---|---|---|---|---|
| `db.redis.arguments` | string | The request arguments | `["coupons"]` | Yes |
| `db.redis.response` | string | The response data | `50` | Yes |

Following attributes MUST be provided **at span creation time** (when provided at all), so they can be considered for sampling decisions:

* `db.redis.arguments`
* `db.redis.response`
<!-- endsemconv -->
