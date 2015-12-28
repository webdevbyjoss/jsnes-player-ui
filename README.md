# jsnes-player-ui

Fancy UI for [JS NES](https://github.com/bfirsh/jsnes)

## Roadmap:
- [ DONE ] Native stereo sound via HTML5 WebAudio API
- [ IN PROGRESS ] Game saves/restore (save to local storage, autosave, jump to last save, save to cloud)
- [ IN PROGRESS ] User upload selector and drag&drop ROM files via HTML5 File API
- Full screen support via HTML5 Fullscreen API
- Auto pause / start via HTML5 Visibility API
- Keyborad keys setup dialog for both joystikcs
- On screen joystick support with touch controls for Mobile and Tablets via NippleJS
- Joystick support via HTML5 Gamepad API
- Easy third-party web pages integration (copy/paste JavaScript snippet)
- Experiment with multilayer (WebRTC for screen sharing, Websockets for controls) 
  <- latency is main concern here (pause, delay or slow down game emulation on latency degradation?)


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
