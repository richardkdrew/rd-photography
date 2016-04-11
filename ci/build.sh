#!/bin/bash
npm set progress=false
npm install -g grunt-cli --silent

cd photography
grunt build

cd ..
cp -r photography/dist/public* build_artifacts
rm -rf build_artifacts/bower_components