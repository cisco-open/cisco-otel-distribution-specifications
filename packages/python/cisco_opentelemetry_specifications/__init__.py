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

    AWS_SQS_RECORD_MESSAGE_BODY = _SemanticAttribute("aws.sqs.record.message_body", False)
    """
    The SQS message body.
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
    point to batch requets entries.
    """

    AWS_SQS_VISIBILITY_TIMEOUT = _SemanticAttribute("aws.sqs.visibility_timeout", False)
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
