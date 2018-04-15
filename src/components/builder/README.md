# SVG Path Builder

This was originally intended to be a 3-panel comic creation tool...
Somehow I've conned myself into yak-shaving it into an SVG path creation tool.
Eventually, it will likely become a full-fledged SVG creation tool.

## Editor Composition

The editor consists of 2 primary components.

### Preview Panel

The preview shows the image, and will eventually include an svg (xml) output panel.

TODOS:

* [ ] Expose XML output to user
* [ ] Highlight current operation
* [ ] Show curve handle position for current operation

### Element Editor Panel

The element editor consists of a list of SVG Path operations (curves for now).
Each operation can be edited, deleted or reordered.

TODOS:

* [x] Operation delete
* [ ] Operation reorder
* [ ] Edit Starting point
* [ ] Toggle AutoClose
* [ ] Edit stroke-width
* [ ] Edit stroke
* [ ] Edit fill

## Long term vision

Using this tool, even in its current state, has helped me gain a deeper
understanding of SVGs. I think it could become useful to others who are trying
to gain an understanding of SVGs.

As such, I'd like to eventually turn it into a richer SVG composition tool,
geared toward beginners. To accomplish that, it will need more features:

* [ ] Add/edit Group (`<g>`) element
* [ ] Add/edit Ellipse (`<ellipse>`) element
* [ ] Add/edit Circle (`<circle>`) element
* [ ] Add transformations to elements
