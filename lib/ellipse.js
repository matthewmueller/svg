/**
 * Module Dependencies
 */

var Circle = require('./circle');
var inherit = require('inherit');

/**
 * Expose `Ellipse`
 */

module.exports = Ellipse;

/**
 * Initialize `Ellipse`
 *
 * @param {Element} el
 * @return {Ellipse}
 * @api public
 */

function Ellipse(el){
  Circle.call(this, el);
}

/**
 * Inherit from `Circle`
 */

inherit(Ellipse, Circle);

/**
 * Set the radius
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Ellipse}
 * @api public
 */

Ellipse.prototype.radius = function(x, y){
  this.el.setAttribute('rx', x);
  this.el.setAttribute('ry', y);
  return this;
}

/**
 * Set the size
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Ellipse}
 * @api public
 */

Ellipse.prototype.size = function(x, y){
  return this.radius(x/2, y/2);
}
