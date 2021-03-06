## Semantic conventions for SQS (aws-sdk) data collection

<!-- toc -->

- [Common attributes](#common-attributes)
- [SendMessage attributes](#sendmessage-attributes)
- [SendMessageBatch attributes](#sendmessagebatch-attributes)
- [ReceiveMessage attributes](#receivemessage-attributes)

<!-- tocstop -->

## Common attributes

<!-- semconv aws.sqs -->

| Attribute                     | Type   | Description               | Examples                               | Required |
| ----------------------------- | ------ | ------------------------- | -------------------------------------- | -------- |
| `aws.sqs.queue_name`          | string | The SQS queue name. [1]   | `retail-store-lambda-reports`          | Yes      |
| `aws.sqs.account_id`          | int    | The user account id. [2]  | `147457102604`                         | Yes      |
| `aws.sqs.record.message_id`   | string | The record message ID [3] | `5652789a-f672-5064-9459-223395b82d3a` | Yes      |
| `aws.sqs.record.message_body` | string | The response body [4]     | `{response: 'message'}`                | Yes      |

**[1]:** Assuming this structure for QueueUrl: https://sqs.<region>.amazonaws.com/<accountId>/<queueName>

**[2]:** Assuming this structure for QueueUrl: https://sqs.<region>.amazonaws.com/<accountId>/<queueName>

**[3]:** Captured from SendMessage,ReceiveMessage only

**[4]:** Captured from SendMessage,ReceiveMessage only

Following attributes MUST be provided **at span creation time** (when provided at all), so they can be considered for sampling decisions:

- `aws.sqs.queue_name`
- `aws.sqs.account_id`
- `aws.sqs.record.message_id`
<!-- endsemconv -->

## SendMessage attributes

<!-- semconv aws.sqs.send_message -->

| Attribute                      | Type   | Description                                     | Examples                                                                            | Required |
| ------------------------------ | ------ | ----------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| `aws.sqs.record.delay_seconds` | int    | The number in seconds to delay the message      | `10`                                                                                | Yes      |
| `aws.sqs.message_attribute`    | string | A prefix for all message attributes collection. | `aws.sqs.message_attribute.Title={DataType: 'String', StringValue: 'The Whistler'}` | Yes      |

Following attributes MUST be provided **at span creation time** (when provided at all), so they can be considered for sampling decisions:

- `aws.sqs.record.delay_seconds`
<!-- endsemconv -->

## SendMessageBatch attributes

<!-- semconv aws.sqs.send_message_batch -->

| Attribute                    | Type   | Description                          | Examples | Required |
| ---------------------------- | ------ | ------------------------------------ | -------- | -------- |
| `aws.sqs.request_entry`      | string | prefix to batch requets entries      | `[]`     | Yes      |
| `aws.sqs.result_error_entry` | string | prefix to batch result error entries | `[]`     | Yes      |
| `aws.sqs.result_entry`       | string | prefix to batch result entries       | `[]`     | Yes      |

<!-- endsemconv -->

## ReceiveMessage attributes

<!-- semconv aws.sqs.receive_message -->

| Attribute                          | Type   | Description                                                                 | Examples                                                   | Required |
| ---------------------------------- | ------ | --------------------------------------------------------------------------- | ---------------------------------------------------------- | -------- |
| `aws.sqs.visibility_timeout`       | int    | The number in seconds of how long this message will be available to consume | `10`                                                       | Yes      |
| `aws.sqs.wait_time_seconds`        | int    | The number in seconds for the polling time                                  | `10`                                                       | Yes      |
| `aws.sqs.max_number_of_messages`   | int    | The maximum number of messages can recive                                   | `10`                                                       | Yes      |
| `aws.sqs.attribute_name`           | string | A prefix for all attributes names collection.                               | `aws.sqs.attribute_name.attr=name`                         | Yes      |
| `aws.sqs.message_attribute_name`   | string | A prefix for all message attributes names collection.                       | `aws.sqs.message_attribute_name.attr=name`                 | Yes      |
| `aws.sqs.record.attribute`         | string | prefix to record attributes                                                 | `aws.sqs.record.attribute.key=attribute`                   | Yes      |
| `aws.sqs.record.message_attribute` | string | prefix to record message attributes                                         | `aws.sqs.record.message_attribute.key='message attribute'` | Yes      |
| `aws.sqs.aws.sqs.record`           | string | string list of all records                                                  | `[{"message_body": "{"cart": {"12341234": "1"}"}]`         | Yes      |

Following attributes MUST be provided **at span creation time** (when provided at all), so they can be considered for sampling decisions:

- `aws.sqs.visibility_timeout`
- `aws.sqs.wait_time_seconds`
- `aws.sqs.max_number_of_messages`
<!-- endsemconv -->
