#!/bin/bash
npm set progress=false

cd photography
grunt build

cd ..
VERSION=$(cat version/number)
cd photography/dist/public
tar -cvzf photography-$VERSION.tar.gz --exclude='bower_components' . -v

cd ../../..
cp photography/dist/public/photography-$VERSION.tar.gz build_artifacts
