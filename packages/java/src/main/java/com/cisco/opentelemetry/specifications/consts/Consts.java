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


package com.cisco.opentelemetry.specifications.consts;

public final class Consts {
    /**
     The default URL to Telescope OTel collector
     */
    public static final String DEFAULT_COLLECTOR_ENDPOINT = "https://production.cisco-udp.com/trace-collector";
    
    /**
     The default Exporter type
     */
    public static final String DEFAULT_EXPORTER_TYPE = "otlp-http";
    
    /**
     The header key name
     */
    public static final String TOKEN_HEADER_KEY = "authorization";
    
    /**
     Whether should collect payloads by default
     */
    public static final boolean DEFAULT_PAYLOADS_ENABLED = false;
    
    /**
     The default service name
     */
    public static final String DEFAULT_SERVICE_NAME = "application";
    
    /**
     The default max payload size to capture
     */
    public static final long DEFAULT_MAX_PAYLOAD_SIZE = 1024;
    
    /**
     The default cisco debug logs mode
     */
    public static final boolean DEFAULT_CISCO_DEBUG = false;
    
    /**
     The Cisco debug env var name
     */
    public static final String CISCO_DEBUG_ENV = "CISCO_DEBUG";
    
    /**
     The Cisco max payload size var name
     */
    public static final String CISCO_MAX_PAYLOAD_SIZE_ENV = "CISCO_MAX_PAYLOAD_SIZE";
    
    /**
     The Cisco payloads enabled var name
     */
    public static final String CISCO_PAYLOADS_ENABLED_ENV = "CISCO_PAYLOADS_ENABLED";
    
    /**
     The Otel exporter type var name. NOTE: that is OTEL env and he responsible to parse and use
     */
    public static final String OTEL_EXPORTER_TYPE_ENV = "OTEL_EXPORTER_TYPE";
    
    /**
     The Cisco Token env var name
     */
    public static final String CISCO_TOKEN_ENV = "CISCO_TOKEN";
    
    /**
     The Collector endpoint env var name
     */
    public static final String OTEL_COLLECTOR_ENDPOINT = "OTEL_COLLECTOR_ENDPOINT";
    

  private Consts() {}
}