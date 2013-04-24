
# svg-element

  nicer api for creating and manipulating svg elements

## Installation

    $ component install matthewmueller/svg-element

## Example

```js
var element = require('svg-element');
var box = element('rect')
  .size(100)
  .attr('fill', 'black')
  .rotate(20)
  .move(50);

var svg = document.getElementsByTagName('svg')[0];
svg.appendChild(box.el);
```

## API

### Element(type)

  Initialize `Element`.

### Element.el

  Access to the raw svg element.

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

## License

  MIT
