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
// DO NOT EDIT, this is an Auto-generated file from tools

export const Consts = {
  /**
     Token environment variable
     */
  CISCO_TOKEN_ENV: "CISCO_TOKEN",

  /**
     Service-name environement variable
     */
  SERVICE_NAME_KEY: "OTEL_SERVICE_NAME",

  /**
     Debug environment variable
     */
  CISCO_DEBUG_ENV: "CISCO_DEBUG",

  /**
     Payloads-enabled environment variable
     */
  CISCO_PAYLOADS_ENABLED_ENV: "CISCO_PAYLOADS_ENABLED",

  /**
     Max payload size environment variable
     */
  CISCO_MAX_PAYLOAD_SIZE_ENV: "CISCO_MAX_PAYLOAD_SIZE",

  /**
     The Collector endpoint env var name
     */
  OTEL_COLLECTOR_ENDPOINT: "OTEL_COLLECTOR_ENDPOINT",

  /**
     The Otel exporter type var name. NOTE: that is OTEL env and he responsible to parse and use
     */
  OTEL_EXPORTER_TYPE_ENV: "OTEL_EXPORTER_TYPE",

  /**
     Default service-name value
     */
  DEFAULT_SERVICE_NAME: "application",

  /**
     Default debug logs value
     */
  DEFAULT_CISCO_DEBUG: false,

  /**
     Whether should collect payloads by default
     */
  DEFAULT_PAYLOADS_ENABLED: true,

  /**
     The default max payload size to capture
     */
  DEFAULT_MAX_PAYLOAD_SIZE: 1024,

  /**
     The default URL to Telescope OTel collector
     */
  DEFAULT_COLLECTOR_ENDPOINT:
    "https://production.cisco-udp.com/trace-collector",

  /**
     The default Exporter type
     */
  DEFAULT_EXPORTER_TYPE: "otlp-http",

  /**
     Authorization header key
     */
  TOKEN_HEADER_KEY: "authorization",

  /**
     The Cisco sdk version
     */
  CISCO_SDK_VERSION: "cisco.sdk.version",
};
