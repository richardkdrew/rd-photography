#!/bin/bash
npm set progress=false
npm install -g bower
cd photography/client
bower install ../bower.json --allow-root --silent
cd ..
cp -r ./photography/* ./photography_after_npm_and_bower