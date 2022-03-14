#!/bin/bash

# Consts
GENERATOR_VERSION=0.11.0
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="${SCRIPT_DIR}/../../"
ALL_DOCS=$(find ${ROOT_DIR} -type f -name '*.md' -not -path './.github/*' -not -path './node_modules/*' | sort)

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

generate_js
generate_py
# generate_toc
generate_markdown
