#!/usr/bin/env bash
BUCKET=rd-photography-dev
aws s3 sync dist/public/ s3://$BUCKET/ --exclude "bower_components"
