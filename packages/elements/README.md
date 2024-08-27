# @websqnl/elements

## All elements in an instantiable way

Examples

### `Anchor` element

```ts
const link = new Anchor({text: 'Home', href: '/'})
```

### `Button` element

```ts
const button = new Button({
  type: 'button',
  onclick(e) {
    console.log(e)
  },
})
```

### `Select`, `Label` and `Section` elements

```ts
const state = new Select({name: 'state', id: 'userState'})

const label = new Label({text: 'State', htmlFor: 'userState'})

const section = new Section()

section.append(label, state)
```

## Available elements

| Element | Tag | Class |
| --- | --- | --- |
| address | `<address>` | `Address` |
| anchor | `<a>` | `Anchor` |
| article | `<article>` | `Article` |
| aside | `<aside>` | `Aside` |
| break | `<br>` | `Break` |
| button | `<button>` | `Button` |
| canvas | `<canvas>` | `Canvas` |
| cite | `<cite>` | `Cite` |
| code | `<code>` | `Code` |
| data-list | `<datalist>` | `DataList` |
| description | `<dl>`, `<dt>`, `<dd>` | `DescriptionList`, `DescriptionTerm`, `DescriptionDefinition` |
| details | `<details>`, `<summary>` | `Details`, `Summary` |
| div | `<div>` | `Div` |
| emphasis | `<em>` | `Emphasis` |
| field-set | `<fieldset>` | `FieldSet` |
| figure | `<figure>`, `figcaption` | `Figure`, `FigCaption` |
| footer | `<footer>` | `Footer` |
| form | `<form>` | `Form` |
| header | `<header>` | `Header` |
| heading | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` | `H1`, `H2`, `H3`, `H4`, `H5`, `H6` |
| horizontal-rule | `<hr>` | `HorizontalRule` |
| input | `<input>` | `Input` |
| keyboard | `<kbd>` | `Keyboard` |
| label | `<label>` | `Label` |
| list | `<ul>`, `<ol>`, `<li>` | `UnorderedList`, `OrderedList`, `ListItem` |
| main | `<main>` | `Main` |
| mark | `<mark>` | `Mark` |
| media | `<video>`, `<track>` | `Video`, `Track` |
| menu | `<menu>` | `Menu` |
| nav | `<nav>` | `Nav` |
| object | `<object>` | `Object` |
| paragraph | `<p>` | `Paragraph` |
| picture | `<picture>` | `Picture` |
| preformatted | `<pre>` | `Preformatted` |
| progress | `<progress>` | `progress` |
| quote | `<blockquote>` | `Quote` |
| section | `<section>` | `Section` |
| select | `<select>` | `Select` |
| slot | `<slot>` | `Slot` |
| small | `<small>` | `Small` |
| span | `<span>` | `Span` |
| strong | `<strong>` | `Strong` |
| table | `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` | `Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableCell` |
| template | `<template>` | `Template` |
| textarea | `<textarea>` | `Textarea` |
| time | `<time>` | `Time` |
