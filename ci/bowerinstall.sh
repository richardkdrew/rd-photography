#!/bin/bash
npm set progress=false
npm install -g bower
bower install --allow-root --silent
ls client/bower_components/*
ls node_modules/*