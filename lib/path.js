/**
 * Module Dependencies
 */

var inherit = require('inherit');
var join = Function.call.bind([].join);
var Element = require('./element');

/**
 * Expose `Path`
 */

module.exports = Path;

/**
 * Initialize `Path`
 *
 * @param {Element} el
 * @return {Path}
 * @api public
 */

function Path(el){
  Element.call(this, el);
  el.setAttribute('stroke', 'black');
  el.setAttribute('fill', 'none');
}

/**
 * Inherit from `Element`
 */

inherit(Path, Element);

/**
 * Create a line
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Path}
 * @api public
 */

Path.prototype.line = function(x, y){
  return this.d('l', x, y)
}

/**
 * Move the path
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Path}
 * @api public
 */

Path.prototype.move = function(x, y){
  return this.d('m', x, y)
}

/**
 * Create a curve
 * @param  {Number} x1
 * @param  {Number} y1
 * @param  {Number} x2
 * @param  {Number} y2
 * @param  {Number} x3
 * @param  {Number} y3
 * @return {Path}
 * @api public
 */

Path.prototype.curve = function(x1,y1,x2,y2,x3,y3){
  return arguments.length == 4
    ? this.d('q', x1 + ',' + y1,
                  x2 + ',' + y2)
    : this.d('c', x1 + ',' + y1,
                  x2 + ',' + y2,
                  x3 + ',' + y3);
}

/**
 * Close the path
 *
 * @return {Path}
 * @api public
 */

Path.prototype.close = function(){
  return this.d('z');
}

/**
 * Add to the path
 *
 * @param {String, ...}
 * @return {Path}
 * @api private
 */

Path.prototype.d = function(){
  var d = this.el.getAttribute('d') || '';
  if (d) d += ' ';
  this.el.setAttribute('d', d + join(arguments, ' '));
  return this;
}

/**
 * Set a width of the path
 *
 * @param {Number} n
 * @return {Path}
 * @api private
 */

Path.prototype.width = function(n){
  this.el.setAttribute('stroke-width', n);
  return this;
}
