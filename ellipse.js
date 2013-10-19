
var Circle = require('./circle')

module.exports = Elipse

function Elipse(el){
  Circle.call(this, el)
}

Circle.extend(Elipse)

Elipse.prototype.radius = function(x, y){
  this.el.setAttribute('rx', x)
  this.el.setAttribute('ry', y)
  return this
}

Elipse.prototype.size = function(x, y){
  return this.radius(x/2, y/2)
}