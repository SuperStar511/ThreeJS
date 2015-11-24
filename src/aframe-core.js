var registerElement = require('./a-register-element');

var AEntity = require('./core/a-entity');
var ANode = require('./core/a-node');

// Must be required after `AObject` so all the components are registered.
var AComponents = require('./core/components').components;

// Exports THREE to the window object so we can
// use three.js without alteration
var THREE = window.THREE = require('../lib/three');
var utils = require('./utils/');

require('webvr-polyfill');

require('./core/a-animation');
require('./core/a-assets');
require('./core/a-cubemap');
require('./core/a-mixin');
require('./core/a-scene');

module.exports = {
  THREE: THREE,
  ANode: ANode,
  AComponents: AComponents,
  AEntity: AEntity,
  registerElement: registerElement,
  utils: utils
};
