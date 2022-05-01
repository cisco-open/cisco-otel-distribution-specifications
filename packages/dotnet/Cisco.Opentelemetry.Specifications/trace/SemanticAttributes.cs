// Copyright The Cisco Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using System;

// DO NOT EDIT, this is an Auto-generated file from tools/templates/dotnet/SemanticAttributes.cs.j2
namespace com.cisco.opentelemetry.specifications.trace.attributes;

public static class SemanticAttributes
{
  /// <summary>
  /// The request parameters.
  /// </summary>
  public const string DbDynamoParameters = "db.dynamo.parameters";

  /// <summary>
  /// The DynamoDB response data.
  /// </summary>
  public const string DbDynamoResponse = "db.dynamo.response";

  /// <summary>
  /// The message ID.
  /// </summary>
  public const string AwsSnsMessageId = "aws.sns.message_id";

  /// <summary>
  /// The message Message structure.
  /// </summary>
  public const string AwsSnsMessageStructure = "aws.sns.message_structure";

  /// <summary>
  /// A prefix for all message attributes collection.
  /// </summary>
  public const string AwsSnsMessageAttribute = "aws.sns.message_attribute";

  /// <summary>
  /// The phone number for SMS sending.
  /// </summary>
  public const string AwsSnsPhoneNumber = "aws.sns.phone_number";

  /// <summary>
  /// The topic ARN ID.
  /// </summary>
  public const string AwsSnsTopicArn = "aws.sns.topic_arn";

  /// <summary>
  /// The SNS subject.
  /// </summary>
  public const string AwsSnsSubject = "aws.sns.subject";

  /// <summary>
  /// The SQS queue name.
  /// </summary>
  /// <remarks>
  /// Assuming this structure for QueueUrl: https://sqs.<region>.amazonaws.com/<accountId>/<queueName>
  /// </remarks>
  public const string AwsSqsQueueName = "aws.sqs.queue_name";

  /// <summary>
  /// The user account id.
  /// </summary>
  /// <remarks>
  /// Assuming this structure for QueueUrl: https://sqs.<region>.amazonaws.com/<accountId>/<queueName>
  /// </remarks>
  public const string AwsSqsAccountId = "aws.sqs.account_id";

  /// <summary>
  /// The record message ID.
  /// </summary>
  /// <remarks>
  /// Captured from SendMessage,ReceiveMessage only
  /// </remarks>
  public const string AwsSqsRecordMessageId = "aws.sqs.record.message_id";

  /// <summary>
  /// The response body.
  /// </summary>
  /// <remarks>
  /// Captured from SendMessage,ReceiveMessage only
  /// </remarks>
  public const string AwsSqsRecordMessageBody = "aws.sqs.record.message_body";

  /// <summary>
  /// The number in seconds to delay the message.
  /// </summary>
  public const string AwsSqsRecordDelaySeconds = "aws.sqs.record.delay_seconds";

  /// <summary>
  /// A prefix for all message attributes collection.
  /// </summary>
  public const string AwsSqsMessageAttribute = "aws.sqs.message_attribute";

  /// <summary>
  /// prefix to batch requets entries.
  /// </summary>
  public const string AwsSqsRequestEntry = "aws.sqs.request_entry";

  /// <summary>
  /// prefix to batch result error entries.
  /// </summary>
  public const string AwsSqsResultErrorEntry = "aws.sqs.result_error_entry";

  /// <summary>
  /// prefix to batch result entries.
  /// </summary>
  public const string AwsSqsResultEntry = "aws.sqs.result_entry";

  /// <summary>
  /// The number in seconds of how long this message will be available to consume.
  /// </summary>
  public const string AwsSqsVisibilityTimeout = "aws.sqs.visibility_timeout";

  /// <summary>
  /// The number in seconds for the polling time.
  /// </summary>
  public const string AwsSqsWaitTimeSeconds = "aws.sqs.wait_time_seconds";

  /// <summary>
  /// The maximum number of messages can recive.
  /// </summary>
  public const string AwsSqsMaxNumberOfMessages = "aws.sqs.max_number_of_messages";

  /// <summary>
  /// A prefix for all attributes names collection.
  /// </summary>
  public const string AwsSqsAttributeName = "aws.sqs.attribute_name";

  /// <summary>
  /// A prefix for all message attributes names collection.
  /// </summary>
  public const string AwsSqsMessageAttributeName = "aws.sqs.message_attribute_name";

  /// <summary>
  /// prefix to record attributes.
  /// </summary>
  public const string AwsSqsRecordAttribute = "aws.sqs.record.attribute";

  /// <summary>
  /// prefix to record message attributes.
  /// </summary>
  public const string AwsSqsRecordMessageAttribute = "aws.sqs.record.message_attribute";

  /// <summary>
  /// string list of all records.
  /// </summary>
  public const string AwsSqsAwsSqsRecord = "aws.sqs.aws.sqs.record";

  /// <summary>
  /// prefix to request metadata.
  /// </summary>
  public const string RpcRequestMetadata = "rpc.request.metadata";

  /// <summary>
  /// The transferred body.
  /// </summary>
  public const string RpcRequestBody = "rpc.request.body";

  /// <summary>
  /// prefix to response metadata.
  /// </summary>
  public const string RpcResponseMetadata = "rpc.response.metadata";

  /// <summary>
  /// The transferred body.
  /// </summary>
  public const string RpcResponseBody = "rpc.response.body";

  /// <summary>
  /// HTTP request header. This describes the prefix to HTTP headers capturing.
  /// </summary>
  public const string HttpRequestHeader = "http.request.header";

  /// <summary>
  /// HTTP response header. This describes the prefix to HTTP headers capturing.
  /// </summary>
  public const string HttpResponseHeader = "http.response.header";

  /// <summary>
  /// HTTP message request body.
  /// </summary>
  public const string HttpRequestBody = "http.request.body";

  /// <summary>
  /// HTTP message response body.
  /// </summary>
  public const string HttpResponseBody = "http.response.body";

  /// <summary>
  /// prefix to headers.
  /// </summary>
  public const string MessagingRabbitmqMessageHeader = "messaging.rabbitmq.message.header";

  /// <summary>
  /// The transferred payload.
  /// </summary>
  public const string MessagingRabbitmqPayload = "messaging.rabbitmq.payload";

  /// <summary>
  /// The transferred payload size in bytes.
  /// </summary>
  public const string MessagingRabbitmqPayloadSize = "messaging.rabbitmq.payload_size";

  /// <summary>
  /// The request arguments.
  /// </summary>
  public const string DbRedisArguments = "db.redis.arguments";

  /// <summary>
  /// The response data.
  /// </summary>
  public const string DbRedisResponse = "db.redis.response";
}