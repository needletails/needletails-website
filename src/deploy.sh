#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add .
git commit -m"New website build"
# git push origin git@github.com:pragmatic-reviews/vue-pages.git master:gh

cd .