
var Element = require('./element')

module.exports = Rect

function Rect(el){
  Element.call(this, el)
}

Element.extend(Rect)

Rect.prototype.radius = function(x, y){
  this.el.setAttribute('rx', x)
  this.el.setAttribute('ry', y == null ? x : y)
  return this
}

Rect.prototype.border = function(n){
  this.el.setAttribute('stroke-width', n)
  return this
}