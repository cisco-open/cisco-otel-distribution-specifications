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

package com.cisco.opentelemetry.specifications.trace.attributes;

import static io.opentelemetry.api.common.AttributeKey.booleanKey;
import static io.opentelemetry.api.common.AttributeKey.doubleKey;
import static io.opentelemetry.api.common.AttributeKey.longKey;
import static io.opentelemetry.api.common.AttributeKey.stringKey;
import static io.opentelemetry.api.common.AttributeKey.stringArrayKey;

import io.opentelemetry.api.common.AttributeKey;
import java.util.List;

// DO NOT EDIT, this is an Auto-generated file from tools/templates/java/SemanticAttributes.java.j2
public final class SemanticAttributes {
  /**
   * The URL of the OpenTelemetry schema for these keys and values.
   */
  public static final String SCHEMA_URL = "";

  /**
  * The request parameters
  */
  public static final AttributeKey<String> DB_DYNAMO_PARAMETERS = stringKey("db.dynamo.parameters");

  /**
  * The DynamoDB response data
  */
  public static final AttributeKey<String> DB_DYNAMO_RESPONSE = stringKey("db.dynamo.response");

  /**
  * The message ID
  */
  public static final AttributeKey<String> AWS_SNS_MESSAGE_ID = stringKey("aws.sns.message_id");

  /**
  * The message Message structure
  */
  public static final AttributeKey<String> AWS_SNS_MESSAGE_STRUCTURE = stringKey("aws.sns.message_structure");

  /**
  * A prefix for all message attributes collection.
  */
  public static final AttributeKey<String> AWS_SNS_MESSAGE_ATTRIBUTE = stringKey("aws.sns.message_attribute");

  /**
  * The phone number for SMS sending
  */
  public static final AttributeKey<String> AWS_SNS_PHONE_NUMBER = stringKey("aws.sns.phone_number");

  /**
  * The topic ARN ID
  */
  public static final AttributeKey<String> AWS_SNS_TOPIC_ARN = stringKey("aws.sns.topic_arn");

  /**
  * The SNS subject
  */
  public static final AttributeKey<String> AWS_SNS_SUBJECT = stringKey("aws.sns.subject");

  /**
  * The SQS queue name.
  *
  * <p>Notes:
    <ul> <li>Assuming this structure for QueueUrl: https://sqs.&lt;region&gt;.amazonaws.com/&lt;accountId&gt;/&lt;queueName&gt;</li> </ul>
  */
  public static final AttributeKey<String> AWS_SQS_QUEUE_NAME = stringKey("aws.sqs.queue_name");

  /**
  * The user account id.
  *
  * <p>Notes:
    <ul> <li>Assuming this structure for QueueUrl: https://sqs.&lt;region&gt;.amazonaws.com/&lt;accountId&gt;/&lt;queueName&gt;</li> </ul>
  */
  public static final AttributeKey<Long> AWS_SQS_ACCOUNT_ID = longKey("aws.sqs.account_id");

  /**
  * The record message ID
  *
  * <p>Notes:
    <ul> <li>Captured from SendMessage,ReceiveMessage only</li> </ul>
  */
  public static final AttributeKey<String> AWS_SQS_RECORD_MESSAGE_ID = stringKey("aws.sqs.record.message_id");

  /**
  * The response body
  *
  * <p>Notes:
    <ul> <li>Captured from SendMessage,ReceiveMessage only</li> </ul>
  */
  public static final AttributeKey<String> AWS_SQS_RECORD_MESSAGE_BODY = stringKey("aws.sqs.record.message_body");

  /**
  * The number in seconds to delay the message
  */
  public static final AttributeKey<Long> AWS_SQS_RECORD_DELAY_SECONDS = longKey("aws.sqs.record.delay_seconds");

  /**
  * A prefix for all message attributes collection.
  */
  public static final AttributeKey<String> AWS_SQS_MESSAGE_ATTRIBUTE = stringKey("aws.sqs.message_attribute");

  /**
  * prefix to batch requets entries
  */
  public static final AttributeKey<String> AWS_SQS_REQUEST_ENTRY = stringKey("aws.sqs.request_entry");

  /**
  * prefix to batch result error entries
  */
  public static final AttributeKey<String> AWS_SQS_RESULT_ERROR_ENTRY = stringKey("aws.sqs.result_error_entry");

  /**
  * prefix to batch result entries
  */
  public static final AttributeKey<String> AWS_SQS_RESULT_ENTRY = stringKey("aws.sqs.result_entry");

  /**
  * The number in seconds of how long this message will be available to consume
  */
  public static final AttributeKey<Long> AWS_SQS_VISIBILITY_TIMEOUT = longKey("aws.sqs.visibility_timeout");

  /**
  * The number in seconds for the polling time
  */
  public static final AttributeKey<Long> AWS_SQS_WAIT_TIME_SECONDS = longKey("aws.sqs.wait_time_seconds");

  /**
  * The maximum number of messages can recive
  */
  public static final AttributeKey<Long> AWS_SQS_MAX_NUMBER_OF_MESSAGES = longKey("aws.sqs.max_number_of_messages");

  /**
  * A prefix for all attributes names collection.
  */
  public static final AttributeKey<String> AWS_SQS_ATTRIBUTE_NAME = stringKey("aws.sqs.attribute_name");

  /**
  * A prefix for all message attributes names collection.
  */
  public static final AttributeKey<String> AWS_SQS_MESSAGE_ATTRIBUTE_NAME = stringKey("aws.sqs.message_attribute_name");

  /**
  * prefix to record attributes
  */
  public static final AttributeKey<String> AWS_SQS_RECORD_ATTRIBUTE = stringKey("aws.sqs.record.attribute");

  /**
  * prefix to record message attributes
  */
  public static final AttributeKey<String> AWS_SQS_RECORD_MESSAGE_ATTRIBUTE = stringKey("aws.sqs.record.message_attribute");

  /**
  * string list of all records
  */
  public static final AttributeKey<String> AWS_SQS_AWS_SQS_RECORD = stringKey("aws.sqs.aws.sqs.record");

  /**
  * prefix to request metadata
  */
  public static final AttributeKey<String> RPC_REQUEST_METADATA = stringKey("rpc.request.metadata");

  /**
  * The transferred body
  */
  public static final AttributeKey<String> RPC_REQUEST_BODY = stringKey("rpc.request.body");

  /**
  * prefix to response metadata
  */
  public static final AttributeKey<String> RPC_RESPONSE_METADATA = stringKey("rpc.response.metadata");

  /**
  * The transferred body
  */
  public static final AttributeKey<String> RPC_RESPONSE_BODY = stringKey("rpc.response.body");

  /**
  * HTTP request header. This describes the prefix to HTTP headers capturing
  */
  public static final AttributeKey<String> HTTP_REQUEST_HEADER = stringKey("http.request.header");

  /**
  * HTTP response header. This describes the prefix to HTTP headers capturing
  */
  public static final AttributeKey<String> HTTP_RESPONSE_HEADER = stringKey("http.response.header");

  /**
  * HTTP message request body
  */
  public static final AttributeKey<String> HTTP_REQUEST_BODY = stringKey("http.request.body");

  /**
  * HTTP message response body
  */
  public static final AttributeKey<String> HTTP_RESPONSE_BODY = stringKey("http.response.body");

  /**
  * prefix to headers
  */
  public static final AttributeKey<String> MESSAGING_RABBITMQ_MESSAGE_HEADER = stringKey("messaging.rabbitmq.message.header");

  /**
  * The transferred payload
  */
  public static final AttributeKey<String> MESSAGING_RABBITMQ_PAYLOAD = stringKey("messaging.rabbitmq.payload");

  /**
  * The transferred payload size in bytes
  */
  public static final AttributeKey<Long> MESSAGING_RABBITMQ_PAYLOAD_SIZE = longKey("messaging.rabbitmq.payload_size");

  /**
  * The request arguments
  */
  public static final AttributeKey<String> DB_REDIS_ARGUMENTS = stringKey("db.redis.arguments");

  /**
  * The response data
  */
  public static final AttributeKey<String> DB_REDIS_RESPONSE = stringKey("db.redis.response");

  // Enum definitions

  private SemanticAttributes() {}
}