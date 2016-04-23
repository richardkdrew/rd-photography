#!/bin/bash

cd deployment

VERSION=$(cat ../version/number)
tar -xvzf ../candidate-release/photography-$VERSION.tar.gz
