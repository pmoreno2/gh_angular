// selenium.config.js
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

const options = new chrome.Options();
options.addArguments('headless'); // Ejecutar en modo headless
options.addArguments('disable-gpu'); // Deshabilitar GPU para evitar errores en algunos sistemas

const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

module.exports = { driver, By, until };