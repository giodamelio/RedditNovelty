#!/bin/bash
rm -r dist/
webpack
cd dist/
ln -s index.html 200.html
surge --project . --domain redditnovelty.surge.sh
