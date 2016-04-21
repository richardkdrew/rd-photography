#!/bin/bash

VERSION=$(cat version/number)

cd deployable_artifacts

tar -xvzf ../candidate_release/photography-$VERSION.tar.gz
