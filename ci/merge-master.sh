#!/bin/sh

set -e -x

DEVELOP=$PWD/photography

git clone ./photography-master ./photography-merged

cd photography-merged

git remote add local $DEVELOP

git fetch local
git checkout local/develop

git config --global user.email "ci@localhost"
git config --global user.name "CI Bot"

git merge --no-edit master
