#!/bin/bash

set -e -x

# running npm install
npm set progress=false
cd photography
npm install --silent

# running bower install
bower install --allow-root --silent

# making dependencies available as an output
cp -r ../photography/. photography_after_dependency_install
