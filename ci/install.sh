#!/bin/sh
npm install -g bower grunt-cli
npm install
bower install --allow-root
grunt --version