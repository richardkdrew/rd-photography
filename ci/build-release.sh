#!/bin/bash

set -e -x

echo "v$(cat version/number)" > release/name
echo "v$(cat version/number)" > release/tag

cat > release/body <<EOF
A candidate release that has yet to be vetted by our full pipeline.
EOF

npm set progress=false

cd photography

# running Grunt build
grunt build

cd ..
echo "v$(cat version/number)" > VERSION

# creating release archive
cd photography/dist/public
tar -cvzf photography-$VERSION.tar.gz --exclude='bower_components' . -v

cd ../../..
cp photography/dist/public/photography-$VERSION.tar.gz build_artifacts
