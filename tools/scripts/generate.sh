#!/bin/bash

GENERATOR_VERSION=0.7.0
BEST_DIR=/Users/osherv/workspace/repos/fso/cisco-otel-distribution-specifications/

docker run --rm \
  -v ${BEST_DIR}/semantic-conventions/trace:/source \
  -v ${BEST_DIR}/templates:/templates \
  -v ${BEST_DIR}/src/trace/:/output \
  otel/semconvgen:${GENERATOR_VERSION} \
  -f /source \
  code \
  --template /templates/SemanticAttributes.ts.j2 \
  --output /output/SemanticAttributes.ts \
  -Dclass=SemanticAttributes