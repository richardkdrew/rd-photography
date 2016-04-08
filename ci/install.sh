#!/bin/sh
npm set progress=false
npm install -g bower grunt-cli --silent
npm install --silent
bower install --allow-root