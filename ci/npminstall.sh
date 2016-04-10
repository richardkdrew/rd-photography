#!/bin/bash
npm set progress=false
cd photography
npm install --silent
cd ..
cp -r ./photography/* ./photography_after_npm_and_bower