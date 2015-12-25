# jsnes-player-ui

Fancy UI for [JS NES](https://github.com/bfirsh/jsnes)

## Build & development

`$ npm install`

`$ bower install`

`$ npm install -g grunt-cli`

`$ grunt`

`$ grunt serve`

## Testing

Running `grunt test` will run the unit tests with karma.

## setup JSNes 

`$ cd node_modules/jsnes`

`$ npm install`

`$ grunt`

`$ cd ../../app/scripts/lib/`

`$ ln -s ../../../node_modules/jsnes/build/  jsnes`

## setup DynamicAudio

Download latest build version of [DynamicAudio from GitHub](https://github.com/bfirsh/dynamicaudio.js/downloads)

For ex:

`$ cd app/scripts/lib`

`$ wget https://github.com/downloads/bfirsh/dynamicaudio.js/dynamicaudio.js-0.1.tar.gz`

`$ tar -zxvf dynamicaudio.js*`

`$ rm dynamicaudio.js*.tar.gz`

`$ mv dynamicaudio.js* dynamicaudio`
