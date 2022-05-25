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


namespace Cisco.Opentelemetry.Specifications.Consts;

public static class Consts {
    /// <summary>
    /// The default URL to Telescope OTel collector
    /// </summary>
    public const string DEFAULT_COLLECTOR_ENDPOINT = "https://production.cisco-udp.com/trace-collector";
    
    /// <summary>
    /// The default Exporter type
    /// </summary>
    public const string DEFAULT_EXPORTER_TYPE = "otlp-http";
    
    /// <summary>
    /// The header key name
    /// </summary>
    public const string TOKEN_HEADER_KEY = "authorization";
    
    /// <summary>
    /// Whether should collect payloads by default
    /// </summary>
    public const bool DEFAULT_PAYLOADS_ENABLED = true;
    
    /// <summary>
    /// The default service name
    /// </summary>
    public const string DEFAULT_SERVICE_NAME = "application";
    
    /// <summary>
    /// The default max payload size to capture
    /// </summary>
    public const int DEFAULT_MAX_PAYLOAD_SIZE = 1024;
    
    /// <summary>
    /// The default cisco debug logs mode
    /// </summary>
    public const bool DEFAULT_CISCO_DEBUG = false;
    
    /// <summary>
    /// The Cisco debug env var name
    /// </summary>
    public const string CISCO_DEBUG_ENV = "CISCO_DEBUG";
    
    /// <summary>
    /// The Cisco max payload size var name
    /// </summary>
    public const string CISCO_MAX_PAYLOAD_SIZE_ENV = "CISCO_MAX_PAYLOAD_SIZE";
    
    /// <summary>
    /// The Cisco payloads enabled var name
    /// </summary>
    public const string CISCO_PAYLOADS_ENABLED_ENV = "CISCO_PAYLOADS_ENABLED";
    
    /// <summary>
    /// The Otel exporter type var name. NOTE: that is OTEL env and he responsible to parse and use
    /// </summary>
    public const string OTEL_EXPORTER_TYPE_ENV = "OTEL_EXPORTER_TYPE";
    
    /// <summary>
    /// The Cisco Token env var name
    /// </summary>
    public const string CISCO_TOKEN_ENV = "CISCO_TOKEN";
    
    /// <summary>
    /// The Collector endpoint env var name
    /// </summary>
    public const string OTEL_COLLECTOR_ENDPOINT = "OTEL_COLLECTOR_ENDPOINT";
    
    /// <summary>
    /// The Cisco sdk version
    /// </summary>
    public const string CISCO_SDK_VERSION = "CISCO_SDK_VERSION";
    
}