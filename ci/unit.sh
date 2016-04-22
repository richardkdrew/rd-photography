#!/bin/bash

set -e -x

# running unit tests
cd photography
grunt test:unit
