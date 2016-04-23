#!/bin/bash

cd deployment

VERSION=$(cat ../version/number)
tar -xvzf ../photography-rc/photography-$VERSION.tgz
