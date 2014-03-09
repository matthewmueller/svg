
var Element = require('./element')
var Ellipse = require('./ellipse')
var Circle = require('./circle')
var Rect = require('./rect')
var Line = require('./line')
var Text = require('./text')

module.exports = Group

Element.extend(Group)

/**
 * manage a group
 *
 * @param {Element} el
 * @api public
 */

function Group(el){
  Element.call(this, el)
}

Group.prototype.rect = function(width, height, x, y){
  var el = new Rect(this.add('rect'))
  if (arguments.length) el.move(x, y).size(width, height)
  return el
}

Group.prototype.circle = function(r, x, y){
  var el = new Circle(this.add('circle'))
  if (arguments.length) el.radius(r).move(x, y)
  return el
}
Group.prototype.ellipse = function(width, height, x, y){
  var el = new Ellipse(this.add('ellipse'))
  if (arguments.length) el.size(width, height).move(x, y)
  return el
}

Group.prototype.line = function(x1, y1, x2, y2){
  var el = new Line(this.add('line'))
  if (arguments.length) el.from(x1, y1).to(x2, y2)
  return el
}

Group.prototype.text = function(str){
  var el = new Text(this.add('text'))
  if (str) el.content(str)
  return el
}

Group.prototype.group = function(){
  return new Group(this.add('g'))
}

Group.prototype.move = function(x, y){
  this.transforms.x = x
  this.transforms.y = y
  return this.setTransform()
}

Group.prototype.add = function(type){
  var el = document.createElementNS('http://www.w3.org/2000/svg', type)
  this.el.appendChild(el)
  return el
}