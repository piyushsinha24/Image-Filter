# Image Editor using CamanJS

<p align="center">
  <img width="640" src="image-filter.gif"></img>
</p>

## Getting Started

Before we can start using different features of the library, we will have to include it in our project. This can be done either by downloading the library or linking directly to a CDN.

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js" integrity="sha512-JjFeUD2H//RHt+DjVf1BTuy1X5ZPtMl0svQ3RopX641DWoSilJ89LsFGq4Sw/6BSBfULqUW/CfnVopV5CfvRXA==" crossorigin="anonymous"></script>

```

## Basics

There are two ways to use the library:

- Using the `data-caman` attribute with our image elements. This attribute can accept a combination of different CamanJS filters as its value.

```javascript
  <img src="path/to/image.jpg"
    data-caman="brightness(10) contrast(30) sepia(60) saturation(-30)">
```

- Calling `Caman()` with the id of the `canvas` where we have rendered the image and different filters that we want to apply to the rendered image. This method assumes we already have a canvas element in the page, and we would like to load an image via URL into the canvas for editing with CamanJS. We can also give DOM objects instead of Strings if we prefer.

```javascript
  Caman("#canvas-id", "path/to/image.jpg", function () {
    this.brightness(10);
    this.contrast(30);
    this.sepia(60);
    this.saturation(-30);
    this.render();
  });
```

![Screenshot 2021-01-27 at 10.36.43 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1611767250695/FtCIrN2pM.png)
- Read the article to learn more: [Image Editor using CamanJS](https://piyushsinha.tech/image-editor-using-camanjs)
