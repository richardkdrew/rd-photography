#!/bin/bash
npm set progress=false
cd photography
npm install --silent
cd ..
cp ./photography/node_modules ./node_modules