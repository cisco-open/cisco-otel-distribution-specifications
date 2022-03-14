## Semantic conventions for SQS (aws-sdk) data collection

<!-- toc -->

- [Common attributes](#common-attributes)
- [Request SendMessage attributes](#request-sendmessage-attributes)

<!-- tocstop -->

## Common attributes
<!-- semconv aws.sqs -->
| Attribute  | Type | Description  | Examples  | Required |
|---|---|---|---|---|
| `aws.sqs.queue_name` | string | The SQS queue name. [1] | `retail-store-lambda-reports` | No |
| `aws.sqs.account_id` | int | The user account id. [2] | `147457102604` | No |

**[1]:** Assuming this structure for QueueUrl: https://sqs.<region>.amazonaws.com/<accountId>/<queueName>

**[2]:** Assuming this structure for QueueUrl: https://sqs.<region>.amazonaws.com/<accountId>/<queueName>

Following attributes MUST be provided **at span creation time** (when provided at all), so they can be considered for sampling decisions:

* `aws.sqs.queue_name`
* `aws.sqs.account_id`
<!-- endsemconv -->

## Request SendMessage attributes
<!-- semconv aws.sqs.request.send_message -->
| Attribute  | Type | Description  | Examples  | Required |
|---|---|---|---|---|
| `aws.sqs.record.message_body` | string | The SQS message body | `Test sqs: This is the message body.` | No |
| `aws.sqs.record.delay_seconds` | int | The number in seconds to delay the message | `10` | No |
| `aws.sqs.message_attribute` | string | A prefix for all message attributes collection. | `{
  Title: {
    DataType: 'String',
    StringValue: 'The Whistler',
  },
  Author: {
    DataType: 'String',
    StringValue: 'John Grisham',
  },
  WeeksOn: {
    DataType: 'Number',
    StringValue: '6',
  },
}
` | No |

Following attributes MUST be provided **at span creation time** (when provided at all), so they can be considered for sampling decisions:

* `aws.sqs.record.delay_seconds`
<!-- endsemconv -->