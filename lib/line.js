/**
 * Module Dependencies
 */

var inherit = require('inherit');
var alias = require('alias-property');
var Element = require('./element');

/**
 * Expose `Line`
 */

module.exports = Line;

/**
 * Initialize `Line`
 *
 * @param {Element} el
 * @return {Line}
 * @api public
 */

function Line(el){
  Element.call(this, el);
}

/**
 * Inherit from `Element`
 */

inherit(Line, Element);

/**
 * Alias `fill` to `stroke`
 */

alias(Line.prototype, 'stroke', 'fill')

/**
 * Start the line from
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Line}
 * @api public
 */

Line.prototype.from = function(x, y){
  this.el.setAttribute('x1', x);
  this.el.setAttribute('y1', y);
  return this;
}

/**
 * Draw the line to
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Line}
 * @api public
 */

Line.prototype.to = function(x, y){
  this.el.setAttribute('x2', x);
  this.el.setAttribute('y2', y);
  return this;
}

/**
 * Give the line a width
 *
 * @param  {Number} n
 * @return {Line}
 * @api public
 */

Line.prototype.width = function(n){
  this.el.setAttribute('stroke-width', n)
  return this
}
