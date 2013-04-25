
# svg

  low-level svg element helper

## Installation

    $ component install matthewmueller/svg

## Example

```js
var graph = document.getElementById('graph');
var svg = require('svg');
var element = svg(graph);

var box = element('rect')
  .size(100)
  .attr('fill', 'black')
  .rotate(20)
  .move(50);
```

## API

### SVG(parent)

Initialize an svg document and attach it to `parent`. Returns an `Element`.

### Element(type)

  Initialize `Element`.

### Element.attr(key:String|Object, val:String)

  Get and set attributes

### Element.size(width:String, height:String)

  Set the width and height

### Element.transform(obj:Object)

  Perform a transform on the element. Options include: `rotate`, `scale`, `skewX`, `skewY`, `translate`, `transform`.

### Element.move(left:String, top:String)

  Move

### Element.rotate(deg:Number)

  Rotate the element

### Element.scale(x:String, y:String)

  Scale the element

## TODO

* move(), size() should also work with circle, ellipsis, etc.

## License

  MIT
