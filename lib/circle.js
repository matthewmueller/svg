/**
 * Module Dependencies
 */

var Element = require('./element');
var inherit = require('inherit');

/**
 * Expose `Circle`
 */

module.exports = Circle;

/**
 * Initialize `Circle`
 *
 * @param {Element} el
 * @return {Circle}
 * @api public
 */

function Circle(el){
  Element.call(this, el);
}

/**
 * Inherit from `Element`
 */

inherit(Circle, Element);

/**
 * Set the radius
 *
 * @param {Number} n
 * @return {Circle}
 */

Circle.prototype.radius = function(n){
  this.el.setAttribute('r', n);
  return this;
}

/**
 * Set the size of the circle
 *
 * @param {Number} n
 * @return {Circle}
 */

Circle.prototype.size = function(n){
  return this.radius(n / 2);
}

/**
 * Move the circle
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Circle}
 */

Circle.prototype.move = function(x, y){
  this.el.setAttribute('cx', x || 0);
  this.el.setAttribute('cy', y || 0);
  return this;
}
