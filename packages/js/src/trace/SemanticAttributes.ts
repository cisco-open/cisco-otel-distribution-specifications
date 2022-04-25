/*
 * Copyright The Cisco Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

type SemanticAttribute = {
  key: string;
  sampling_relevant: boolean;
}

// DO NOT EDIT, this is an Auto-generated file from tools/templates/SemanticAttributes.ts.j2
export const SemanticAttributes = {

  /**
  * The request parameters.
  */
  DB_DYNAMO_PARAMETERS: <SemanticAttribute>{ key: 'db.dynamo.parameters', sampling_relevant: true },

  /**
  * The DynamoDB response data.
  */
  DB_DYNAMO_RESPONSE: <SemanticAttribute>{ key: 'db.dynamo.response', sampling_relevant: true },

  /**
  * The message ID.
  */
  AWS_SNS_MESSAGE_ID: <SemanticAttribute>{ key: 'aws.sns.message_id', sampling_relevant: true },

  /**
  * The message Message structure.
  */
  AWS_SNS_MESSAGE_STRUCTURE: <SemanticAttribute>{ key: 'aws.sns.message_structure', sampling_relevant: true },

  /**
  * A prefix for all message attributes collection.
  */
  AWS_SNS_MESSAGE_ATTRIBUTE: <SemanticAttribute>{ key: 'aws.sns.message_attribute', sampling_relevant: false },

  /**
  * The phone number for SMS sending.
  */
  AWS_SNS_PHONE_NUMBER: <SemanticAttribute>{ key: 'aws.sns.phone_number', sampling_relevant: true },

  /**
  * The topic ARN ID.
  */
  AWS_SNS_TOPIC_ARN: <SemanticAttribute>{ key: 'aws.sns.topic_arn', sampling_relevant: true },

  /**
  * The SNS subject.
  */
  AWS_SNS_SUBJECT: <SemanticAttribute>{ key: 'aws.sns.subject', sampling_relevant: true },

  /**
  * The SQS queue name.
  *
  * Note: Assuming this structure for QueueUrl: https://sqs.&lt;region&gt;.amazonaws.com/&lt;accountId&gt;/&lt;queueName&gt;.
  */
  AWS_SQS_QUEUE_NAME: <SemanticAttribute>{ key: 'aws.sqs.queue_name', sampling_relevant: true },

  /**
  * The user account id.
  *
  * Note: Assuming this structure for QueueUrl: https://sqs.&lt;region&gt;.amazonaws.com/&lt;accountId&gt;/&lt;queueName&gt;.
  */
  AWS_SQS_ACCOUNT_ID: <SemanticAttribute>{ key: 'aws.sqs.account_id', sampling_relevant: true },

  /**
  * The record message ID.
  *
  * Note: Captured from SendMessage,ReceiveMessage only.
  */
  AWS_SQS_RECORD_MESSAGE_ID: <SemanticAttribute>{ key: 'aws.sqs.record.message_id', sampling_relevant: true },

  /**
  * The response body.
  *
  * Note: Captured from SendMessage,ReceiveMessage only.
  */
  AWS_SQS_RECORD_MESSAGE_BODY: <SemanticAttribute>{ key: 'aws.sqs.record.message_body', sampling_relevant: false },

  /**
  * The number in seconds to delay the message.
  */
  AWS_SQS_RECORD_DELAY_SECONDS: <SemanticAttribute>{ key: 'aws.sqs.record.delay_seconds', sampling_relevant: true },

  /**
  * A prefix for all message attributes collection.
  */
  AWS_SQS_MESSAGE_ATTRIBUTE: <SemanticAttribute>{ key: 'aws.sqs.message_attribute', sampling_relevant: false },

  /**
  * prefix to batch requets entries.
  */
  AWS_SQS_REQUEST_ENTRY: <SemanticAttribute>{ key: 'aws.sqs.request_entry', sampling_relevant: false },

  /**
  * prefix to batch result error entries.
  */
  AWS_SQS_RESULT_ERROR_ENTRY: <SemanticAttribute>{ key: 'aws.sqs.result_error_entry', sampling_relevant: false },

  /**
  * prefix to batch result entries.
  */
  AWS_SQS_RESULT_ENTRY: <SemanticAttribute>{ key: 'aws.sqs.result_entry', sampling_relevant: false },

  /**
  * The number in seconds of how long this message will be available to consume.
  */
  AWS_SQS_VISIBILITY_TIMEOUT: <SemanticAttribute>{ key: 'aws.sqs.visibility_timeout', sampling_relevant: true },

  /**
  * The number in seconds for the polling time.
  */
  AWS_SQS_WAIT_TIME_SECONDS: <SemanticAttribute>{ key: 'aws.sqs.wait_time_seconds', sampling_relevant: true },

  /**
  * The maximum number of messages can recive.
  */
  AWS_SQS_MAX_NUMBER_OF_MESSAGES: <SemanticAttribute>{ key: 'aws.sqs.max_number_of_messages', sampling_relevant: true },

  /**
  * A prefix for all attributes names collection.
  */
  AWS_SQS_ATTRIBUTE_NAME: <SemanticAttribute>{ key: 'aws.sqs.attribute_name', sampling_relevant: true },

  /**
  * A prefix for all message attributes names collection.
  */
  AWS_SQS_MESSAGE_ATTRIBUTE_NAME: <SemanticAttribute>{ key: 'aws.sqs.message_attribute_name', sampling_relevant: true },

  /**
  * prefix to record attributes.
  */
  AWS_SQS_RECORD_ATTRIBUTE: <SemanticAttribute>{ key: 'aws.sqs.record.attribute', sampling_relevant: false },

  /**
  * prefix to record message attributes.
  */
  AWS_SQS_RECORD_MESSAGE_ATTRIBUTE: <SemanticAttribute>{ key: 'aws.sqs.record.message_attribute', sampling_relevant: false },

  /**
  * string list of all records.
  */
  AWS_SQS_AWS_SQS_RECORD: <SemanticAttribute>{ key: 'aws.sqs.aws.sqs.record', sampling_relevant: true },

  /**
  * prefix to request metadata.
  */
  RPC_REQUEST_METADATA: <SemanticAttribute>{ key: 'rpc.request.metadata', sampling_relevant: true },

  /**
  * The transferred body.
  */
  RPC_REQUEST_BODY: <SemanticAttribute>{ key: 'rpc.request.body', sampling_relevant: false },

  /**
  * prefix to response metadata.
  */
  RPC_RESPONSE_METADATA: <SemanticAttribute>{ key: 'rpc.response.metadata', sampling_relevant: true },

  /**
  * The transferred body.
  */
  RPC_RESPONSE_BODY: <SemanticAttribute>{ key: 'rpc.response.body', sampling_relevant: false },

  /**
  * HTTP request header. This describes the prefix to HTTP headers capturing.
  */
  HTTP_REQUEST_HEADER: <SemanticAttribute>{ key: 'http.request.header', sampling_relevant: true },

  /**
  * HTTP response header. This describes the prefix to HTTP headers capturing.
  */
  HTTP_RESPONSE_HEADER: <SemanticAttribute>{ key: 'http.response.header', sampling_relevant: true },

  /**
  * HTTP message request body.
  */
  HTTP_REQUEST_BODY: <SemanticAttribute>{ key: 'http.request.body', sampling_relevant: false },

  /**
  * HTTP message response body.
  */
  HTTP_RESPONSE_BODY: <SemanticAttribute>{ key: 'http.response.body', sampling_relevant: false },

  /**
  * prefix to headers.
  */
  MESSAGING_RABBITMQ_MESSAGE_HEADER: <SemanticAttribute>{ key: 'messaging.rabbitmq.message.header', sampling_relevant: true },

  /**
  * The transferred payload.
  */
  MESSAGING_RABBITMQ_PAYLOAD: <SemanticAttribute>{ key: 'messaging.rabbitmq.payload', sampling_relevant: false },

  /**
  * The transferred payload size in bytes.
  */
  MESSAGING_RABBITMQ_PAYLOAD_SIZE: <SemanticAttribute>{ key: 'messaging.rabbitmq.payload_size', sampling_relevant: true },

  /**
  * The request arguments.
  */
  DB_REDIS_ARGUMENTS: <SemanticAttribute>{ key: 'db.redis.arguments', sampling_relevant: true },

  /**
  * The response data.
  */
  DB_REDIS_RESPONSE: <SemanticAttribute>{ key: 'db.redis.response', sampling_relevant: true },
}