/**
 * Module Dependencies
 */

var inherit = require('inherit');
var Element = require('./element');
var Ellipse = require('./ellipse');
var Circle = require('./circle');
var Rect = require('./rect');
var Line = require('./line');
var Text = require('./text');

/**
 * Expose `Group`
 */

module.exports = Group;

/**
 * Initialize a `Group`
 *
 * @param {Element} el
 * @return {Group}
 * @api public
 */

function Group(el){
  Element.call(this, el);
}

/**
 * Inherit from `Element`
 */

inherit(Group, Element);

/**
 * Create a rectangle
 *
 * @param {Number} width
 * @param {Number} height
 * @param {Number} x
 * @param {Number} y
 * @return {Rect}
 * @api public
 */

Group.prototype.rect = function(width, height, x, y){
  var el = new Rect(this.add('rect'));
  if (arguments.length) el.move(x, y).size(width, height);
  return el;
}

/**
 * Create a circle
 *
 * @param {Number} r
 * @param {Number} x
 * @param {Number} y
 * @return {Circle}
 * @api public
 */

Group.prototype.circle = function(r, x, y){
  var el = new Circle(this.add('circle'));
  if (arguments.length) el.radius(r).move(x, y);
  return el;
}

/**
 * Create an ellipse
 *
 * @param  {Number} width
 * @param  {Number} height
 * @param  {Number} x
 * @param  {Number} y
 * @return {Ellipse}
 * @api public
 */

Group.prototype.ellipse = function(width, height, x, y){
  var el = new Ellipse(this.add('ellipse'));
  if (arguments.length) el.size(width, height).move(x, y);
  return el;
}

/**
 * Create a line
 *
 * @param  {Number} x1
 * @param  {Number} y1
 * @param  {Number} x2
 * @param  {Number} y2
 * @return {Line}
 * @api public
 */

Group.prototype.line = function(x1, y1, x2, y2){
  var el = new Line(this.add('line'));
  if (arguments.length) el.from(x1, y1).to(x2, y2);
  return el;
}

/**
 * Create text
 *
 * @param {String} str
 * @return {Text}
 * @api public
 */

Group.prototype.text = function(str){
  var el = new Text(this.add('text'));
  if (str) el.content(str);
  return el;
}

/**
 * Create a group
 *
 * @return {Group}
 * @api public
 */

Group.prototype.group = function(){
  return new Group(this.add('g'));
}

/**
 * Move the group
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Group}
 * @api public
 */

Group.prototype.move = function(x, y){
  this.transforms.x = x;
  this.transforms.y = y;
  return this.setTransform();
}

/**
 * Add an element to our svg
 *
 * @param {String} type
 * @return {Element}
 * @api private
 */

Group.prototype.add = function(type){
  var el = document.createElementNS('http://www.w3.org/2000/svg', type);
  this.el.appendChild(el);
  return el;
}
