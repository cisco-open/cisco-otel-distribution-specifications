# Copyright The Cisco Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from collections import namedtuple

_SemanticAttribute = namedtuple('_SemanticAttribute', 'key value')

class SemanticAttributes:
    DB_DYNAMO_PARAMETERS = _SemanticAttribute("db.dynamo.parameters", True)
    """
    The request parameters.
    """

    DB_DYNAMO_RESPONSE = _SemanticAttribute("db.dynamo.response", True)
    """
    The DynamoDB response data.
    """

    AWS_SNS_MESSAGE_ID = _SemanticAttribute("aws.sns.message_id", True)
    """
    The message ID.
    """

    AWS_SNS_MESSAGE_STRUCTURE = _SemanticAttribute("aws.sns.message_structure", True)
    """
    The message Message structure.
    """

    AWS_SNS_MESSAGE_ATTRIBUTE = _SemanticAttribute("aws.sns.message_attribute", False)
    """
    A prefix for all message attributes collection.
    """

    AWS_SNS_PHONE_NUMBER = _SemanticAttribute("aws.sns.phone_number", True)
    """
    The phone number for SMS sending.
    """

    AWS_SNS_TOPIC_ARN = _SemanticAttribute("aws.sns.topic_arn", True)
    """
    The topic ARN ID.
    """

    AWS_SNS_SUBJECT = _SemanticAttribute("aws.sns.subject", True)
    """
    The SNS subject.
    """

    AWS_SQS_QUEUE_NAME = _SemanticAttribute("aws.sqs.queue_name", True)
    """
    The SQS queue name.
    Note: Assuming this structure for QueueUrl: https://sqs.<region>.amazonaws.com/<accountId>/<queueName>.
    """

    AWS_SQS_ACCOUNT_ID = _SemanticAttribute("aws.sqs.account_id", True)
    """
    The user account id.
    Note: Assuming this structure for QueueUrl: https://sqs.<region>.amazonaws.com/<accountId>/<queueName>.
    """

    AWS_SQS_RECORD_MESSAGE_ID = _SemanticAttribute("aws.sqs.record.message_id", True)
    """
    The record message ID.
    Note: Captured from SendMessage,ReceiveMessage only.
    """

    AWS_SQS_RECORD_MESSAGE_BODY = _SemanticAttribute("aws.sqs.record.message_body", False)
    """
    The response body.
    Note: Captured from SendMessage,ReceiveMessage only.
    """

    AWS_SQS_RECORD_DELAY_SECONDS = _SemanticAttribute("aws.sqs.record.delay_seconds", True)
    """
    The number in seconds to delay the message.
    """

    AWS_SQS_MESSAGE_ATTRIBUTE = _SemanticAttribute("aws.sqs.message_attribute", False)
    """
    A prefix for all message attributes collection.
    """

    AWS_SQS_REQUEST_ENTRY = _SemanticAttribute("aws.sqs.request_entry", False)
    """
    prefix to batch requets entries.
    """

    AWS_SQS_RESULT_ERROR_ENTRY = _SemanticAttribute("aws.sqs.result_error_entry", False)
    """
    prefix to batch result error entries.
    """

    AWS_SQS_RESULT_ENTRY = _SemanticAttribute("aws.sqs.result_entry", False)
    """
    prefix to batch result entries.
    """

    AWS_SQS_VISIBILITY_TIMEOUT = _SemanticAttribute("aws.sqs.visibility_timeout", True)
    """
    The number in seconds of how long this message will be available to consume.
    """

    AWS_SQS_WAIT_TIME_SECONDS = _SemanticAttribute("aws.sqs.wait_time_seconds", True)
    """
    The number in seconds for the polling time.
    """

    AWS_SQS_MAX_NUMBER_OF_MESSAGES = _SemanticAttribute("aws.sqs.max_number_of_messages", True)
    """
    The maximum number of messages can recive.
    """

    AWS_SQS_ATTRIBUTE_NAME = _SemanticAttribute("aws.sqs.attribute_name", True)
    """
    A prefix for all attributes names collection.
    """

    AWS_SQS_MESSAGE_ATTRIBUTE_NAME = _SemanticAttribute("aws.sqs.message_attribute_name", True)
    """
    A prefix for all message attributes names collection.
    """

    AWS_SQS_RECORD_ATTRIBUTE = _SemanticAttribute("aws.sqs.record.attribute", False)
    """
    prefix to record attributes.
    """

    AWS_SQS_RECORD_MESSAGE_ATTRIBUTE = _SemanticAttribute("aws.sqs.record.message_attribute", False)
    """
    prefix to record message attributes.
    """

    AWS_SQS_AWS_SQS_RECORD = _SemanticAttribute("aws.sqs.aws.sqs.record", True)
    """
    string list of all records.
    """

    RPC_REQUEST_METADATA = _SemanticAttribute("rpc.request.metadata", True)
    """
    prefix to request metadata.
    """

    RPC_REQUEST_BODY = _SemanticAttribute("rpc.request.body", False)
    """
    The transferred body.
    """

    RPC_RESPONSE_METADATA = _SemanticAttribute("rpc.response.metadata", True)
    """
    prefix to response metadata.
    """

    RPC_RESPONSE_BODY = _SemanticAttribute("rpc.response.body", False)
    """
    The transferred body.
    """

    HTTP_REQUEST_HEADER = _SemanticAttribute("http.request.header", True)
    """
    HTTP request header. This describes the prefix to HTTP headers capturing.
    """

    HTTP_RESPONSE_HEADER = _SemanticAttribute("http.response.header", True)
    """
    HTTP response header. This describes the prefix to HTTP headers capturing.
    """

    HTTP_REQUEST_BODY = _SemanticAttribute("http.request.body", False)
    """
    HTTP message request body.
    """

    HTTP_RESPONSE_BODY = _SemanticAttribute("http.response.body", False)
    """
    HTTP message response body.
    """

    MESSAGING_RABBITMQ_MESSAGE_HEADER = _SemanticAttribute("messaging.rabbitmq.message.header", True)
    """
    prefix to headers.
    """

    MESSAGING_RABBITMQ_PAYLOAD = _SemanticAttribute("messaging.rabbitmq.payload", False)
    """
    The transferred payload.
    """

    MESSAGING_RABBITMQ_PAYLOAD_SIZE = _SemanticAttribute("messaging.rabbitmq.payload_size", True)
    """
    The transferred payload size in bytes.
    """

    DB_REDIS_ARGUMENTS = _SemanticAttribute("db.redis.arguments", True)
    """
    The request arguments.
    """

    DB_REDIS_RESPONSE = _SemanticAttribute("db.redis.response", True)
    """
    The response data.
    """
