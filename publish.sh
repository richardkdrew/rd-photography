#!/usr/bin/env bash
BUCKET=rd-photography-$CIRCLE_BRANCH
cd dist/public
aws s3 sync . s3://$BUCKET/ --exclude "bower_components/*"
