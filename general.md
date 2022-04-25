# Cisco Opentelemetry Distribution Conventions

These conventions apply to Cisco OTel Distributions.

## Configuration

| Parameter               | Environment Variable   | Type    | Default | Description                                                                                                       | OTel Corresponding Parameter                                                   | Implementation Details                      |
| ----------------------- | ---------------------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------- | --- |
| Token                   | CISCO_TOKEN            | String  | -       | Cisco account token                                                                                               | -                                                                              | Inject as HTTP header                       |
| Service Name            | OTEL_SERVICE_NAME      | String  | service | Application name that will be set for traces/metrics                                                              | -                                                                              | Add as OTel resource tag                    |
| Experimental Attributes | CISCO_PAYLOADS_ENABLED | Boolean | false   | Whether to capture additional payloads and experimental attributes or not                                         | Enable all OTel sdk experimental attributes and distributions' data attributes | (Config parameter name varies between SDKs) | -   |
| Max Payload Size        | CISCO_MAX_PAYLOAD      | int     | 1024    | The maximum payload size to capture, in bytes. Apply to specific attributes only, according to the specifications | -                                                                              | -                                           |
