#!/bin/bash

set -e -x

# setting local version label
VERSION="v$(cat version/number)"

# setting up the app
tar -xvzf candidate-release/photography-$VERSION.tgz -C deployments/testflight/app-under-test
cp -r photography/e2e/* deployments/testflight/e2e

# running npm install
npm set progress=false
cd deployments/testflight
npm install --silent

# updating the webdriver
npm run update-webdriver

# running the tests
npm test
