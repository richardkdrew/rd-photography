#!/bin/bash

CANDIDATE_RELEASE_ARTIFACTS=$PWD/candidate-release

# setting local version label
VERSION="v$(cat version/number)"

cd deployment

# preparing deployment files
tar -xvzf $CANDIDATE_RELEASE_ARTIFACTS/photography-$VERSION.tgz
