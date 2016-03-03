#!/usr/bin/env bash
BUCKET=rd-photography-dev
aws s3 sync . s3://$BUCKET/ --exclude "*" --include "dist/public/"