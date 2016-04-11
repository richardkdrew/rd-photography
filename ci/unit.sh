#!/bin/bash
npm set progress=false
npm install -g grunt-cli --silent
cd photography
grunt test:unit
cd ..

cp -r photography/* photography_after_dependency_install