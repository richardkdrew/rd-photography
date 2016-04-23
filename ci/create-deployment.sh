#!/bin/bash

# setting local version label
VERSION="v$(cat version/number)"

# preparing deployment files
cd deployment
tar -xvzf ../photography-rc/photography-$VERSION.tgz

cd ..
echo deployment/* > deployment/photography.include