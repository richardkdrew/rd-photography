#!/bin/bash
npm set progress=false

cd photography
npm install --silent

npm install -g bower
bower install bower.json --allow-root --silent
cd ..

cp -r photography/* photography_after_dependency_install