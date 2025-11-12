# Complete CSS Properties Guide

## Table of Contents
1. [Text & Font Properties](#text--font-properties)
2. [Box Model Properties](#box-model-properties)
3. [Display & Layout Properties](#display--layout-properties)
4. [Color & Background Properties](#color--background-properties)
5. [Border & Shadow Properties](#border--shadow-properties)
6. [Position & Transform Properties](#position--transform-properties)
7. [Animation & Transition Properties](#animation--transition-properties)
8. [Visual Effects Properties](#visual-effects-properties)

---

## Text & Font Properties

### `font-family`
**Purpose:** Specifies which font to use for text
**Syntax:** `font-family: font-name, fallback-font, generic-family;`
**Example:**
```css
font-family: "Arial", "Helvetica", sans-serif;
/* Tries Arial first, then Helvetica, then any sans-serif font */
```
**Common Values:** 
- Serif: Georgia, Times New Roman
- Sans-serif: Arial, Helvetica, Verdana
- Monospace: Courier New, Courier
- Cursive: Comic Sans MS
- Fantasy: Impact

**Use Case:** Make text readable and match your design style

---

### `font-size`
**Purpose:** Sets the size of text
**Syntax:** `font-size: value;`
**Example:**
```css
font-size: 16px;      /* Fixed pixel size */
font-size: 1.5em;     /* Relative to parent (1.5x larger) */
font-size: 100%;      /* Same as parent */
```
**Units:**
- `px` - Pixels (fixed)
- `em` - Relative to parent font size
- `rem` - Relative to root font size
- `%` - Percentage of parent

**Use Case:** Control text readability and hierarchy

---

### `font-weight`
**Purpose:** Controls how thick/bold text appears
**Syntax:** `font-weight: value;`
**Example:**
```css
font-weight: normal;      /* Normal weight (400) */
font-weight: bold;        /* Bold weight (700) */
font-weight: 300;         /* Light */
font-weight: 900;         /* Extra bold */
```
**Values:** 100, 200, 300, 400 (normal), 500, 600, 700 (bold), 800, 900

**Use Case:** Emphasize important text like headings or logos

---

### `color`
**Purpose:** Sets the text color
**Syntax:** `color: value;`
**Example:**
```css
color: red;                    /* Named color */
color: #FF0000;               /* Hex color */
color: rgb(255, 0, 0);        /* RGB */
color: rgba(255, 0, 0, 0.5);  /* RGB with transparency */
```
**Formats:**
- Named: red, blue, white, black, transparent
- Hex: #RRGGBB (each pair is 00-FF)
- RGB: rgb(0-255, 0-255, 0-255)
- RGBA: rgb with alpha (0-1 transparency)
- HSL: hsl(hue, saturation%, lightness%)

**Use Case:** Style text color for readability and design

---

### `text-align`
**Purpose:** Aligns text horizontally
**Syntax:** `text-align: value;`
**Example:**
```css
text-align: left;      /* Align to left (default) */
text-align: center;    /* Center text */
text-align: right;     /* Align to right */
text-align: justify;   /* Spread across full width */
```

**Use Case:** Center headings, justify paragraphs, align navigation

---

### `text-decoration`
**Purpose:** Adds/removes decorations on text
**Syntax:** `text-decoration: line style color;`
**Example:**
```css
text-decoration: none;                    /* Remove underline */
text-decoration: underline;               /* Add underline */
text-decoration: line-through;            /* Strikethrough */
text-decoration: underline dotted red;    /* Custom line */
```

**Use Case:** Remove link underlines, emphasize text, strikethrough

---

### `text-transform`
**Purpose:** Changes text case
**Syntax:** `text-transform: value;`
**Example:**
```css
text-transform: uppercase;    /* HELLO WORLD */
text-transform: lowercase;    /* hello world */
text-transform: capitalize;   /* Hello World */
text-transform: none;         /* hello world (default) */
```

**Use Case:** Style menu items, headings, or brand names

---

### `letter-spacing`
**Purpose:** Adds space between characters
**Syntax:** `letter-spacing: value;`
**Example:**
```css
letter-spacing: 2px;    /* Add 2px between letters */
letter-spacing: 0.1em;  /* Relative spacing */
letter-spacing: normal; /* Default spacing */
```

**Use Case:** Create elegant or spaced-out headings

---

### `line-height`
**Purpose:** Controls space between lines of text
**Syntax:** `line-height: value;`
**Example:**
```css
line-height: 1.5;     /* 1.5x font size */
line-height: 20px;    /* Fixed 20px */
line-height: 150%;    /* 150% of font size */
```

**Use Case:** Improve readability of paragraphs

---

## Box Model Properties

The **box model** consists of: Content → Padding → Border → Margin

### `margin`
**Purpose:** Space OUTSIDE the element (pushes elements apart)
**Syntax:** `margin: top right bottom left;`
**Example:**
```css
margin: 20px;              /* 20px on all sides */
margin: 10px 20px;         /* 10px top/bottom, 20px left/right */
margin: 10px 20px 30px;    /* 10px top, 20px left/right, 30px bottom */
margin: 10px 20px 30px 40px; /* top, right, bottom, left */
margin-top: 10px;          /* Only top margin */
```

**Use Case:** Space between elements, centering with `margin: 0 auto`

---

### `padding`
**Purpose:** Space INSIDE the element (around content)
**Syntax:** `padding: top right bottom left;`
**Example:**
```css
padding: 20px;           /* 20px on all sides */
padding: 10px 20px;      /* 10px top/bottom, 20px left/right */
padding: 10px 20px 30px; /* 10px top, 20px left/right, 30px bottom */
padding-left: 15px;      /* Only left padding */
```

**Use Case:** Create breathing room inside buttons, boxes, text

---

### `width`
**Purpose:** Sets element width
**Syntax:** `width: value;`
**Example:**
```css
width: 300px;        /* Fixed width */
width: 50%;          /* Half of parent width */
width: 100vw;        /* Full viewport width */
width: auto;         /* Automatic width */
width: max-content;  /* Width of content */
```

**Use Case:** Control element size, responsive design

---

### `height`
**Purpose:** Sets element height
**Syntax:** `height: value;`
**Example:**
```css
height: 200px;    /* Fixed height */
height: 50%;      /* Half of parent height */
height: 100vh;    /* Full viewport height */
height: auto;     /* Automatic height */
```

**Use Case:** Control vertical space, create fixed-size sections

---

### `max-width`
**Purpose:** Sets maximum width (element won't exceed this)
**Syntax:** `max-width: value;`
**Example:**
```css
max-width: 1200px;  /* Content never wider than 1200px */
max-width: 100%;    /* Don't exceed parent width */
```

**Use Case:** Make responsive designs, prevent content from being too wide

---

### `min-width`
**Purpose:** Sets minimum width (element won't be smaller)
**Syntax:** `min-width: value;`
**Example:**
```css
min-width: 300px;  /* Element always at least 300px wide */
```

**Use Case:** Ensure elements don't become too small

---

## Display & Layout Properties

### `display`
**Purpose:** Controls how element is laid out
**Syntax:** `display: value;`
**Example:**
```css
display: block;       /* Full width, new line (paragraphs, divs) */
display: inline;      /* Only as wide as content, same line (links, span) */
display: inline-block; /* Inline but can set width/height */
display: flex;        /* Flexible layout system */
display: grid;        /* Grid layout system */
display: none;        /* Hide element completely */
```

**Use Case:** Change layout behavior of elements

---

### `flex` (Flexbox)
**Purpose:** Create flexible, responsive layouts
**Syntax:** `display: flex;` with related properties
**Example:**
```css
.container {
    display: flex;
    justify-content: space-between;  /* Spread items horizontally */
    align-items: center;             /* Center items vertically */
    gap: 20px;                       /* Space between items */
    flex-direction: row;             /* Items in row (left to right) */
    flex-wrap: wrap;                 /* Wrap items to next line */
}
```

**Common Flex Properties:**
- `justify-content`: Distribute items horizontally (flex-start, center, flex-end, space-between, space-around)
- `align-items`: Distribute items vertically (stretch, center, flex-start, flex-end)
- `gap`: Space between flex items
- `flex-direction`: Direction of items (row, column, row-reverse, column-reverse)
- `flex-wrap`: Wrap items (wrap, nowrap)

**Use Case:** Create responsive navigation, grid layouts, centered content

---

### `grid`
**Purpose:** Create grid-based layouts
**Syntax:** `display: grid;` with related properties
**Example:**
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
    gap: 20px;                           /* Space between items */
    grid-auto-rows: 200px;               /* Row height */
}
```

**Use Case:** Create magazine-style layouts, dashboards

---

## Color & Background Properties

### `background-color`
**Purpose:** Sets background color of element
**Syntax:** `background-color: value;`
**Example:**
```css
background-color: white;
background-color: #FF0000;
background-color: rgb(255, 0, 0);
background-color: rgba(255, 0, 0, 0.5);  /* Transparent red */
```

**Use Case:** Add color to elements, create contrast

---

### `background`
**Purpose:** Shorthand for all background properties
**Syntax:** `background: color image position/size repeat attachment;`
**Example:**
```css
background: white url('image.jpg') center/cover no-repeat;
background: linear-gradient(90deg, red, blue);
background: radial-gradient(circle, yellow, orange);
```

**Use Case:** Add images, gradients as backgrounds

---

### `linear-gradient`
**Purpose:** Creates smooth color transition in straight line
**Syntax:** `linear-gradient(angle, color1, color2, ...);`
**Example:**
```css
background: linear-gradient(90deg, red, blue);        /* Left to right */
background: linear-gradient(180deg, red, blue);       /* Top to bottom */
background: linear-gradient(135deg, red, blue);       /* Diagonal */
background: linear-gradient(90deg, red 0%, blue 100%); /* Control stops */
```

**Angles:**
- 0deg: Bottom to top
- 90deg: Left to right
- 180deg: Top to bottom
- 270deg: Right to left

**Use Case:** Create gradient backgrounds, gradient text effects

---

### `radial-gradient`
**Purpose:** Creates smooth color transition from center outward
**Syntax:** `radial-gradient(shape size at position, color1, color2);`
**Example:**
```css
background: radial-gradient(circle, yellow, orange);
background: radial-gradient(ellipse, red 0%, blue 100%);
```

**Use Case:** Create circular backgrounds, spotlight effects

---

### `background-image`
**Purpose:** Sets background image
**Syntax:** `background-image: url('path');`
**Example:**
```css
background-image: url('image.jpg');
background-size: cover;        /* Cover entire area */
background-position: center;   /* Position image */
background-repeat: no-repeat;  /* Don't repeat image */
```

**Use Case:** Add images as backgrounds

---

## Border & Shadow Properties

### `border`
**Purpose:** Adds border around element
**Syntax:** `border: width style color;`
**Example:**
```css
border: 2px solid black;           /* 2px solid black border */
border: 1px dashed red;            /* Dashed red border */
border-top: 3px dotted blue;       /* Only top border */
border-radius: 10px;               /* Rounded corners */
border-radius: 50%;                /* Circle */
```

**Styles:** solid, dashed, dotted, double, groove, ridge, inset, outset

**Use Case:** Outline elements, create frames, rounded buttons

---

### `box-shadow`
**Purpose:** Adds shadow effect around element
**Syntax:** `box-shadow: offset-x offset-y blur-radius spread-radius color;`
**Example:**
```css
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
/* 5px right, 5px down, 10px blur, 30% black */

box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
/* Light shadow below element */

box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
/* Shadow inside element */
```

**Parameters:**
- Offset X: horizontal distance
- Offset Y: vertical distance
- Blur radius: how soft the shadow is
- Spread radius: how large the shadow is
- Color: shadow color

**Use Case:** Add depth, create elevation, floating effects

---

### `text-shadow`
**Purpose:** Adds shadow effect to text
**Syntax:** `text-shadow: offset-x offset-y blur-radius color;`
**Example:**
```css
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
/* 2px right, 2px down, 4px blur, 50% black */

text-shadow: 0 0 10px rgba(100, 181, 246, 0.5);
/* Glow effect */

text-shadow: 3px 3px 0px black;
/* Hard shadow effect */
```

**Use Case:** Make text stand out, add emphasis, glow effects

---

## Position & Transform Properties

### `position`
**Purpose:** Controls how element is positioned
**Syntax:** `position: value;`
**Example:**
```css
position: static;       /* Default, normal flow */
position: relative;     /* Relative to normal position */
position: absolute;     /* Relative to nearest positioned parent */
position: fixed;        /* Relative to viewport (stays in place) */
position: sticky;       /* Mix of relative and fixed */
```

**With position, use:**
- `top`, `right`, `bottom`, `left`: Distance from edge
- `z-index`: Layer ordering (higher = on top)

**Use Case:** Create overlays, sticky headers, custom layouts

---

### `transform`
**Purpose:** Moves, scales, rotates, or skews elements
**Syntax:** `transform: function(value);`
**Example:**
```css
transform: translateX(20px);        /* Move 20px right */
transform: translateY(-10px);       /* Move 10px up */
transform: translate(20px, 10px);   /* Move right and down */
transform: scale(1.5);              /* Make 1.5x larger */
transform: scaleX(0.5);             /* Half width */
transform: rotate(45deg);           /* Rotate 45 degrees */
transform: skew(10deg);             /* Skew horizontally */
```

**Common Functions:**
- `translate()`: Move element
- `scale()`: Resize element
- `rotate()`: Rotate element
- `skew()`: Distort element
- `matrix()`: Combined transformation

**Use Case:** Animations, hover effects, 3D effects

---

### `z-index`
**Purpose:** Controls stacking order (which element is on top)
**Syntax:** `z-index: number;`
**Example:**
```css
z-index: 1;      /* Lower layer */
z-index: 100;    /* Higher layer */
z-index: 1000;   /* Very top */
z-index: -1;     /* Behind other elements */
```

**Note:** Higher numbers appear on top. Only works with positioned elements (position: absolute, relative, fixed, sticky)

**Use Case:** Layering modals, overlays, dropdown menus

---

## Animation & Transition Properties

### `transition`
**Purpose:** Smoothly animates property changes
**Syntax:** `transition: property duration timing-function delay;`
**Example:**
```css
transition: all 0.3s ease;
/* All properties change smoothly over 0.3s with ease timing */

transition: color 0.5s linear, background 0.3s ease-in;
/* Different animations for different properties */
```

**Parameters:**
- Property: which CSS property to animate (or `all`)
- Duration: how long (seconds or milliseconds)
- Timing function: how animation progresses
- Delay: wait before starting

**Timing Functions:**
- `linear`: Constant speed
- `ease`: Slow start and end
- `ease-in`: Slow start
- `ease-out`: Slow end
- `ease-in-out`: Slow start and end
- `cubic-bezier()`: Custom timing

**Use Case:** Smooth hover effects, color changes, movement

---

### `@keyframes`
**Purpose:** Defines animation sequence
**Syntax:**
```css
@keyframes animation-name {
    0% { /* Start state */ }
    50% { /* Middle state */ }
    100% { /* End state */ }
}
```

**Example:**
```css
@keyframes slide-in {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.element {
    animation: slide-in 1s ease-in;
}
```

**Use Case:** Complex animations, loading spinners, transitions

---

### `animation`
**Purpose:** Applies keyframe animation to element
**Syntax:** `animation: name duration timing-function delay iteration-count direction;`
**Example:**
```css
animation: spin 2s linear infinite;
/* Spin animation, 2 seconds, linear, repeat forever */

animation: bounce 1s ease-in-out 0s 3;
/* Bounce animation, 1 second, ease-in-out, start immediately, play 3 times */
```

**Use Case:** Repeating animations, complex movements

---

## Visual Effects Properties

### `opacity`
**Purpose:** Controls transparency (0 = invisible, 1 = fully visible)
**Syntax:** `opacity: value;`
**Example:**
```css
opacity: 1;     /* Fully visible (default) */
opacity: 0.5;   /* 50% transparent */
opacity: 0;     /* Invisible but takes up space */
```

**Use Case:** Create fading effects, hover states, overlays

---

### `filter`
**Purpose:** Applies visual effects to elements
**Syntax:** `filter: function(value);`
**Example:**
```css
filter: blur(5px);           /* Blur effect */
filter: brightness(1.5);     /* Make brighter */
filter: contrast(1.2);       /* Increase contrast */
filter: grayscale(100%);     /* Black and white */
filter: hue-rotate(90deg);   /* Change colors */
filter: invert(100%);        /* Invert colors */
filter: saturate(2);         /* Increase color saturation */
filter: sepia(100%);         /* Old photo effect */
filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5)); /* Drop shadow */
```

**Use Case:** Image effects, hover states, visual filters

---

### `overflow`
**Purpose:** Controls what happens when content exceeds element size
**Syntax:** `overflow: value;`
**Example:**
```css
overflow: visible;   /* Content overflows (default) */
overflow: hidden;    /* Hide overflowing content */
overflow: scroll;    /* Always show scrollbar */
overflow: auto;      /* Show scrollbar if needed */
overflow-x: auto;    /* Horizontal scrollbar only */
overflow-y: scroll;  /* Vertical scrollbar only */
```

**Use Case:** Contain text, create scrollable boxes, hide excess content

---

### `cursor`
**Purpose:** Changes mouse cursor appearance
**Syntax:** `cursor: value;`
**Example:**
```css
cursor: pointer;     /* Hand cursor (clickable) */
cursor: text;        /* Text selection cursor */
cursor: wait;        /* Loading cursor */
cursor: move;        /* Move cursor */
cursor: help;        /* Help cursor */
cursor: not-allowed; /* Not allowed cursor */
cursor: zoom-in;     /* Zoom in cursor */
```

**Use Case:** Indicate interactive elements, improve UX

---

### `transition` with `:hover`
**Purpose:** Common pattern for hover effects
**Example:**
```css
button {
    background-color: blue;
    color: white;
    transition: all 0.3s ease;
}

button:hover {
    background-color: darkblue;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
```

**Use Case:** Interactive buttons, interactive navigation

---

## Quick Reference Table

| Property | Purpose | Example |
|----------|---------|---------|
| `color` | Text color | `color: red;` |
| `font-size` | Text size | `font-size: 16px;` |
| `margin` | Space outside | `margin: 10px;` |
| `padding` | Space inside | `padding: 10px;` |
| `background-color` | Background color | `background-color: white;` |
| `border` | Element border | `border: 2px solid black;` |
| `display` | Layout type | `display: flex;` |
| `width` | Element width | `width: 100%;` |
| `height` | Element height | `height: 200px;` |
| `position` | Positioning method | `position: absolute;` |
| `z-index` | Stacking order | `z-index: 100;` |
| `transform` | Transform element | `transform: rotate(45deg);` |
| `transition` | Smooth animation | `transition: all 0.3s;` |
| `box-shadow` | Shadow effect | `box-shadow: 0 4px 8px rgba(0,0,0,0.2);` |
| `opacity` | Transparency | `opacity: 0.5;` |

---

## Tips for Using CSS Properties

1. **Mobile First**: Start with mobile styles, then add `@media` queries for larger screens
2. **Inheritance**: Some properties inherit from parent (color, font-size), others don't (margin, padding)
3. **Specificity**: ID selectors > Class selectors > Element selectors
4. **Performance**: Use `transform` and `opacity` for animations (hardware accelerated)
5. **Accessibility**: Don't remove outlines, use sufficient color contrast

---

This guide covers the most important CSS properties used in modern web design. Practice using them in combinations to create beautiful, responsive websites!
