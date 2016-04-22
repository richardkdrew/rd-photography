#!/bin/bash

set -e -x

# setting local version label
VERSION=$(cat version/number)

# running build
cd photography
grunt build

# creating build artifacts archive
cd dist/public
tar -cvzf photography-$VERSION.tar.gz --exclude='bower_components' . -v

# making build artifacts available as an output
cp photography-$VERSION.tar.gz ../../..build_artifacts
