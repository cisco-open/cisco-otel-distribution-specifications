# Cisco Opentelemetry Distribution Conventions

These conventions apply to Cisco OTel Distributions.

## Configuration

| Parameter | Environment Variable | Type | Default | Description | OTel Corresponding Parameter | Implementation Details |
|---|---|---|---|---|---|---|
| Token | FSO_TOKEN | String | - | FSO account token | - | Inject as HTTP header |
| Service Name | FSO_SERVICE_NAME | String | service | Application name that will be set for traces/metrics | - | Add as OTel resource tag |
| Experimental Attributes | FSO_METADATA_ONLY | Boolean | true | Whether to send only the metadata (true) or also the payloads and experimental attributes (false) | Enable all OTel sdk experimental attributes and distributions' data attributes | (Config parameter name varies between SDKs) | - |
| Max Payload Size | FSO_MAX_PAYLOAD | int | 1024 | The maximum payload size to capture, in bytes. Apply to specific attributes only, according to the specifications | - | - |
