## Semantic conventions for SNS (aws-sdk) data collection

<!-- toc -->

- [Publish attributes](#publish-attributes)

<!-- tocstop -->

## Publish attributes

<!-- semconv aws.sns.publish -->

| Attribute                   | Type   | Description                                     | Examples                                                                            | Required |
| --------------------------- | ------ | ----------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| `aws.sns.message_id`        | string | The message ID                                  | `5652789a-f672-5064-9459-223395b82d3a`                                              | Yes      |
| `aws.sns.message_structure` | string | The message Message structure                   | `json`                                                                              | Yes      |
| `aws.sns.message_attribute` | string | A prefix for all message attributes collection. | `aws.snq.message_attribute.Title={DataType: 'String', StringValue: 'The Whistler'}` | Yes      |
| `aws.sns.phone_number`      | string | The phone number for SMS sending                | `+972 52 367 2314`                                                                  | Yes      |
| `aws.sns.topic_arn`         | string | The topic ARN ID                                | `arn:aws:iam::123456789012:user/Development/product_1234`                           | Yes      |
| `aws.sns.subject`           | string | The SNS subject                                 | `subject`                                                                           | Yes      |

<!-- endsemconv -->
