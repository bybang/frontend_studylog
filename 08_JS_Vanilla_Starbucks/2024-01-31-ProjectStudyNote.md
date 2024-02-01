# FASTCAMPUS Frontend Project

## Mastering CSS with Starbucks Demo

> 패스트캠퍼스 - [프론트엔드 웹 개발의 모든 것 초격차 패키지 Online](https://fastcampus.co.kr/dev_online_fesignature) 과정

# 🎯 What I learned today

## Header element setup

### Viewport Basics

When we create the document with auto complete, we can see the below tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

This tag represents that we want to create a typical mobile-optimized site.

The `content="width"` attribute controls the size of the viewport, and the special value `device-width` means 100vw, or 100% of the viewport width.

The `initial-scale` controls the zoom level when the page is first loaded. `1` is the default value.

### The Open Graph protocol

When we share the website address, we sees a certain form that represents the shared content. Imagine the Instagram, Slack, or Discord message with the link.

The Open Graph protocol allows us to modify the displaying image and content of that shared content or card. Details are on the Open Graph protocol [website](https://ogp.me/).

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta
  property="og:description"
  content="Starbucks is the world's largest multinational coffeehouse chain, operating a total of 23,187 stores in 64 countries."
/>
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

The `og` stands for the Open Graph, and the `type` property represents the type of the content. It can be website, video, etc. Other property names are straight forward.

Another similiar meta tags are provided from Twitter, and some websites or messanger prioritize this meta tags to collect the info. We can use both of this tags together.

Notice these tags are required in another source, and if we place it on the top of the document, unnecessary information will not be interpreted before we pass the info the the other source.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Starbucks Coffee Korea - Demo</title>

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Starbucks" />
  <meta property="og:title" content="Starbucks Coffee Korea" />
  <meta
    property="og:description"
    content="Starbucks is the world's largest multinational coffeehouse chain, operating a total of 23,187 stores in 64 countries."
  />
  <meta property="og:image" content="./images/starbucks_seo.jpg" />
  <meta property="og:url" content="https://starbucks.co.kr" />

  <meta property="twitter:card" content="summary" />
  <meta property="twitter:site" content="Starbucks" />
  <meta property="twitter:title" content="Starbucks Coffee Korea" />
  <meta
    property="twitter:description"
    content="Starbucks is the world's largest multinational coffeehouse chain, operating a total of 23,187 stores in 64 countries."
  />
  <meta property="twitter:image" content="./images/starbucks_seo.jpg" />
  <meta property="twitter:url" content="https://starbucks.co.kr" />

  <link rel="icon" href="favicon.png" />
  ...
</head>
```

Another point to consider is the image content. Notice we use the local image from the `images` folder. That's because we want to use image `SEO` or optimized image for `SEO`.

The `SEO` stands for search engine optitmization, and this image is used for the search engine exposure.
