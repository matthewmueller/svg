/**
 * Module Dependencies
 */

var inherit = require('inherit');
var Element = require('./element');

/**
 * Expose `Rect`
 */

module.exports = Rect;

/**
 * Create a Rectangle
 *
 * @param {Element} el
 * @return {Rect}
 * @api public
 */

function Rect(el){
  Element.call(this, el);
}

/**
 * Inherit from `Element`
 */

inherit(Rect, Element);

/**
 * Add a radius
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Rect}
 * @api public
 */

Rect.prototype.radius = function(x, y){
  this.el.setAttribute('rx', x);
  this.el.setAttribute('ry', y == null ? x : y);
  return this;
}

/**
 * Add a border width
 *
 * @param {Number} n
 * @return {Rect}
 * @api public
 */

Rect.prototype.border = function(n){
  this.el.setAttribute('stroke-width', n);
  return this;
}
