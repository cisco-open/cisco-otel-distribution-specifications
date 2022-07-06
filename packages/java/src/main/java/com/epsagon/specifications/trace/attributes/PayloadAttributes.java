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

package com.epsagon.specifications.trace.attributes;

import java.util.Set;
import java.util.Arrays;
import java.util.HashSet;
import static io.opentelemetry.api.common.AttributeKey.stringKey;

import io.opentelemetry.api.common.AttributeKey;

// DO NOT EDIT, this is an Auto-generated file from tools
public final class PayloadAttributes {
     public static final Set<AttributeKey<String>> PAYLOAD_ATTRIBUTES = new HashSet<>(Arrays.asList(
        stringKey("aws.sns.message_attribute"),
        stringKey("aws.sqs.record.message_body"),
        stringKey("aws.sqs.message_attribute"),
        stringKey("aws.sqs.request_entry"),
        stringKey("aws.sqs.result_error_entry"),
        stringKey("aws.sqs.result_entry"),
        stringKey("aws.sqs.record.attribute"),
        stringKey("aws.sqs.record.message_attribute"),
        stringKey("rpc.request.metadata"),
        stringKey("rpc.request.body"),
        stringKey("rpc.response.metadata"),
        stringKey("rpc.response.body"),
        stringKey("http.request.header"),
        stringKey("http.request.body"),
        stringKey("http.response.header"),
        stringKey("http.response.body"),
        stringKey("messaging.rabbitmq.payload"),
        stringKey("db.redis.arguments"),
        stringKey("db.redis.response"),
        stringKey("db.mongodb.arguments"),
        stringKey("db.mongodb.response")
     ));
  private PayloadAttributes() {}
}
