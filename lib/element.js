/**
 * Expose `Element`
 */

module.exports = Element

/**
 * default transformation
 */

var transforms = { x: 0, y: 0, scaleX: 1, scaleY: 1, rotate: 0, skewX: 0, skewY: 0 }

/**
 * Initialize `Element`
 *
 * @param {Element} type
 * @return {Element}
 * @api public
 */

function Element(el){
  this.transforms = Object.create(transforms);
  this.el = el;
}

/**
 * Get and set attributes
 *
 * @param {String|Object} key
 * @param {String} val
 * @api public
 */

Element.prototype.attr = function(key, val){
  if (typeof key == 'object') for (val in key) this.attr(val, key[val]);
  else if (val === undefined) return this.el.getAttribute(key);
  else this.el.setAttribute(key, val);
  return this;
}

/**
 * Set the width and height
 *
 * @param {String} width
 * @param {String} [height]
 * @return {Element}
 * @api public
 */

Element.prototype.size = function(width, height){
  if (height == null) height = width;
  this.el.setAttribute('width', width);
  this.el.setAttribute('height', height);
  return this;
}

/**
 * Move
 *
 * @param {String} left
 * @param {String} top
 * @return {Element}
 * @api public
 */

Element.prototype.move = function(x, y){
  this.el.setAttribute('x', x || 0);
  this.el.setAttribute('y', y || 0);
  return this;
}

/**
 * Apply `transforms` or get `this.transforms[key]`
 *
 * @param {Object|String} key
 * @param {Number} [value]
 * @return {this}
 * @api public
 */

Element.prototype.transform = function(key, value){
  if (typeof key == 'object') {
    for (var k in key) this.transforms[k] = key[k];
  } else if (value == null) {
    return this.transforms[key];
  } else {
    this.transforms[key] = value;
  }
  return this.setTransform();
}

/**
 * apply transforms to `this.el`
 *
 * @return {this}
 * @api private
 */

Element.prototype.setTransform = function(){
  var t = this.transforms;
  var str = '';

  if (t.rotate) {
    var box = this.bbox();
    str += 'rotate(' + t.rotate + ','
      + (t.cx != null ? t.cx : box.cx)  + ','
      + (t.cy != null ? t.cy : box.cy)  + ') ';
  }
  if (t.scaleX != 1 || t.scaleY != 1) {
    str += 'scale(' + t.scaleX + ',' + t.scaleY + ') ';
  }
  if (t.x || t.y) str += 'translate(' + t.x + ',' + t.y + ') ';
  if (t.skewX) str += 'skewX(' + t.skewX + ') ';
  if (t.skewY) str += 'skewY(' + t.skewY + ') ';

  return this.attr('transform', str);
}

/**
 * Get the bounding box
 *
 * @return {Object}
 * @api public
 */

Element.prototype.bbox = function(){
  var box = this.el.getBBox();

  return {
    x:      box.x + this.transforms.x,
    y:      box.y + this.transforms.y,
    cx:     box.x + this.transforms.x + box.width  / 2,
    cy:     box.y + this.transforms.y + box.height / 2,
    width:  box.width,
    height: box.height
  };
}

/**
 * Rotate the element
 *
 * @param {Number} deg
 * @return {Element}
 * @api public
 */

Element.prototype.rotate = function(deg){
  this.transforms.rotate = deg || 0;
  return this.setTransform();
}

/**
 * Scale the element
 *
 * @param {String} x
 * @param {String} y
 * @return {Element}
 * @api public
 */

Element.prototype.scale = function(x, y){
  this.transforms.scaleX = x;
  this.transforms.scaleY = y != null ? y : x;
  return this.setTransform();
}

/**
 * Fill the element
 *
 * @param {String} color
 * @return {Element}
 * @api public
 */

Element.prototype.fill = function(color){
  this.el.setAttribute('fill', color);
  return this;
}

/**
 * Add a stroke to the element
 *
 * @param {String} color
 * @return {Element}
 * @api public
 */

Element.prototype.stroke = function(color){
  this.el.setAttribute('stroke', color);
  return this;
}

/**
 * Set the element to have crisp edges
 *
 * @return {Element}
 * @api public
 */

Element.prototype.crisp = function(){
  this.el.setAttribute('shape-rendering', 'crispEdges');
  return this;
}

/**
 * Set the stroke cap.
 * Defaults to 'round'
 *
 * @param {String} type
 * @return {Element}
 * @api public
 */

Element.prototype.cap = function(type){
  this.el.setAttribute('stroke-linecap', type || 'round');
  return this;
}

/**
 * Set the dashes and gaps in a stroke
 *
 * TODO: make more compatible
 *
 *   https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
 *
 * @param {Number} dash
 * @param {Number} gap
 * @return {Element}
 * @api public
 */

Element.prototype.dash = function(dash, gap){
  this.el.setAttribute('stroke-dasharray', dash + ', ' + gap);
  return this;
}
