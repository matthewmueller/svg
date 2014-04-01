/**
 * Module Dependencies
 */

var inherit = require('inherit');
var Element = require('./element');

/**
 * Expose `Polyline`
 */

module.exports = Polyline

/**
 * Create a `Polyline`
 *
 * @param {Element} el
 * @return {Polyline}
 * @api public
 */

function Polyline(el){
  Element.call(this, el)
}

/**
 * Inherit from `Element`
 */

inherit(Polyline, Element);

/**
 * Set a point
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Polyline}
 * @api public
 */

Polyline.prototype.point = function(x, y){
  var points = this.el.getAttribute('points') || '';
  if (points) points += ' ';
  this.el.setAttribute('points', points + x + ',' + y);
  return this;
}

/**
 * Set a width
 *
 * @param {Number} n
 * @return {Polyline}
 * @api public
 */

Polyline.prototype.width = function(n){
  this.el.setAttribute('stroke-width', n);
  return this;
}
