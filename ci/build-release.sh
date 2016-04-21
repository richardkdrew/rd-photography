#!/bin/bash

set -e -x

npm set progress=false

cd photography

# running Grunt build
grunt build

cd ..
echo "v$(cat version/number)" > VERSION

# creating release archive
cd photography/dist/public
tar -cvzf photography-$VERSION.tar.gz --exclude='bower_components' . -v

cd ../../..
cp photography/dist/public/photography-$VERSION.tar.gz build_artifacts
