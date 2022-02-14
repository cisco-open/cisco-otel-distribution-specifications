# Cisco Opentelemetry Disribution Conventions

These conventions apply to Cisco OTel Disributions.

## Configuration

| Parameter | Environment Variable | Type | Default | Description | Implementation Details|
|---|---|---|---|---|---|
| Token | FSO_TOKEN | String | - | FSO account token | - | Inject as HTTP header |
| Service Name | FSO_SERVICE_NAME | String | service | Application name that will be set for traces/metrics | - | Add as OTel resource tag |
