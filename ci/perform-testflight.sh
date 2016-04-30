#!/bin/bash

set -e -x

# setting local version label
VERSION="v$(cat version/number)"

# set up the app
mkdir app
tar -xvzf -C app ../candidate-release/photography-$VERSION.tgz

# copy the app files into place
cp app/* /usr/share/nginx/html

# placeholder for testing app
RESULT="$(curl -Is http://127.0.0.1 | head -n 1)"


if [[ "$RESULT" == *"200 OK"* ]]; then 
	echo "OK"
	exit 0 
else 
	echo "Not OK" 
	exit 1
fi