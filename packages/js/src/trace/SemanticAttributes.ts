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
}

// DO NOT EDIT, this is an Auto-generated file from tools/templates/SemanticAttributes.ts.j2
export const SemanticAttributes = {

  /**
  * The SQS queue name.
  *
  * Note: Assuming this structure for QueueUrl: https://sqs.&lt;region&gt;.amazonaws.com/&lt;accountId&gt;/&lt;queueName&gt;.
  */
  AWS_SQS_QUEUE_NAME: <_SemanticAttribute>{ key: 'aws.sqs.queue_name', metadata: true },

  /**
  * The user account id.
  *
  * Note: Assuming this structure for QueueUrl: https://sqs.&lt;region&gt;.amazonaws.com/&lt;accountId&gt;/&lt;queueName&gt;.
  */
  AWS_SQS_ACCOUNT_ID: <_SemanticAttribute>{ key: 'aws.sqs.account_id', metadata: true },

  /**
  * The SQS message body.
  */
  AWS_SQS_RECORD_MESSAGE_BODY: <_SemanticAttribute>{ key: 'aws.sqs.record.message_body', metadata: false },

  /**
  * The number in seconds to delay the message.
  */
  AWS_SQS_RECORD_DELAY_SECONDS: <_SemanticAttribute>{ key: 'aws.sqs.record.delay_seconds', metadata: true },

  /**
  * HTTP request header. This describes the prefix to HTTP headers capturing.
  */
  HTTP_REQUEST_HEADER: <_SemanticAttribute>{ key: 'http.request.header', metadata: true },

  /**
  * HTTP response header. This describes the prefix to HTTP headers capturing.
  */
  HTTP_RESPONSE_HEADER: <_SemanticAttribute>{ key: 'http.response.header', metadata: true },

  /**
  * HTTP message request body.
  */
  HTTP_REQUEST_BODY: <_SemanticAttribute>{ key: 'http.request.body', metadata: false },

  /**
  * HTTP message response body.
  */
  HTTP_RESPONSE_BODY: <_SemanticAttribute>{ key: 'http.response.body', metadata: false },
}