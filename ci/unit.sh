#!/bin/bash
npm set progress=false
npm install -g grunt-cli --silent

cd photography
grunt test:unit