/**
 * Module Dependencies
 */

var domify = require('domify');
var html = domify(require('./template'));

/**
 * Export `SVG`
 */

module.exports = SVG;

/**
 * Initialize `SVG`
 *
 * @param {Element} el
 * @return {Function}
 * @api public
 */

function SVG(el) {
  var svg = html.cloneNode(true);
  el.appendChild(svg);

  return function(type) {
    var element = new Element(type);
    svg.appendChild(element.el);
    return element;
  }
}

/**
 * Initialize `Element`
 *
 * @param {String} type
 * @return {Element}
 * @api public
 */

function Element(type) {
  if (!(this instanceof Element)) return new Element(type);
  this.type = type;
  this.el = document.createElementNS('http://www.w3.org/2000/svg', type);
  this.transforms = { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, skewX: 0, skewY: 0 };
}

/**
 * Get and set attributes
 *
 * @param {String|Object} key
 * @param {String} val
 * @return {Element}
 * @api public
 */

Element.prototype.attr = function(key, val, el) {
  if (typeof key == 'object') for (val in key) this.attr(val, key[val]);
  else if (val === undefined) return this.el.getAttribute(key);
  else if (el) this.el.setAttributeNS(el, key, val);
  else this.el.setAttribute(key, val);
  return this;
};

/**
 * Set the width and height
 *
 * TODO: size for ellipsis, circle, etc.
 *
 * @param {String} width
 * @param {String} height
 * @return {Element}
 * @api public
 */

Element.prototype.size = function(width, height) {
  if (!height) height = width;
  this.attr({
    width: width,
    height: height
  });

  return this;
};

/**
 * Move
 *
 * TODO: move for ellipsis, circle, etc.
 *
 * @param {String} left
 * @param {String} top
 * @return {Element}
 * @api public
 */

Element.prototype.move = function(x, y) {
  this.attr({
    x : x || 0,
    y : y || 0
  });

  return this;
};

/**
 * Add a transform
 *
 * TODO: refactor, optimize
 *
 * @param {Object} obj
 * @return {Element}
 * @api private
 */

Element.prototype.transform = function(obj) {
  // getter
  if('string' === typeof obj) return this.transforms[obj];

  var transform = [];

  for(key in obj) {
    if(obj[key]) this.transforms[key] = obj[key];
  }

  var t = this.transforms;

  /* add rotation */
  if (t.rotation !== 0) {
    var box = this.bbox();
    transform.push('rotate(' + t.rotation + ',' + (t.cx != null ? t.cx : box.cx) + ',' + (t.cy != null ? t.cy : box.cy) + ')');
  }

  /* add scale */
  transform.push('scale(' + t.scaleX + ',' + t.scaleY + ')');

  /* add skew on x axis */
  if (t.skewX !== 0)
    transform.push('skewX(' + t.skewX + ')');

  /* add skew on y axis */
  if (t.skewY !== 0)
    transform.push('skewY(' + t.skewY + ')');

  /* add translation */
  transform.push('translate(' + t.x + ',' + t.y + ')');

  /* add only te required transformations */
  this.attr('transform', transform.join(' '));
  return this;
};

/**
 * Get the bounding box
 *
 * @return {Object}
 * @api public
 */

Element.prototype.bbox = function() {
  /* actual, native bounding box */
  var box = this.el.getBBox();

  return {
    /* include translations on x an y */
    x:      box.x + this.transforms.x,
    y:      box.y + this.transforms.y,

    /* add the center */
    cx:     box.x + this.transforms.x + box.width  / 2,
    cy:     box.y + this.transforms.y + box.height / 2,

    /* plain width and height */
    width:  box.width,
    height: box.height
  };
};

/**
 * Rotate the element
 *
 * @param {Number} deg
 * @return {Element}
 * @api public
 */

Element.prototype.rotate = function(deg) {
  deg = deg || 0;
  this.transform({ rotation : deg });
  return this;
};


/**
 * Scale the element
 *
 * @param {String} x
 * @param {String} y
 * @return {Element}
 * @api public
 */

Element.prototype.scale = function(x, y) {
  if(!y) y = x;
  this.transform({
    scaleX : x,
    scaleY : y
  });

  return this;
};
