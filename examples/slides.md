---
author: John Doe
date: 2020-07-25
title: mdshow
subtitle: Turn markdown files into beautiful presentations quickly.
keywords: markdown slideshow revealjs mdshow fontawesome
slideNumber: False
theme: simple

# - CSS configuration: ~/.config/mdshow/defaults.css
# - Default configuration: ~/.config/mdshow/defaults.yaml
# - Themes: ~/.config/mdshow/reveal.js/dist/theme/
# - Pandoc markdown formatting: https://pandoc.org/MANUAL.html#pandocs-markdown
# - Revealjs documentation: https://revealjs.com/
# - Font Awesome icons: https://fontawesome.com/
---

# Agenda

1. Intro mdshow
2. Basics
3. Incremental Display
4. Backgrounds
5. Pictures and Icons
6. Advanced Formatting

# Intro mdshow

> Turn markdown files into beautiful presentations quickly.

## Markdown

`mdshow` is built to quickly turn ideas into beautiful presentations.
The text-based [markdown
format](https://daringfireball.net/projects/markdown/) is the tool of
choice to do just that!

## Features

- Built with [reveal.js 4.0](https://revealjs.com/) and [pandoc
  2.9](https://pandoc.org/)
- Focus: stays out of the way
- Enterprise: theming and PDF conversion
- Setup: super fast
- Presentation: looks great with the power of the browser at your
  fingertips

---

See for yourself.

# Basics

## Headings

<h1>h1</h1>
<h2>h2</h2>

### h3

---

No heading.

## Text formatting

Regluar, *italic*, **bold**, and <u>underlined</u>.

## Unordered List

- Item 1
- Item 2
- Item 3

## Ordered List

1. Item 1
2. Item 2
3. Item 3

## Links

- [Text link](https://github.com/jceb/mdshow)
- Image link: [![](https://images.unsplash.com/photo-1595503240812-7286dafaddc1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640){width=30%}](https://unsplash.com/photos/x9yfTxHpj5w)

## Quotes

> Famous Quote by Someone

## Code Highlighting

```javascript
function hello(msg) {
  alert(`Hello ${msg}`)
}

hello('world!');
```

## Math formulas

`$$ J(\theta_0,\theta_1) = \sum_{i=0} $$`

## Table

| Tables        | Are             | Cool   |
| ------------- | :-------------: | -----: |
| col 3 is      | right-aligned   | $1600  |
| col 2 is      | centered        | $12    |
| zebra stripes | are neat        | $1     |

## Columns

:::::: {.flex .align-center .justify-around}

::: Col1
- Column 1
- Column 1
- Column 1
:::

::: Col2
- Column 2
- Column 2
- Column 2
:::

::: Col3
- Column 3
- Column 3
- Column 3
:::

::::::

# Incremental Display

## Incremental Lists

::: incremental
- Item 1
- Item 2
- Item 3
:::

## Fragments

:::::: {.flex .align-center}
![](https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640){width=50%}

::: fragment
![](https://images.unsplash.com/photo-1587613864521-9ef8dfe617cc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640){width=50%}
:::
::::::

## Breaks

- Item 1

. . .

- Item 2
- Item 3

# Backgrounds

## Slide with background image{data-background-image="https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640"}

## Slide with colored background{data-background-color="#78a5e9"}

# Pictures and Icons

## Picture

![](https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640){width=50%}

## Font Awesome Icon

![](fas fa-smile)

# Advanced Formatting

## Colored <span style="color: #78a5e9">text</span>

## Font Awesome Icon with Color

<span style="font-size: 8rem; color: purple;">
![](fas fa-smile)
</span>

## Box Shadow

::: {.box-shadow-trbl}
Shadow top, right, bottom, left.
:::

::: {.box-shadow-rbl}
Shadow right, bottom, left.
:::

::: {.box-shadow-rb}
Shadow right, bottom.
:::

::: {.box-shadow-bl}
Shadow bottom, left.
:::

## Colored Boxes

:::::: {.flex .align-center .justify-around}
<div class="box-8rem radius-10p" style="background-color: lightblue; color: yellow">App 1</div>
<div class="box-10rem radius-20p" style="background-color: pink; color: darkred;">App 2</div>
<div class="box-12rem radius-50p" style="background-color: lightgreen; color: darkgreen;">Circle</div>
::::::

## Font Awesome Buttons

:::::: {.flex .align-center .justify-around .margin-tb-5rem}
<div class="flex align-center justify-around box-8rem radius-10p box-shadow-trbl" style=" background-color: lightblue; color: yellow">![](fas fa-thumbs-up)</div>
<div class="fs-4 flex align-center justify-around box-10rem radius-20p box-shadow-rbl" style=" background-color: pink; color: darkred;">![](fas fa-thumbtack)</div>
<div class="fs-7 flex align-center justify-around box-12rem radius-50p box-shadow-rb" style=" background-color: lightgreen; color: darkgreen;">![](fas fa-headphones)</div>
::::::

## Picture Buttons

:::::: {.flex .align-center .justify-around .margin-tb-6rem}
<div class="box-8rem radius-10p overflow-hidden background-cover box-shadow-trbl" style='background-image: url("https://images.unsplash.com/photo-1595537725181-0f127e2feeb2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640");'></div>
<div class="box-10rem radius-20p overflow-hidden background-cover box-shadow-rbl" style='background-image: url("https://images.unsplash.com/photo-1595589982168-77b64bc1b485?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640");'></div>
<div class="box-12rem radius-30p overflow-hidden background-cover box-shadow-rb" style='background-image: url("https://images.unsplash.com/photo-1595586964632-b215dfbc064a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640");'></div>
<div class="box-14rem radius-50p overflow-hidden background-cover box-shadow-bl" style='background-image: url("https://images.unsplash.com/photo-1595508064774-5ff825ff0f81?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640");'></div>
::::::

# Thank you

<h3>for using [mdshow](https://github.com/jceb/mdshow)</h3>
