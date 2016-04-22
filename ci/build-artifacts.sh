#!/bin/bash

set -e -x

# running build
cd photography
grunt build

# setting local version label
echo "v$(cat ../version/number)" > VERSION

# creating build artifacts archive
cd photography/dist/public
tar -cvzf photography-$VERSION.tar.gz --exclude='bower_components' . -v

# making build artifacts available as an output
cd ../../..
cp photography/dist/public/photography-$VERSION.tar.gz build_artifacts
