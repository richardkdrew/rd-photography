#!/bin/bash

set -e -x

# setting local version label
VERSION="v$(cat version/number)"

# running build
cd photography
grunt build

# creating build artifacts archive and making build artifacts available as an output
#cd dist/public
#tar -cvzf ../../../build_artifacts/photography-$VERSION.tar.gz --exclude='bower_components' * -v
cp photography/dist/public/* build_artifacts
rm -rf build_artifacts/bower_components
