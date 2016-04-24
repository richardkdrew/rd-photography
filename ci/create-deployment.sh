#!/bin/bash

# setting local version label
VERSION="v$(cat version/number)"

# preparing deployment files
tar -xvzf ../candidate-release/photography-$VERSION.tgz
