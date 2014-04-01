/**
 * Module Dependencies
 */

var inherit = require('inherit');
var Element = require('./element')

/**
 * Expose `Text`
 */

module.exports = Text;

/**
 * Create `Text`
 *
 * @param {Element} el
 * @return {Text}
 * @api public
 */

function Text(el){
  Element.call(this, el);
}

/**
 * Inherit from `Element`
 */

inherit(Text, Element);

/**
 * Set the text size
 *
 * @param {Number} n
 * @return {Text}
 * @api public
 */

Text.prototype.size = function(n){
  this.el.setAttribute('font-size', n);
  return this;
}

/**
 * Set the text family
 *
 * @param {String} family
 * @return {Text}
 * @api public
 */

Text.prototype.family = function(n){
  this.el.setAttribute('font-family', n);
  return this;
}

/**
 * Set the text content
 *
 * @param {String} str
 * @return {Text}
 * @api public
 */

Text.prototype.content = function(str){
  this.el.textContent = str;
  return this;
}
