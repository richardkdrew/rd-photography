#!/bin/bash
npm set progress=false
npm install -g bower
bower install ./photography --allow-root --silent
cp -r ./photography/client/bower_components ./bower_components