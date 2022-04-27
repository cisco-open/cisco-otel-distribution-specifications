## Semantic conventions for DynamoDB (aws-sdk) data collection

<!-- toc -->

- [PutItem attributes](#putitem-attributes)

<!-- tocstop -->

## PutItem attributes

<!-- semconv aws.dynamo.put_item -->

| Attribute              | Type   | Description                | Examples                                                 | Required |
| ---------------------- | ------ | -------------------------- | -------------------------------------------------------- | -------- |
| `db.dynamo.parameters` | string | The request parameters     | `"{"TableName": "retail-store-lambda-inventory-items"}"` | Yes      |
| `db.dynamo.response`   | string | The DynamoDB response data | `"{"Count":52,"ScannedCount":52}"`                       | Yes      |

<!-- endsemconv -->
