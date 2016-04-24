#!/bin/bash

set -e -x

# setting release details
echo "v$(cat version/number)" > rc-release/name
echo "v$(cat version/number)" > rc-release/tag

cat > release/body << EOF
A candidate release that has yet to be vetted by the full pipeline.
EOF

# making release artifacts available as an output
mkdir rc-release/artifacts
cp -r build_artifacts/* rc-release/artifacts
