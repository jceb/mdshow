---
author: John Doe
date: 2020-06-20
title: Example presentation
subtitle: Subtitle goes here
keywords: markdown slideshow
slideNumber: False
theme: simple

# - default css configuration: ~/.config/mdshow/defaults.css
# - default configuration: ~/.config/mdshow/defaults.yaml
# - installed themes: ~/.config/mdshow/reveal.js/dist/theme/
# - special pandoc markdown formatting: https://pandoc.org/MANUAL.html#pandocs-markdown
# - revealjs documentation: https://revealjs.com/
# - fontawesome icons: https://fontawesome.com/
---

# Agenda with custom background{data-background-image="https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640"}



---

- Point one
- Point two
- Point three

::: notes
- Some
- Important
- Speaker
- Notes
:::

# P1, background color{data-background-color="red"}

## In

## Need

## Of

## Content

# Point two

## Points

- One
- *Two*
- **Three**

## Numbered points

Shown one after the other

::: incremental
1. One
2. Two
3. Three
:::

# Point three

## Headings

### Subheading

- Point

## Pictures and fragments

<div style="display: flex; align-items: center">
![](https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640){width=50%}

::: fragment
![](https://images.unsplash.com/photo-1587613864521-9ef8dfe617cc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640){width=50%}
:::
</div>

## Center pictures

:::::: {.flex .align-center .justify-around .margin-tb-6rem}
<div class="box-12rem radius-10p overflow-hidden background-cover box-shadow-bl" style='background-image: url("https://images.unsplash.com/photo-1595537725181-0f127e2feeb2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640");'></div>
<div class="box-12rem radius-10p overflow-hidden background-cover box-shadow-rbl" style='background-image: url("https://images.unsplash.com/photo-1595589982168-77b64bc1b485?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640");'></div>
<div class="box-12rem radius-10p overflow-hidden background-cover box-shadow-trbl" style='background-image: url("https://images.unsplash.com/photo-1595586964632-b215dfbc064a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640");'></div>
<div class="box-12rem radius-10p overflow-hidden background-cover box-shadow-rb" style='background-image: url("https://images.unsplash.com/photo-1595508064774-5ff825ff0f81?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640");'></div>
::::::

## Center buttons

:::::: {.flex .align-center .justify-around .margin-tb-5rem}
<div class="flex align-center justify-around box-10rem radius-50p overflow-hidden background-cover box-shadow-rbl" style=" background-color: lightblue; color: yellow">![](fas fa-thumbs-up)</div>
<div class="flex align-center justify-around box-10rem radius-50p overflow-hidden background-cover box-shadow-rbl" style=" background-color: pink; color: darkred;">![](fas fa-thumbtack)</div>
<div class="flex align-center justify-around box-10rem radius-50p overflow-hidden background-cover box-shadow-rbl" style=" background-color: lightgreen; color: lightblack;">![](fas fa-headphones)</div>
::::::

## Links

Link to [mdshow](https://github.com/jceb/mdshow)

## Tables

| Tables        | Are             | Cool   |
| ------------- | :-------------: | -----: |
| col 3 is      | right-aligned   | $1600  |
| col 2 is      | centered        | $12    |
| zebra stripes | are neat        | $1     |

---

> Famous
> Quote
> by
> Someone

## Fontawesome integration

<span style="font-size: 8rem; color: purple;">
![](fas fa-smile)
</span>
