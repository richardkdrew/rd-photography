#!/bin/bash

# setting local version label
VERSION="v$(cat version/number)"

cd deployment

# preparing deployment files
tar -xvzf candidate-release/photography-$VERSION.tgz

echo .