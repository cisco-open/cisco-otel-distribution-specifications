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

# DO NOT EDIT, this is an Auto-generated file from tools/templates/consts.py.j2


class Consts:
    DEFAULT_COLLECTOR_ENDPOINT = "https://production.cisco-udp.com/trace-collector"
    """
    The default URL to Telescope OTel collector
    """
    
    DEFAULT_COLLECTOR_TYPE = "otlp-http"
    """
    The default Collector type
    """
    
    TOKEN_HEADER_KEY = "authorization"
    """
    The header key name
    """
    
    DEFAULT_PAYLOADS_ENABLED = False
    """
    Whether should collect payloads by default
    """
    
    DEFAULT_SERVICE_NAME = "application"
    """
    The default service name
    """
    
    DEFAULT_MAX_PAYLOAD_SIZE = 1024
    """
    The default max payload size to capture
    """
    
    DEFAULT_CISCO_DEBUG = False
    """
    The default cisco debug logs mode
    """
    