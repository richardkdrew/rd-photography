#!/bin/bash

set -e -x

CANDIDATE_RELEASE=$PWD/candidate-release

# setting local version label
VERSION="v$(cat version/number)"

# setting release details
echo $VERSION > pre-release/name
echo $VERSION > pre-release/tag

cat > pre-release/body << EOF
A final release that has not yet been through the full pipeline.
EOF

# making release artifacts available as an output
mkdir pre-release/artifacts

cd pre-release/artifacts

# preparing deployment files
tar -xvzf $CANDIDATE_RELEASE/photography-$VERSION.tgz
