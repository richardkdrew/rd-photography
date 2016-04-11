#!/bin/bash
npm set progress=false
npm install -g grunt-cli --silent

cd photography
grunt build

cd ..
VERSION=cat version/number
tar -zcvf build_artifacts/photography-{$VERSION}.tar.gz --exclude='bower_components' photography/dist/public/*