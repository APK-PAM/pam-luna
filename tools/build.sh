#!/bin/bash

set -ex

npm run-script build

rm -fr luna*
mv dist luna
cp -R src/assets/i18n luna/
tar czf luna.tar.gz luna
md5 luna.tar.gz
