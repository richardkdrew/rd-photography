#!/bin/bash

set -e -x

# set up the app
mkdir app
cd app
tar -xvzf ../candidate-release/photography-$VERSION.tgz

# copy the app files into pace
cp . /usr/share/nginx/html

# placeholder for testing app
curl http://127.0.0.1/index.html
