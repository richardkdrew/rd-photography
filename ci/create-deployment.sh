#!/bin/bash

# setting local version label
VERSION="v$(cat version/number)"

# preparing deployment files
tar -xvzf ../photography-rc/photography-$VERSION.tgz
