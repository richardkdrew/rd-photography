#!/bin/bash

set -e -x

# temporary curl install (Dockerize later)
apt-get update
apt-get install -y curl --no-install-recommends
apt-get clean

# setting local version label
VERSION="v$(cat version/number)"

# set up the app
mkdir app-under-test
tar -xvzf candidate-release/photography-$VERSION.tgz -C app-under-test

# copy the app files into place
cp -r app-under-test/* /usr/share/nginx/html

# placeholder for testing app
RESULT="$(curl -Is http://127.0.0.1 | head -n 1)"


if [[ "$RESULT" == *"200 OK"* ]]; then 
	echo "OK"
	exit 0 
else 
	echo "Not OK" 
	exit 1
fi