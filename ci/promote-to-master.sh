#!/bin/bash

set -e -x

git pull --ff-only         # check we are up to date on our branch
git checkout master        # go the target branch
git pull --ff-only         # check updates there too
git merge develop --no-ff  # merge with a commit
