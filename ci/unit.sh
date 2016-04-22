#!/bin/bash

set -e -x

# running unit tests
cd photography
grunt test:unit

cp -r ../photography_after_dependency_install ../output_test
