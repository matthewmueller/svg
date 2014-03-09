
var alias = require('alias-property')
var Element = require('./element')

module.exports = Line

function Line(el){
  Element.call(this, el)
}

Element.extend(Line)

Line.prototype.from = function(x, y){
  this.el.setAttribute('x1', x)
  this.el.setAttribute('y1', y)
  return this
}

Line.prototype.to = function(x, y){
  this.el.setAttribute('x2', x)
  this.el.setAttribute('y2', y)
  return this
}

Line.prototype.width = function(n){
  this.el.setAttribute('stroke-width', n)
  return this
}

alias(Line.prototype, 'stroke', 'fill')