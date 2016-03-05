#!/usr/bin/env bash
BUCKET=rd-photography-$CIRCLE_BRANCH
aws s3 sync dist/public/ s3://$BUCKET/ --exclude "dist/public/bower_components/*"
