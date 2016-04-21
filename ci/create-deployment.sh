#!/bin/bash

cd deployable_artifacts

VERSION=$(cat ../version/number)
tar -xvzf ../candidate-release/photography-$VERSION.tar.gz
