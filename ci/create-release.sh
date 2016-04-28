#!/bin/bash

set -e -x

#!/bin/bash

# setting local version label
VERSION="v$(cat version/number)"

# setting release details
echo $VERSION > release/name
echo $VERSION > release/tag

cat > release/body << EOF
A final release that has successfully emerged from the full pipeline.
EOF

# making release artifacts available as an output
mkdir release/artifacts

cd release/artifacts

# preparing deployment files
tar -xvzf ../../candidate-release/photography-$VERSION.tgz
