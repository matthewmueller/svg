
# svg

  low-level svg helper

## Installation

    $ component install matthewmueller/svg

## Example

```js
var graph = document.getElementById('graph');
var svg = require('svg');
var draw = svg(graph);

var box = draw.rect()
  .fill('black')
  .rotate(20)
  .size(100)
  .move(50);
```

## API

### SVG(parent)

Initialize an svg document and attach it to `parent`. Returns a `Group`.

### Group\[element\]()

  All native SVG element types have a corresponding method to create them. They will automatically be added to the current group. The supported element types are listed below with there argument lists. These arguments are optional though and only there to help keep large documents concise. Each method returns an Element.

  - __ellipse(width, height, x, y)__
  - __rect(width, height, x, y)__
  - __line(x1, y1, x2, y2)__
  - __circle(size, x, y)__
  - __text(content)__
  - __group()__

### Element.attr(key:String|Object, val:String)

  Get and set attributes

### Element.size(width:String, height:String)

  Set the width and height

### Element.transform(key:Object|String, [value]:Number)

  Apply a set of transfomations to the element or get `this.transforms[key]`

  ```js
  element.transform({rotate: 20}) // set rotation
  element.transform('rotate', 20) // set rotation
  element.transform('rotate')     // get rotation
  ```

### Element.move(left:String, top:String)

  Move

### Element.rotate(deg:Number)

  Rotate the element

### Element.radius(n:Number)

  Set the elements radius. For rect's it will set the border-radius

### Element.scale(x:String, y:String)

  Scale the element

### Element.fill(color)

  Set the fill color. `color` can be any valid CSS color string

### Element.stroke(color)

  Set the stroke color

### Element.cap(type)

  Set the stroke linecap type to one of:

  - butt
  - round
  - square

### Element.dash(gap, dash)

  Set the dash length

## License

  MIT
