#!/bin/bash

# Consts
GENERATOR_VERSION=0.11.0
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="${SCRIPT_DIR}/../../"

# Functions
function generate_js {
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/trace:/source \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -v ${ROOT_DIR}/packages/js/src/trace/:/output \
    otel/semconvgen:${GENERATOR_VERSION} \
    -f /source \
    code \
    --template /templates/SemanticAttributes.ts.j2 \
    --output /output/SemanticAttributes.ts \
    -Dclass=SemanticAttributes
}

function generate_py {
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/trace:/source \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -v ${ROOT_DIR}/packages/python/cisco_opentelemetry_specifications/:/output \
    otel/semconvgen:${GENERATOR_VERSION} \
    -f /source \
    code \
    --template /templates/semantic_attributes.py.j2 \
    --output /output/__init__.py \
    -Dclass=SemanticAttributes
}

function generate_markdown {
  docker run --rm  \
    -v ${ROOT_DIR}/specification/sources/trace:/source \
    -v ${ROOT_DIR}/specification/trace:/spec \
    otel/semconvgen:${GENERATOR_VERSION} --debug \
    -f /source \
    markdown -md /spec
}

generate_markdown
