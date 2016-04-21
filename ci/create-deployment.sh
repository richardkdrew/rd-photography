#!/bin/bash

cd deployable_artifacts

VERSION=$(cat ../candidate-release/version/number)
tar -xvzf ../candidate-release/photography-$VERSION.tar.gz
