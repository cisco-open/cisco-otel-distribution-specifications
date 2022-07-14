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
    /// Token environment variable
    /// </summary>
    public const string CISCO_TOKEN_ENV = "CISCO_TOKEN";
    
    /// <summary>
    /// Service-name environement variable
    /// </summary>
    public const string SERVICE_NAME_KEY = "OTEL_SERVICE_NAME";
    
    /// <summary>
    /// Debug environment variable
    /// </summary>
    public const string CISCO_DEBUG_ENV = "CISCO_DEBUG";
    
    /// <summary>
    /// Payloads-enabled environment variable
    /// </summary>
    public const string CISCO_PAYLOADS_ENABLED_ENV = "CISCO_PAYLOADS_ENABLED";
    
    /// <summary>
    /// Max payload size environment variable
    /// </summary>
    public const string CISCO_MAX_PAYLOAD_SIZE_ENV = "CISCO_MAX_PAYLOAD_SIZE";
    
    /// <summary>
    /// Disable instrumentations environment variable
    /// </summary>
    public const string CISCO_DISABLE_INSTRUMENTATIONS_ENV = "CISCO_DISABLE_INSTRUMENTATIONS";
    
    /// <summary>
    /// Collector endpoint environment variable
    /// </summary>
    public const string OTEL_COLLECTOR_ENDPOINT = "OTEL_COLLECTOR_ENDPOINT";
    
    /// <summary>
    /// Otel exporter-type environment variable
    /// </summary>
    public const string OTEL_EXPORTER_TYPE_ENV = "OTEL_EXPORTER_TYPE";
    
    /// <summary>
    /// Default service-name value
    /// </summary>
    public const string DEFAULT_SERVICE_NAME = "application";
    
    /// <summary>
    /// Default debug logs value
    /// </summary>
    public const bool DEFAULT_CISCO_DEBUG = false;
    
    /// <summary>
    /// Whether should collect payloads by default
    /// </summary>
    public const bool DEFAULT_PAYLOADS_ENABLED = true;
    
    /// <summary>
    /// The default max payload size to capture
    /// </summary>
    public const int DEFAULT_MAX_PAYLOAD_SIZE = 1024;
    
    /// <summary>
    /// Default disable instrumentations value
    /// </summary>
    public const bool DEFAULT_DISABLE_INSTRUMENTATIONS = false;
    
    /// <summary>
    /// The default URL to Telescope OTel collector
    /// </summary>
    public const string DEFAULT_COLLECTOR_ENDPOINT = "https://production.cisco-udp.com/trace-collector";
    
    /// <summary>
    /// The default Exporter type
    /// </summary>
    public const string DEFAULT_EXPORTER_TYPE = "otlp-http";
    
    /// <summary>
    /// Cisco sdk version not supported
    /// </summary>
    public const string CISCO_SDK_VERSION_NOT_SUPPORTED = "version not supported";
    
    /// <summary>
    /// Authorization header key
    /// </summary>
    public const string TOKEN_HEADER_KEY = "authorization";
    
    /// <summary>
    /// The Cisco sdk version
    /// </summary>
    public const string CISCO_SDK_VERSION = "cisco.sdk.version";
    
    /// <summary>
    /// A message indicating that Telescope is running and collecting data
    /// </summary>
    public const string TELESCOPE_IS_RUNNING_MESSAGE = "Telescope SDK is running and collecting data… \nView your data here: https://console.telescope.app/spans";
    
}