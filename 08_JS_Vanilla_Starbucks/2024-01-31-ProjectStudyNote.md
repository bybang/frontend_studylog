# FASTCAMPUS Frontend Project

## Mastering CSS with Starbucks Demo

> 패스트캠퍼스 - [프론트엔드 웹 개발의 모든 것 초격차 패키지 Online](https://fastcampus.co.kr/dev_online_fesignature) 과정

# 🎯 What I learned today

## Header element setup

### Viewport Basics

When we create the document with auto-complete, we can see the below tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

This tag means that we want to create a typical mobile-optimized site.

The `content="width"` attribute controls the viewport's size, and the special value `device-width` means 100vw, or 100% of the viewport width.

The `initial-scale` controls the zoom level when the page is first loaded. `1` is the default value.

### The Open Graph protocol

We see a certain form representing the shared content when we share the website address. Imagine the Instagram, Slack, or Discord message with the link.

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

The `og` stands for the Open Graph, and the `type` property represents the type of the content. It can be a website, video, etc. Other property names are straightforward.

Twitter provides similar meta tags, and some websites or messengers prioritize these meta tags to collect information. We can use both of these tags together.

Placing these required tags at the top of the document prevents unnecessary information from being interpreted before being passed to another source.

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

Another point to consider is the image content. Notice we use the local image from the `images` folder. That's because we want to use an `SEO` image or an optimized image for `SEO`.

`SEO` stands for search engine optimization, and this image is used for search engine exposure.

## Logo

### Anchor tag and header CSS Settings

We will create the header element to create the logo space for the website. The header element indicates that this element will be the website's header.

```html
<header>
  <div class="inner">
    <a href="/" class="logo">
      <img src="./images/starbucks_logo.png" alt="STARBUCKS" />
    </a>
  </div>
</header>
```

Notice we have an anchor tag inside the inner element, connected to the `"/"` route. The slash means a root of the website, and we can assume that `(domain)/(index.html)` is omitted.

The domain is the website address we use to visit the specific website. (`www.google.com`)

Also, we learned that `index.html` can be omitted because the browser finds a file named `index.html` first and loads the document.

![](https://velog.velcdn.com/images/devbang/post/f55125ba-9e30-46d7-9e3f-e0eff0d65c5f/image.png)

After setting up some of the header areas, we noticed that the logo image has some weird space under the image.

That's because the `img` tag is an inline element, which is considered text content. Each text content has a `baseline`; the following image explains the space below the logo image.

![](https://velog.velcdn.com/images/devbang/post/d2343dce-fa02-493d-82e8-f4bf31415fa8/image.png)

The character `p` is a little longer than the baseline, and we usually leave a space due to these characters.

However, we don't need to use that space for the images. To remove the space, we can add a `display: block;` property value and add all the images to the block content on our website.

### Positioning

We need to know how we position the element to center our logo in the header area.

![](https://velog.velcdn.com/images/devbang/post/cda6f079-f2a2-4b5a-80b2-6427a5e362ab/image.png)

Notice the first element has a `position: absolute` property value and is vertically centered.

To center the element, we need properties such as `top, right, bottom, left`, `margin`, `height(width)` or both `height and width`.

The first box in the picture has stars indicating the two points from top and bottom, and the box height is `100px`.

The `margin: auto 0` property value automatically calculates the top and bottom margins and centers the element accordingly. The `height` property is essential for calculating those margins.

The second box is centered, and we used all four positions. The margin should be just `auto` because it is the same as the `margin: auto auto`.

## Sub Menu

### JavaScript:void(0)

When creating a sub-menu in the header section, we generate an anchor tag for each menu option. These tags can take us to another webpage, section, or site.

```html
<ul class="menu">
  <li>
    <a href="/signin">Sign In</a>
  </li>
  <li>
    <a href="javascript:void(0)">My Starbucks</a>
  </li>
  <li>
    <a href="javascript:void(0)">Customer Service & Ideas</a>
  </li>
  <li>
    <a href="javascript:void(0)">Find a Store</a>
  </li>
</ul>
```

Notice the first anchor tag has a route named `/signin`, and the other anchor tags have JavaScript URIs.

When a browser follows a `javascript:` URI, it evaluates the code in the URI and then replaces the page's contents with the returned value unless the returned value is `undefined`.

Also, we can use the `void` operator to return `undefined`.

![](https://velog.velcdn.com/images/devbang/post/e374d2b2-5c59-4103-a52e-14656030e1ef/image.png)

The above picture shows the JavaScript URIs usage, which explains what `<a href="javascript:void(0)"></a>` does.

We usually put this void value when we want to prepare the address for the `href`, but it is not ready.

Another common address we put here is the `#` or hash symbol. This hash symbol has a slightly different feature, and we will go over the details when we create a single-page application.

### Understanding HTML Structure

We created a nested tag, but we may not be familiar with the structure we made in the HTML document.

```html
<header>
  <div class="inner">
    <a href="/" class="logo">
      <img src="./images/starbucks_logo.png" alt="STARBUCKS" />
    </a>

    <div class="sub-menu">
      <ul class="menu">
        <li>
          <a href="/signin">Sign In</a>
        </li>
        <li>
          <a href="javascript:void(0)">My Starbucks</a>
        </li>
        <li>
          <a href="javascript:void(0)">Customer Service & Ideas</a>
        </li>
        <li>
          <a href="javascript:void(0)">Find a Store</a>
        </li>
      </ul>

      <div class="search">
        <input type="text" />
        <span class="material-symbols-outlined"> search </span>
      </div>
    </div>
  </div>
</header>
```

Since we are using a nested structure like the above, we can accustom by modifying the CSS file.

```css
header .sub-menu {
}

header .sub-menu ul.menu {
}

header .sub-menu ul.menu li {
}

header .sub-menu ul.menu li a {
}

header .sub-menu .search {
}

header .sub-menu .search input {
}

header .sub-menu .search .material-symbols-outlined {
}
```

It seems redundant, but it helps us understand the HTML structure before adding attributes to each property. We will learn about the CSS preprocessor like Sass, which will help us reduce the repeated code later.

### Pseudo-element `::before`

In the example below, we have a separator or a bar that separates the sub menus.

![](https://velog.velcdn.com/images/devbang/post/1771cd8c-26e1-4ed3-a384-817b57cf0c91/image.png)

We don't need to create an additional `div` or `span` because the pseudo-element can handle that.

To create a separator, we must find a property representing the menus.

```html
<ul class="menu">
  <li>
    <a href="/signin">Sign In</a>
  </li>
  <li>
    <a href="javascript:void(0)">My Starbucks</a>
  </li>
  <li>
    <a href="javascript:void(0)">Customer Service & Ideas</a>
  </li>
  <li>
    <a href="javascript:void(0)">Find a Store</a>
  </li>
</ul>
```

Notice the `li` elements are handling the menu texts, and the `ul` element is wrapping the `li` elements.

```css
header .sub-menu ul.menu li {
  position: relative;
}

header .sub-menu ul.menu li::before {
  content: "";
  width: 1px;
  height: 12px;
  background-color: #e5e5e5;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
```

To create a pseudo-element with the `::before`, we use the above properties, and the content should be `""`, albeit we don't use any content here.

Additionally, if we look closer at the picture above, we can see that no element is in front of the first element.

We can achieve the same result by adding the `:first-child` pseudo-class.

```css
header .sub-menu ul.menu li:first-child:before {
  display: none;
}
```

### Using `:focus` with the search `input`

Another interesting point for the sub menu is that it expands when the user clicks on the search input.

```css
header .sub-menu .search input {
  background-color: #fff;
  color: #777;
  font-size: 12px;
  width: 36px;
  height: 34px;
  padding: 4px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  transition: width 0.4s;
}

header .sub-menu .search input:focus {
  width: 190px;
  border: 1px solid #669900;
}
```

Notice the input element has a pseudo-class `:focus`, and when the user clicks on the input element, it changes the width to 190px.

To make the animation smooth, we can add a `transition` and only apply it to the `width` property. We also don't want to change the input element size, so we added a `box-sizing` property and set it to `border-box`.

### Add DOM API to the `input`

Now, we have aligned the search area, but there is a problem with the search input. When the user clicks on the input field, it does not seem to expand.

![](https://velog.velcdn.com/images/devbang/post/def4043f-978f-4328-97ad-5c2f4a87b634/image.gif)

In fact, it does expand when the user clicks on the input field, but it is limited to the input element and won't work if the user clicks on the icon.

To fix this issue, we can add the DOM API like the following:

```js
const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector(".search input");
```

Notice we created two variables, but the query selector seems redundant, and we can reduce the repeated code.

```js
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
```

Actually, we can reuse the first variable because the document has a tree structure. If we want to get the child element, we can simply use the parent element and search the child from there.

When we see the document, the `searchEl` contains both the input and the icon. This creates the desired behavior: the user can now click the icon or input element to expand the search box.

Another thing that we can do is add a placeholder to the search box.

```js
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
```

Since this website is for Korean, we used a Korean word here, but it can be anything. When the user clicks, we call the input box `focused`.

To add a placeholder only when the input box is focused, we add a temporary class `.focused` to the `.search` element that wraps the input element and the icon.

Additionally, we use the `.setAttribute` method to set the placeholder. The first parameter is the attribute's name, and the second parameter is its value.

![](https://velog.velcdn.com/images/devbang/post/48f1a92f-d3f4-4d8c-961c-c9f11d06797d/image.png)

After adding a class and the placeholder, we see that the class and the placeholder value are added to the document.

However, the class and the placeholder don't disappear after we are not focusing on the input element.

```js
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
```

We can use a similar event listener, but we will listen to the `blur` event this time - the `blur` event fires when an element has lost focus.

![](https://velog.velcdn.com/images/devbang/post/f26521fc-13b5-4f1f-b8c9-faf2f2247641/image.gif)

Now we can see the temporary class and the placeholder no longer exist in the document.

### Add a `hover` effect to the menu item

When we hover over the menu, we will display the drop-down menu like the image below.

![](https://velog.velcdn.com/images/devbang/post/049b9ee1-e711-4605-917b-3723a8f068db/image.png)

We have to look at the HTML document's structure to implement this effect.

```html
<ul class="main-menu">
  <li class="item">
    <div class="item__name">COFFEE</div>
    <div class="item__contents">
      <div class="contents__menu">
        <ul class="inner">
          <li>
            <h4>커피</h4>
            <ul>
              <li>스타벅스 원두</li>
              <li>스타벅스 비아</li>
              <li>스타벅스 오리가미</li>
            </ul>
          </li>
          <li>
            <h4>에스프레소 음료</h4>
            <ul>
              <li>도피오</li>
              <li>에스프레소 마키아또</li>
              <li>아메리카노</li>
              <li>마키아또</li>
              <li>카푸치노</li>
              <li>라떼</li>
              <li>모카</li>
              <li>리스트레또 비안코</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </li>
</ul>
```

Since the class name `item` contains all the information, we need to place the hover effect on that `item` class.

```css
header .main-menu .item .item__contents {
  display: none;
  position: fixed;
  width: 100%;
  left: 0;
}

header .main-menu .item:hover .item__contents {
  display: block;
}
```

The regular state is `none`, but when we hover over the `item` class, it displays the drop-down menu with its content.

### BEM methodology

The BEM stands for block element modifier and is a methodology used to name the classes in HTML.

![](https://velog.velcdn.com/images/devbang/post/98e3c154-4ae6-4e01-8950-f1a8370aef5c/image.png)

Let's break down the above image.

```html
<div class="container">
  <div class="name"></div>
  <div class="item">
    <div class="name"></div>
  </div>
</div>
```

The code above has the outer container, which wraps the item `div`. The problem is that two `div` elements have the same name, which makes it hard to distinguish and use the class name to add CSS.

If we use the BEM methodology, we can create additional names for the elements without thinking of other names.

```html
<div class="container">
  <div class="container__name"></div>
  <div class="item">
    <div class="item__name"></div>
  </div>
</div>
```

Now, it is clear that the first `name` indicates the container, and the second `name` indicates the item under the container.

```html
<div class="btn primary"></div>
<div class="btn success"></div>
<div class="btn error"></div>
```

The above code typically indicates appearance change, behavior or state.

```html
<div class="btn btn--primary"></div>
<div class="btn btn--success"></div>
<div class="btn btn--error"></div>
```

By adding two dashes, we can show that the `primary` class belongs to the `btn` class and indicates the `btn`'s state or appearance.

### Lodash & GSAP

In order to develop a badge that disappears upon scrolling down, it is necessary to leverage third-party libraries.

The current JavaScript DOM API fucntion `addEventListener` calls the inside logic when we scroll down the website.

![](https://velog.velcdn.com/images/devbang/post/d0889fc8-243e-4614-90f0-73d95b82ff63/image.gif)

Notice that each time we scroll down the scrollbar, the `addEventListner` function calls the `console.log()`. This behavior is not the best solution for our scroll-down animation and may slow down the website due to many function calls.

We can use the `lodash` library to reduce these function calls.

```js
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log("scroll!");
  }, 300)
);
```

Adding the `_.throttle()` function can reduce the `console.log()` call, as shown in the gif below.

![](https://velog.velcdn.com/images/devbang/post/cbd721ad-5224-41bc-91f8-4274de1f77e7/image.gif)

In the above example, we scroll down almost to the end of the page, but the `console.log()` only logged a few lines in the console.

The `_.throttle(func, [wait=0], [options={}])` function has three different parts. The first argument indicates the function of the throttle. The second argument indicates the number of milliseconds to throttle invocation.

We use the `GSAP` library to make the badges disappear, as shown in the example below.

```js
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
      });
    }
  }, 300)
);
```

The `gsap.to()` method allows us to add animation to an element. It uses three parameters: the element on which we want to implement the animation, the transition time, and the animation style.

![](https://velog.velcdn.com/images/devbang/post/d33daaca-3771-4527-a694-e360f03a0fb1/image.png)

However, there is a potential problem after the implementation because the badges have yet to disappear completely from the DOM tree.

As the picture shows, it remains on the screen, and when we hover over that area, the mouse pointer still changes.

This behavior can cause the wrong redirection if we connect the badge to a different address.

We can add the `display` property to the `gsap.to()` method to prevent this issue.

```js
if (window.scrollY > 500) {
  gsap.to(badgeEl, 0.6, {
    opacity: 0,
    display: "none",
  });
} else {
  gsap.to(badgeEl, 0.6, {
    opacity: 1,
    display: "block",
  });
}
```

Then, it disappears from the DOM tree, and the user won't click the badge when it disappears.

### Understanding how the width works

Let's look at the picture below before we analyze the width.

![](https://velog.velcdn.com/images/devbang/post/5a50d916-8e80-4c87-a4eb-48a9762f3e43/image.png)

Notice only one height property controls the entire element. The HTML structure is the same as below:

```html
<section class="notice">
  <div class="notice-line">
    <div class="bg-left"></div>
    <div class="bg-right"></div>
    <div class="inner"></div>
  </div>
</section>
```

How is the `width: 62px` applied to its sibling and the parent element? We can explain this with the height's `initial value`.

The `notice-line` element has no height, which means it has the height value of `auto`.

Also, the block element tends to shrink vertically and shrink the height as much as possible.

Therefore, the height of the parent container shrinks until it meets the height of the `inner` element.

The `bg-left` and `bg-right` use the parent's height, which fills the entire container with the color because the height is `100%`.

Again, the parent element's height is the same as the `inner`'s height, `62px`, which is why the `inner`'s height is applied to the whole container.

If we understand the CSS, we can reduce the code lines, as in the example above.

Another good example is the following styles with the `notice-line`.

The element's CSS is like the below:

```css
.notice .notice-line .inner__left {
  width: 60%;
  height: 100%;
  background-color: #333;
  display: flex;
}

.notice .notice-line .inner__left .swiper {
  background-color: orange;
  /* flex-grow: 1; */
}
```

We set the background color for the swiper container, but it doesn't appear in the browser.

![](https://velog.velcdn.com/images/devbang/post/69233c47-2bc7-4d18-a7f8-2e37e3afa6f3/image.png)

Note that `display: flex` has the initial values of `flex-grow: 0` and `flex-shrink: 1` by default. So, the swiper container shrinks as much as it can since no width is assigned.

```css
.notice .notice-line .inner__left {
  width: 60%;
  height: 100%;
  background-color: #333;
  display: flex;
}

.notice .notice-line .inner__left .swiper {
  background-color: orange;
  flex-grow: 1;
}
```

If we set the `flex-grow` value to 1, the result will be like this:

![](https://velog.velcdn.com/images/devbang/post/f7a83ba3-3050-4380-8eef-1035cd1693c0/image.png)

But that doesn't explain how the height of this orange box takes the whole notice bar.

In fact, the swiper container uses the `align-items` characteristic with the flexbox.

When the element is in the flexbox, the `align-items` initial value `normal` works as a `stretch`. Indeed, the orange box is stretched from top to bottom to fill the notice bar.

### Calc() function and centering the content

Occasionally, we might not know the proper value of the width or height of the wrapper container. Let's assume that we have the size of each element and the space between the items.

In this case, we can calculate the spacing automatically using the `calc()` function. This function can reduce any miscalculation and redundant manual calculation.

```css
.notice .promotion .swiper {
  width: calc(819px * 3 + 20px);
  height: 553px;
  background-color: orange;
  text-align: center;
  font-size: 200px;
  top: 40px;
  left: 50%;
}
```

We can also center the contents with the `calc()` function. Let's look at the result below from the above CSS.

![](https://velog.velcdn.com/images/devbang/post/35a5e7f8-8b30-4dd0-ae65-f2a14efbe684/image.png)

Notice that we placed the orange box area at the center of the notice or the parent container, but the actual content is pushed to the right.

We can use the `margin-left` property with the `calc()` function to center the content back to center.

We can manually calculate the `margin-left` value, which is the container width devided by two and put minus to bring the content. `(2477 / 2 = 1238.5)`

However, we can miscalculate the value or have to memorize it each time we want to use it. We use the `calc()` function to resolve this issue.

```css
.notice .promotion .swiper {
  width: calc(819px * 3 + 20px);
  height: 553px;
  background-color: orange;
  text-align: center;
  font-size: 200px;
  top: 40px;
  left: 50%;
  margin-left: calc((819px * 3 + 20px) / -2);
}
```

![](https://velog.velcdn.com/images/devbang/post/739e6198-c2ae-4369-8ab5-6ec1015aaa63/image.png)

It is now placed at the center with the automatically calculated value.

### Inspect the Dev tool with SwiperJS

Sometimes, when we use a library like SwiperJS, we find that the explanation or usage might not meet our requirements.

In that case, we need to open the Dev tool and inspect what styles are applied to adjust the element as we want.

If we place the pagination bars underneath the pictures, like the one below, we might wonder how they are aligned without any positioning properties.

```css
.notice .promotion .swiper-pagination {
  bottom: 40px;
  right: 0;
  left: 0;
}
```

![](https://velog.velcdn.com/images/devbang/post/3ae84f78-da49-468b-8375-e50ce970c452/image.png)

The dev tool shows the reason: the `swiper` that we imported with the CDN, or the link tag if you will, brought the rest of the style properties.

![](https://velog.velcdn.com/images/devbang/post/56b89efe-3c59-4b48-b063-34ff7312574a/image.png)

The dev tool also shows that the indiviual bullet point has the size of `8px x 8px`, and the content is `inline-block` level.

Hence, the bullet points are treated as text content, and the `text-align: center` property value can center all the bullet points.

### Toggle button

What code must we write to add a toggling feature to the promotion part? We might think we need to use the `GSAP` library like the above as we learned it.

We don't have to use a complicated `GSAP` library because we can handle the toggle feature with the simple DOM API.

```js
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    // Hide the promotion part
  } else {
    // Show the promotion part
  }
});
```

Firstly, pick the promotion element and the toggle button icon element. Then create a variable called `isHidePromotion`, which is the state of the promotion part. We use the `let` here to change the state when the user clicks the toggle button.

Secondly, add the event listener to the `promotionToggleBtn` to track the click event. The `isHidePromotion = !isHidePromotion;` part will always return reverse from the previous state.

```js
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});
```

Then, we add the class `hide` when the `isHidePromotion` is true, or when the `isHidePromotion` is false, we will remove the class `hide`. If confused, we can open the dev tool to check where we are adding the class name `hide`.

![](https://velog.velcdn.com/images/devbang/post/ba049c04-16dc-4fea-b71d-602a48b87b72/image.png)

Lastly, we can add the CSS to handle the promotion area like this:

```css
.notice .promotion.hide {
  height: 0;
}
```

It is important to note that the `.hide` class is connected to the `.promotion`, which distinguishes other `hide` classes if we have more hide classes in the future. Also, adding a transition may produce a smoother user experience.

### Setting Youtube Video Area

Often, the website has a YouTube video embedded on the landing page. Let's create a video section to practice implementing YouTube videos.

Let's say most of the screen size is `FHD(1920x1080)`, and the video size is the same.

```html
<!-- YOTUBE VIDEO -->
<section class="youtube">
  <div class="youtube__area">
    <div id="player"></div>
  </div>

  <div class="youtube__cover"></div>
</section>
```

The above is the HTML structure for the YouTube section, and the CSS below is the style.

```css
/* YOUTUBE VIDEO */

.youtube {
}

.youtube .youtube__area {
  width: 1920px;
  background-color: orange;
}

.youtube .youtube__area::before {
  content: "";
  display: block;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}
```

![](https://velog.velcdn.com/images/devbang/post/ac68aba3-c49d-4d79-96e3-d5b0b1d20655/image.png)

Let's break down why we used each property in CSS.

The majority of videos nowadays use the `16:9` aspect ratio because that is the standard ratio of TVs and monitors.

We can use the `padding-top` property to create a box with a specific ratio.

![](https://velog.velcdn.com/images/devbang/post/f4a0a565-f114-4a56-91fd-c4114c2b4d9a/image.png)

In the DOM tree, when both the `container` and `item` elements do not have a height property assigned, the parent element will not render. In this case, the child element `item` will be used if it has a height-related property.

The `item` element has a `padding-top` property, which increases the element's size. Additionally, the `percentage padding` follows the width. Hence, the height of the child element `item` is 50% of the width.

> When you use margin and padding set in percentages, the value is calculated from the inline size of the containing block - therefore, the width when working in a horizontal language. All margins and padding are 10% of the width in our example. This means you can have equal-sized margins and padding all around the box. This is a fact worth remembering if you use percentages in this way. - MDN
>
> If you are interested in the percentage margins and padding, visit [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS#percentage_margins_and_padding)

After understanding the box-sizing, there is still an unusual property: a pseudo-element `::before`.

```css
/* YOUTUBE VIDEO */

.youtube {
}

.youtube .youtube__area {
  width: 1920px;
  background-color: orange;
}

.youtube .youtube__area::before {
  content: "";
  display: block;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}
```

To remember the fundamentals, we can use the pseudo-element when we don't want to add an additional element in HTML but only need styling.

The default state of the `::before` pseudo-element is that it is an inline element. However, in order to utilize the width and height properties, it is necessary to add the `display: block`.

![](https://velog.velcdn.com/images/devbang/post/ac68aba3-c49d-4d79-96e3-d5b0b1d20655/image.png)

Lastly, if we calculate the ratio, we can get the `56.25%` from the `16:9`(`100:56.25 = 16:9`).

But it is not centered, so we need to add some other properties like this:

```css
.youtube {
  position: relative;
  height: 700px;
  background-color: royalblue;
}

.youtube .youtube__area {
  width: 1920px;
  background-color: orange;
  position: absolute;
  left: 50%;
  margin-left: calc(1920px / -2);
  top: 50%;
  margin-top: calc(1920px * 9 / 16 / -2);
}
```

![](https://velog.velcdn.com/images/devbang/post/e9471efb-d45f-45bf-9dab-70b7d6e677ae/image.png)

We used the centering calculation method we learned previously to center the video area.

```css
.youtube {
  position: relative;
  height: 700px;
  background-color: royalblue;
  overflow: hidden;
}

.youtube .youtube__area {
  width: 1920px;
  background-color: orange;
  position: absolute;
  left: 50%;
  margin-left: calc(1920px / -2);
  top: 50%;
  margin-top: calc(1920px * 9 / 16 / -2);
}

.youtube .youtube__area::before {
  content: "";
  display: block;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}

.youtube .youtube__cover {
  background-image: url("../images/video_cover_pattern.png");
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

Then, cut the overflowed video area and add the cover with the color that will make the area like this:

![](https://velog.velcdn.com/images/devbang/post/63d37bd1-a7a9-496c-94cf-73725a32e98d/image.png)

### Embedding Youtube Video

To embed a YouTube video, we will use the iframe player API. To learn more about using the API, visit [here](https://developers.google.com/youtube/iframe_api_reference#Getting_Started).

We will use the below code snippet, which is from the above website.

```js
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8", // video in que for the loop
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
```

Notice that the first part creates an element named `script` and puts the `tag` element before the `firstScriptTag` element or at the top of the script element list.

We can't change the function name here because it is from an outside library. If we do, the new name will be different from the original, and it will not be able to find the proper function.

Many other supported parameters exist for embedded YouTube videos, so check the documentation for additional information [here](https://developers.google.com/youtube/player_parameters#Parameters).

### Floating Objects

In this part, we will create another interesting animation with the GSAP. The floating effect can be varied, but we first need to create the GSAP function.

```js
function floatingObjects(selector) {
  gsap.to(selector, 1, {
    y: 20,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 3,
  });
}

floatingObjects(".floating");
```

Notice some new options like `yoyo` or `ease` that we didn't use previously. The negative repeat value repeats the animation, the `yoyo` sets the animation timeline, and the `true` value repeats the timeline back and forth.

The `ease: "powser1.inOut"` value is from this [documentation](https://gsap.com/docs/v3/Eases/), and as we learned, the ease in and out graph looks like the following image:

![](https://velog.velcdn.com/images/devbang/post/bc704408-017d-4f29-bff1-46dc463f1fff/image.png)

One step further, if we want to play the object's animation separately, we can use the `random()` function.

```js
// Range random function (up to two decimal places)
function random(min, max) {
  // Convert the string data returned through `.toFixed()`,
  // into numeric data with decimals using `parseFloat()`
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObjects(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: random(0, delay),
  });
}

floatingObjects(".floating", 1, 15);
floatingObjects(".floating", 0.5, 15);
floatingObjects(".floating", 1.5, 20);
```

Notice we added the random function, which made our `floatingObjects` function more complicated. The `floatingObjects` parameters indicate the selector from the HTML, the animation duration, and the movement size by pixel.

The last parameter is the options property and values from the `GSAP`, and we used the custom value for the delay, where the range is from 0 as the immediate response to any number that the function gets for `delay`.

### Parallax Scroll Effect and 3D animation

Often, we can see the website's image by scrolling. This is called the parallax scroll effect, which we use for special designs or advertisements.

We need to know the CSS properties and values below to create the parallax scroll effect.

```css
.pick-your-favorite {
  background-image: url("../images/favorite_bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
```

The above `pick-your-favorite` is one of the sections on our Starbucks website that use the parallax scroll effect.

Notice that we use the external background image and center the image with no repetition. These three values make the effect more natural.

The last two properties are important. The `background-attachment: fixed` will fix the image to the viewport. Since the image is fixed to the viewport, it won't move even though we scroll up or down the website. The `background-size: cover` will fit the image to the larger side, which is the viewport in this case.

To understand the 3D animation we want to use, we first need to understand the structure of the content.

![](https://velog.velcdn.com/images/devbang/post/7b15641a-80ab-4918-a5bc-c0f5cb298b43/image.png)

Here is an example of the structure before we pile the two boxes together. The element with the `front` class indicates the front side of the 3D content and vice versa.

The letter `B` is rotated -180 degrees with respect to the Y-axis. Then, let's stack the two elements in one place.

![](https://velog.velcdn.com/images/devbang/post/faa94953-9904-4c5f-bbf8-b4942bdaef84/image.png)

In the element at the forefront, we employed the `position: absolute` attribute to indicate that we wish to position the element about the parent element. Consequently, the second element will be situated in the same location since both utilize distinct positioning properties.

![](https://velog.velcdn.com/images/devbang/post/73978576-6fbb-49a4-a98c-469213f8b352/image.gif)

To create a flipping box animation, we can add a hover effect, the `backface-visibility: hidden` property value, and the transition value. However, there may be issues such as the one seen in the above GIF, where the hover effect is applied to the entire container instead of just the front and back sides of the box. This happens because the container is a block element and takes up too much space.

```css
.container {
  background-color: orange;
}

.container .item {
  width: 100px;
  height: 100px;
  border: 4px solid red;
  box-sizing: border-box;
  font-size: 60px;
  backface-visibility: hidden;
  transition: 1s;
}

.container .item.front {
  position: absolute;
}

.container:hover .item.front {
  transform: rotateY(180deg);
}

.container .item.back {
  transform: rotateY(-180deg);
}

.container:hover .item.back {
  transform: rotateY(0deg);
}
```

To fix the issue, we need to set the container box size as the front and back item sizes. Then, we will add a `perspective` property value to make the animation as the 3D animation.

Additionally, we will add the base value `transform: rotateY(0deg)` to the front face element. Although the animation works without the `transform: rotateY(0deg)`, we need to consider the current browser and all the other browsers. Some old browsers might not work without the initial `transform: rotateY(0deg)` value, so we explicitly set the element's initial value to prevent any strange behavior.

![](https://velog.velcdn.com/images/devbang/post/b88ece2e-70bd-4d7f-a181-8aa523271cc6/image.gif)

Now, let's make the 3D animation on our Starbucks website. The fundamental HTML structure will be like this:

```html
<!--RESERVE STORE-->
<section class="reserve-store">
  <div class="inner">
    <div class="medal">
      <div class="front">
        <img
          src="./images/reserve_store_medal_front.png"
          alt="store-medal-front"
        />
      </div>
      <div class="back">
        <img
          src="./images/reserve_store_medal_back.png"
          alt="store-medal-back"
        />
      </div>
    </div>
  </div>
</section>
```

![](https://velog.velcdn.com/images/devbang/post/ae70320f-b18c-4f7f-939c-381b93041d5d/image.png)

We also set the width and height of the front and back elements to `334px x 334px`. Although it may look like two different-sized circles, it actually has the same size box as in the picture above.

### Scroll animation with the ScrollMagic library

Have you ever seen any website's items fade in when you scroll down? In this part, we are going to implement that scroll animation.

We will borrow pre-made functions to implement complicated features as we did with the `GSAP` library.

```js
const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
```

It might be overwhelming initially, so let's break this function into smaller pieces.

The first `spyEls` variable looks for the selector `section` with the class name `scroll-spy`. They are connected, so it only looks for the section with the name `scroll-spy`.

After we find all the elements, we will loop through each element with the `forEach((el) {})` function.

Inside the loop is an anonymous function, which has a special function called a constructor function.

We used the constructor function before with the `GSAP` library, and more information on `ScrollMagic` about the usage can be found in their documentation [here](https://scrollmagic.io/docs/index.html).

The `ScrollMagic` has a method called `Scene()`, and the `setClassToggle()` and `addTo()` methods are connected by method chaining.

Basically, in the `ScrollMagic` library, the `Scene()` method specifies options for monitoring a specific element.

The `Scene()` method has an object with the `triggerElement` key, and the `triggerElement` has a value that specifies the element to be monitored. In our case, we use it to specify the element whose visibility we want to monitor.

The `setClassToggle()` method toggles the class `show` to each `spyEl` element.

The `ScrollMagic` JavaScript library needs a `controller` to be used on our website, and the `add ()` method adds that required controller.

It isn't easy to understand how the library works, so we often use it according to the document's guidelines.

Now, we have finished the setting with the `ScrollMagic`. Let's move to the `index.html` to add the `scroll-spy` class, as below.

```html
<!-- SEASON PRODUCT -->
<section class="season-product scroll-spy">...</section>

<!-- RESERVE COFFEE -->
<section class="reserve-coffee scroll-spy">...</section>

<!--PICK YOUR FAVORITE-->
<section class="pick-your-favorite scroll-spy">...</section>

<!--RESERVE STORE-->
<section class="reserve-store">...</section>

<!-- FIND THE STORE -->
<section class="find-store scroll-spy">...</section>
```

Then, if we open the dev tool in the browser, we can see the scroll action toggles the `show` class beside the `scroll-spy` class.

![](https://velog.velcdn.com/images/devbang/post/e3d8cf96-60c2-4221-8d00-13078e480fe9/image.gif)

One last option we need to know is the `triggerHook` in the `Scene()` method. The value is `0.8`, the viewport height ratio. Let's see the picture below for a better understanding.

![](https://velog.velcdn.com/images/devbang/post/7d91683a-d379-4b67-9d00-0356dda6daf9/image.png)

If we divide the viewport height and value `0 to 1`, the `0.8` could be the bottom part of the website.

When the `scroll-spy` element reaches the 0.8 area, the `show` class toggles for each element.

This monitoring function makes adding the animation to each element easy. It automatically toggles the class `show` on and off under certain conditions.

To add the animation to each element, we will use CSS. If the JavaScript library uses a lot of resources to play animation, it may slow down website performance.

Hence, we will use the `ScrollMagic` library to watch the element and add the `show` class, which is much simpler logic than the animation.

If the element becomes too complicated or the animation logic is too difficult to implement with CSS, we can always return to JavaScript.

```css
.When a scroll-spy element reaches the 0.8 area,
the show class toggles for each element. {
  opacity: 0;
  transition: 1s;
}

.back-to-position.to-right {
  transform: translateX(-150px);
}

.back-to-position.to-left {
  transform: translateX(150px);
}

.show .back-to-position {
  opacity: 1;
  transform: translateX(0);
}
```

The above four CSS codes will create the animation; the `back-to-position` indicates that the element's opacity is initially zero.

The `to-right` and `to-left` classes are transforming the elements to the side of the screen.

The last part changes the opacity to `100%` and brings all the elements to their original position. Notice that it has the `show` class, which means that if the above `ScrollMagic` library adds the `show` class to the section, the elements appear with the animation.

![](https://velog.velcdn.com/images/devbang/post/37f86134-99bd-4d49-acc0-52a638d7bd5a/image.gif)

The above GIF explains the animation we made with the four CSS codes above. However, it's a little awkward because all the elements appear at once. To improve the animation, we will add a delay to each element.

![](https://velog.velcdn.com/images/devbang/post/9782e57c-fb4a-409c-925f-0b706c3a57c4/image.gif)

```css
.show .back-to-position.delay-0 {
  transition-delay: 0;
}

.show .back-to-position.delay-1 {
  transition-delay: 0.3s;
}

.show .back-to-position.delay-2 {
  transition-delay: 0.6s;
}

.show .back-to-position.delay-3 {
  transition-delay: 0.9s;
}
```

Notice that the animation is much better now with the delays. Like the above, we can also easily add the delay with the CSS `transition-delay` property.

### Align Image to center and year calculation

The last footer part has a logo, and we will center the image to align with the other elements in the footer.

```css
footer .logo {
  margin: 30px auto 0;
}
```

To do that, we can simply add the above lines in the CSS. We need the width to align with the margin property automatically, but we didn't set it.

The above code works because the logo is in the `img` element, and the browser automatically calculates the `img` element's width by default. Also, we set the common CSS that the `img` element with the `display: block` property and value.

Hence, the `block` element can use width and height, and the browser automatically calculates the width. That's why all we need is the margin values to align the logo to the center.

Additionally, in the footer, we have the year value that we want to update if the year changes automatically.

```js
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
```

To do that, we can use the `textContent` to set the text value to the element and the `Date()` function's `getFullYear()` to get the current year value.

### ScrollTo Plugin

Lastly, we will add a button that takes us to the top of the page on the website's side.

```js
const toTopEl = document.querySelector("#to-top");

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
```

First, we make a variable from the HTML with the `querySelector(#to-top)` method. Then, we will use the `scrollTo` library from `GSAP` to apply scroll animation.

As we did previously, we need to get the script code from the below website.

![](https://velog.velcdn.com/images/devbang/post/c975d335-5cf5-4200-b3aa-7ac5f3dadc99/image.png)

As we can see, the GSAP library has many subcontents. If the library contains all the animation, the file becomes too large. To minimize the resources and optimize the website, GSAP split the whole library into several pieces.

We can pick the `ScrollToPlugin` since that is the animation we want to apply for oure website.

```js
const toTopEl = document.querySelector("#to-top");

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
```

Notice that the `gsap.to()` function can now use the `scrollTo` feature because we imported it as a script tag. The value `scrollTo: 0` means that we want to scroll to 0 or to the top when the user clicks the `toTopEl` element.

But we have already created a similar animation to the scroll, which is the badge element. Remember, we created it with the lodash library's `throttle` function to reduce the redundant function calls.

```js
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      // Hide the badge
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      gsap.to(toTopEl, 0.2, {
        // Show the button(place el to the original position)
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        // Show the badge
        opacity: 1,
        display: "block",
      });
      gsap.to(toTopEl, 0.2, {
        // Hide the button(move el to the right, hide from the screen)
        x: 100,
      });
    }
  }, 300)
);

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
```

As shown above, we can modify the badge function to use the previously made function. Notice that the `toTop` button will be hidden when the badge is shown, and the `toTop` button will be visible when the badge is hidden.
