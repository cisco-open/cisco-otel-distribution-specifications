# General Conventions for Databases Clients Instrumentation

## General Attributes

Cisco OTel Distributions MAY add the following attributes:
| Attribute  | Type | Description  | Example  | Metadata / Data |
|---|---|---|---|---|

## Databases

### Redis

| Attribute  | Type | Description  | Examples  | Metadata / Data |
|---|---|---|---|---|
|db.redis.arguments|String|redis command arguments    |`[myhash, field, Hello]`; `[myhash, age, 27]`  |Metadata|
|db.redis.response |String|redis command response     |`1`; `OK`; `[1,1,1]`                           |Metadata|
