## Semantic conventions for RabbitMQ data collection

<!-- toc -->

- [Produce/Consume attributes](#produceconsume-attributes)

<!-- tocstop -->

## Produce/Consume attributes

<!-- semconv db.redis -->

| Attribute                        | Type   | Description           | Examples      | Required |
| -------------------------------- | ------ | --------------------- | ------------- | -------- |
| [`db.redis.arguments`](redis.md) | string | The request arguments | `["coupons"]` | Yes      |
| [`db.redis.response`](redis.md)  | string | The response data     | `50`          | Yes      |

<!-- endsemconv -->
