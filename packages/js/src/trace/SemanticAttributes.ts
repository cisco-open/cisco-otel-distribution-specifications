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

type _SemanticAttribute = {
  key: string;
  metadata: boolean;
};

// DO NOT EDIT, this is an Auto-generated file from tools/templates/SemanticAttributes.ts.j2
export const SemanticAttributes = {
  /**
   * The request parameters.
   */
  DB_DYNAMO_PARAMETERS: <_SemanticAttribute>{
    key: "db.dynamo.parameters",
    metadata: true,
  },

  /**
   * The DynamoDB response data.
   */
  DB_DYNAMO_RESPONSE: <_SemanticAttribute>{
    key: "db.dynamo.response",
    metadata: true,
  },

  /**
   * The message ID.
   */
  AWS_SNS_MESSAGE_ID: <_SemanticAttribute>{
    key: "aws.sns.message_id",
    metadata: true,
  },

  /**
   * The message Message structure.
   */
  AWS_SNS_MESSAGE_STRUCTURE: <_SemanticAttribute>{
    key: "aws.sns.message_structure",
    metadata: true,
  },

  /**
   * A prefix for all message attributes collection.
   */
  AWS_SNS_MESSAGE_ATTRIBUTE: <_SemanticAttribute>{
    key: "aws.sns.message_attribute",
    metadata: false,
  },

  /**
   * The phone number for SMS sending.
   */
  AWS_SNS_PHONE_NUMBER: <_SemanticAttribute>{
    key: "aws.sns.phone_number",
    metadata: true,
  },

  /**
   * The topic ARN ID.
   */
  AWS_SNS_TOPIC_ARN: <_SemanticAttribute>{
    key: "aws.sns.topic_arn",
    metadata: true,
  },

  /**
   * The SNS subject.
   */
  AWS_SNS_SUBJECT: <_SemanticAttribute>{
    key: "aws.sns.subject",
    metadata: true,
  },

  /**
   * The SQS queue name.
   *
   * Note: Assuming this structure for QueueUrl: https://sqs.&lt;region&gt;.amazonaws.com/&lt;accountId&gt;/&lt;queueName&gt;.
   */
  AWS_SQS_QUEUE_NAME: <_SemanticAttribute>{
    key: "aws.sqs.queue_name",
    metadata: true,
  },

  /**
   * The user account id.
   *
   * Note: Assuming this structure for QueueUrl: https://sqs.&lt;region&gt;.amazonaws.com/&lt;accountId&gt;/&lt;queueName&gt;.
   */
  AWS_SQS_ACCOUNT_ID: <_SemanticAttribute>{
    key: "aws.sqs.account_id",
    metadata: true,
  },

  /**
   * The record message ID.
   *
   * Note: Captured from SendMessage,ReceiveMessage only.
   */
  AWS_SQS_RECORD_MESSAGE_ID: <_SemanticAttribute>{
    key: "aws.sqs.record.message_id",
    metadata: true,
  },

  /**
   * The response body.
   *
   * Note: Captured from SendMessage,ReceiveMessage only.
   */
  AWS_SQS_RECORD_MESSAGE_BODY: <_SemanticAttribute>{
    key: "aws.sqs.record.message_body",
    metadata: false,
  },

  /**
   * The number in seconds to delay the message.
   */
  AWS_SQS_RECORD_DELAY_SECONDS: <_SemanticAttribute>{
    key: "aws.sqs.record.delay_seconds",
    metadata: true,
  },

  /**
   * A prefix for all message attributes collection.
   */
  AWS_SQS_MESSAGE_ATTRIBUTE: <_SemanticAttribute>{
    key: "aws.sqs.message_attribute",
    metadata: false,
  },

  /**
   * prefix to batch requets entries.
   */
  AWS_SQS_REQUEST_ENTRY: <_SemanticAttribute>{
    key: "aws.sqs.request_entry",
    metadata: false,
  },

  /**
   * prefix to batch result error entries.
   */
  AWS_SQS_RESULT_ERROR_ENTRY: <_SemanticAttribute>{
    key: "aws.sqs.result_error_entry",
    metadata: false,
  },

  /**
   * prefix to batch result entries.
   */
  AWS_SQS_RESULT_ENTRY: <_SemanticAttribute>{
    key: "aws.sqs.result_entry",
    metadata: false,
  },

  /**
   * The number in seconds of how long this message will be available to consume.
   */
  AWS_SQS_VISIBILITY_TIMEOUT: <_SemanticAttribute>{
    key: "aws.sqs.visibility_timeout",
    metadata: true,
  },

  /**
   * The number in seconds for the polling time.
   */
  AWS_SQS_WAIT_TIME_SECONDS: <_SemanticAttribute>{
    key: "aws.sqs.wait_time_seconds",
    metadata: true,
  },

  /**
   * The maximum number of messages can recive.
   */
  AWS_SQS_MAX_NUMBER_OF_MESSAGES: <_SemanticAttribute>{
    key: "aws.sqs.max_number_of_messages",
    metadata: true,
  },

  /**
   * A prefix for all attributes names collection.
   */
  AWS_SQS_ATTRIBUTE_NAME: <_SemanticAttribute>{
    key: "aws.sqs.attribute_name",
    metadata: true,
  },

  /**
   * A prefix for all message attributes names collection.
   */
  AWS_SQS_MESSAGE_ATTRIBUTE_NAME: <_SemanticAttribute>{
    key: "aws.sqs.message_attribute_name",
    metadata: true,
  },

  /**
   * prefix to record attributes.
   */
  AWS_SQS_RECORD_ATTRIBUTE: <_SemanticAttribute>{
    key: "aws.sqs.record.attribute",
    metadata: false,
  },

  /**
   * prefix to record message attributes.
   */
  AWS_SQS_RECORD_MESSAGE_ATTRIBUTE: <_SemanticAttribute>{
    key: "aws.sqs.record.message_attribute",
    metadata: false,
  },

  /**
   * string list of all records.
   */
  AWS_SQS_AWS_SQS_RECORD: <_SemanticAttribute>{
    key: "aws.sqs.aws.sqs.record",
    metadata: true,
  },

  /**
   * prefix to request metadata.
   */
  RPC_REQUEST_METADATA: <_SemanticAttribute>{
    key: "rpc.request.metadata",
    metadata: true,
  },

  /**
   * The transferred body.
   */
  RPC_REQUEST_BODY: <_SemanticAttribute>{
    key: "rpc.request.body",
    metadata: false,
  },

  /**
   * prefix to response metadata.
   */
  RPC_RESPONSE_METADATA: <_SemanticAttribute>{
    key: "rpc.response.metadata",
    metadata: true,
  },

  /**
   * The transferred body.
   */
  RPC_RESPONSE_BODY: <_SemanticAttribute>{
    key: "rpc.response.body",
    metadata: false,
  },

  /**
   * HTTP request header. This describes the prefix to HTTP headers capturing.
   */
  HTTP_REQUEST_HEADER: <_SemanticAttribute>{
    key: "http.request.header",
    metadata: true,
  },

  /**
   * HTTP response header. This describes the prefix to HTTP headers capturing.
   */
  HTTP_RESPONSE_HEADER: <_SemanticAttribute>{
    key: "http.response.header",
    metadata: true,
  },

  /**
   * HTTP message request body.
   */
  HTTP_REQUEST_BODY: <_SemanticAttribute>{
    key: "http.request.body",
    metadata: false,
  },

  /**
   * HTTP message response body.
   */
  HTTP_RESPONSE_BODY: <_SemanticAttribute>{
    key: "http.response.body",
    metadata: false,
  },

  /**
   * prefix to headers.
   */
  MESSAGING_RABBITMQ_MESSAGE_HEADER: <_SemanticAttribute>{
    key: "messaging.rabbitmq.message.header",
    metadata: true,
  },

  /**
   * The transferred payload.
   */
  MESSAGING_RABBITMQ_PAYLOAD: <_SemanticAttribute>{
    key: "messaging.rabbitmq.payload",
    metadata: false,
  },

  /**
   * The transferred payload size in bytes.
   */
  MESSAGING_RABBITMQ_PAYLOAD_SIZE: <_SemanticAttribute>{
    key: "messaging.rabbitmq.payload_size",
    metadata: true,
  },

  /**
   * The request arguments.
   */
  DB_REDIS_ARGUMENTS: <_SemanticAttribute>{
    key: "db.redis.arguments",
    metadata: true,
  },

  /**
   * The response data.
   */
  DB_REDIS_RESPONSE: <_SemanticAttribute>{
    key: "db.redis.response",
    metadata: true,
  },
};
