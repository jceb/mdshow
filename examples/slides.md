---
author: John Doe
date: 2020-06-20
title: Example presentation
subtitle: Subtitle goes here
keywords: markdown slideshow
slideNumber: False
theme: simple

# default configuration: ~/.config/mdshow/defaults.yaml
# themes: ~/.config/mdshow/reveal.js/dist/theme/
# special markdown formatting: https://pandoc.org/MANUAL.html#pandocs-markdown
# revealjs documentation: https://revealjs.com/
# fontawesome icons: https://fontawesome.com/
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

<div style="display: flex; align-items: center; justify-content: space-around; margin: 5rem">
<div style='height: 8rem; width: 8rem; border-radius: 20%; display: flex; align-items: center; justify-content: center; overflow: hidden; background-image: url("https://images.unsplash.com/photo-1595537725181-0f127e2feeb2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640"); background-repeat: no-repeat; background-size: cover;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'></div>
<div style='height: 8rem; width: 8rem; border-radius: 20%; display: flex; align-items: center; justify-content: center; overflow: hidden; background-image: url("https://images.unsplash.com/photo-1595589982168-77b64bc1b485?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640"); background-repeat: no-repeat; background-size: cover;'></div>
<div style='height: 8rem; width: 8rem; border-radius: 20%; display: flex; align-items: center; justify-content: center; overflow: hidden; background-image: url("https://images.unsplash.com/photo-1595586964632-b215dfbc064a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640"); background-repeat: no-repeat; background-size: cover;'></div>
<div style='height: 8rem; width: 8rem; border-radius: 20%; display: flex; align-items: center; justify-content: center; overflow: hidden; background-image: url("https://images.unsplash.com/photo-1595508064774-5ff825ff0f81?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640"); background-repeat: no-repeat; background-size: cover;'></div>
</div>

## Center buttons

<div style="display: flex; align-items: center; justify-content: space-around; margin: 5rem">
<div style="height: 8rem; width: 8rem; border-radius: 50%; background-color: lightblue; color: yellow; display: flex; align-items: center; justify-content: center;">![](fas fa-thumbs-up)</div>
<div style="height: 8rem; width: 8rem; border-radius: 50%; background-color: pink; color: darkred; display: flex; align-items: center; justify-content: center;">![](fas fa-thumbtack)</div>
<div style="height: 8rem; width: 8rem; border-radius: 50%; background-color: lightgreen; color: lightblack; display: flex; align-items: center; justify-content: center;">![](fas fa-headphones)</div>
</div>

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
