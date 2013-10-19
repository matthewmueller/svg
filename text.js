
var Element = require('./element')

module.exports = Text

function Text(el){
  Element.call(this, el)
}

Element.extend(Text)

Text.prototype.size = function(n){
  this.el.setAttribute('font-size', n)
  return this
}

Text.prototype.family = function(n){
  this.el.setAttribute('font-family', n)
  return this
}

Text.prototype.content = function(str){
  this.el.textContent = str
  return this
}