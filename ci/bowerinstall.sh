#!/bin/bash
npm set progress=false
npm install -g bower
cd photography
bower install --allow-root --silent
cd ..
cp -r ./photography/client/bower_components/* ./bower_components