'use strict';

// This is the main module of the plugin where you define
// add, remove, move method to manage elements.

// rekitCore is the one that dependent by the project using the plugin.
// You may need it to perform common tasks such as use refactor to rename variables in a module.
// const rekitCore = require('rekit-core');

function add(feature, name) {
  console.log('Adding reselect.');
}

function remove(feature, name) {
  console.log('Removing reselect.');
}

function move(source, target) {
  console.log('Moving reselect.');
}

function install() {
  // Called when using 'rekit install plugin-name' to install the plugin.
  // Should check repeated installation.
  console.log('Installing reselect');
}
function uninstall() {
  // Called when using 'rekit uninstall plugin-name' to install the plugin.
  // Should check repeated uninstallation.
  console.log('Uninstalling reselect');
}

module.exports = {
  install,
  uninstall,
  add,
  remove,
  move,
};
