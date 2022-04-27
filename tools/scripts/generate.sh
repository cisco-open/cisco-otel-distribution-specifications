#!/bin/bash

# Consts
GENERATOR_VERSION=0.11.0
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="${SCRIPT_DIR}/../../"
ALL_DOCS=$(find ${ROOT_DIR} -type f -name '*.md' -not -path './.github/*' -not -path './node_modules/*' | sort)
SCHEMA_URL="${ROOT_DIR}/tools/templates/schemas/consts.schema.json"

# Functions
function generate_js {
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/trace:/source \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -v ${ROOT_DIR}/packages/js/src/trace/:/output \
    otel/semconvgen:${GENERATOR_VERSION} \
    -f /source \
    code \
    --template /templates/js/SemanticAttributes.ts.j2 \
    --output /output/SemanticAttributes.ts \
    -Dclass=SemanticAttributes

  # Generate consts
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/consts.yaml:/source/consts.yaml \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -e DATABASE=mysql56 -e IMAGE=latest \
    dinutac/jinja2docker:latest /templates/js/consts.ts.j2 /source/consts.yaml --format=yaml > ${ROOT_DIR}/packages/js/src/consts.ts

  # Generate payloads enabled
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/payload_attributes.yaml:/source/payload_attributes.yaml \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -e DATABASE=mysql56 -e IMAGE=latest \
    dinutac/jinja2docker:latest /templates/js/payload_attributes.ts.j2 /source/payload_attributes.yaml --format=yaml > ${ROOT_DIR}/packages/js/src/payload_attributes.ts
}

function generate_java {
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/trace:/source \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -v ${ROOT_DIR}/packages/java/src/main/java/com/cisco/opentelemetry/specifications/trace/attributes/:/output \
    otel/semconvgen:${GENERATOR_VERSION} \
    -f /source \
    code \
    --template /templates/java/SemanticAttributes.java.j2 \
    --output /output/SemanticAttributes.java \
    -Dclass=SemanticAttributes \
    -Dpkg=com.cisco.opentelemetry.specifications.trace.attributes

  # Generate consts
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/consts.yaml:/source/consts.yaml \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -e DATABASE=mysql56 -e IMAGE=latest \
    dinutac/jinja2docker:latest /templates/java/Consts.java.j2 /source/consts.yaml --format=yaml > ${ROOT_DIR}/packages/java/src/main/java/com/cisco/opentelemetry/specifications/consts/Consts.java

  # Generate payloads enabled
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/payload_attributes.yaml:/source/payload_attributes.yaml \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -e DATABASE=mysql56 -e IMAGE=latest \
    dinutac/jinja2docker:latest /templates/java/PayloadAttributes.java.j2 /source/payload_attributes.yaml --format=yaml > ${ROOT_DIR}/packages/java/src/main/java/com/cisco/opentelemetry/specifications/trace/attributes/PayloadAttributes.java

}

function generate_py {
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/trace:/source \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -v ${ROOT_DIR}/packages/python/cisco_opentelemetry_specifications/:/output \
    otel/semconvgen:${GENERATOR_VERSION} \
    -f /source \
    code \
    --template /templates/python/semantic_attributes.py.j2 \
    --output /output/semantic_attributes.py \
    -Dclass=SemanticAttributes

  # Generate consts
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/consts.yaml:/source/consts.yaml \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -e DATABASE=mysql56 -e IMAGE=latest \
    dinutac/jinja2docker:latest /templates/python/consts.py.j2 /source/consts.yaml --format=yaml > ${ROOT_DIR}/packages/python/cisco_opentelemetry_specifications/consts.py

  # Generate payloads enabled
  docker run --rm \
    -v ${ROOT_DIR}/specification/sources/payload_attributes.yaml:/source/payload_attributes.yaml \
    -v ${SCRIPT_DIR}/../templates:/templates \
    -e DATABASE=mysql56 -e IMAGE=latest \
    dinutac/jinja2docker:latest /templates/python/payload_attributes.py.j2 /source/payload_attributes.yaml --format=yaml > ${ROOT_DIR}/packages/python/cisco_opentelemetry_specifications/payload_attributes.py
}

function generate_markdown {
  docker run --rm  \
    -v ${ROOT_DIR}/specification/sources/trace:/source \
    -v ${ROOT_DIR}/specification/documentations:/spec \
    otel/semconvgen:${GENERATOR_VERSION} \
    -f /source \
    markdown -md /spec
}

function generate_toc {
  	if ! npm ls markdown-toc; then npm install; fi
	  for f in ${ALL_DOCS}; do \
		if grep -q '<!-- tocstop -->' $f; then \
			echo markdown-toc: processing $f; \
			npx --no -- markdown-toc --no-first-h1 --no-stripHeadingTags -i $f || exit 1; \
		else \
			echo markdown-toc: no TOC markers, skipping $f; \
		fi; \
	done
}

# Generate from source yaml files, code packages, markdowns
generate_java
generate_js
generate_py
# generate_toc
generate_markdown

