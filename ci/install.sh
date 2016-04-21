#!/bin/bash

set -e -x

npm set progress=false

cd photography
# running npm install
npm install --silent

# running bower install
bower install --allow-root --silent
cd ..

cp -r photography/. photography_after_dependency_install
