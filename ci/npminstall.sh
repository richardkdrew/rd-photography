#!/bin/bash
npm set progress=false
npm install ./photography --silent
cp -r ./photography/node_modules ./node_modules