# README

## Folder Structure

```
src/
├── components/  # Reusable UI components
│   ├── Admin/   # Admin specific components (optional)
│   │   └── ...
│   ├── Donor/  # Donor specific components (optional)
│   │   └── ...
│   └── Layout/  # Layout components like Header, Footer
│       └── ...
│   └── ...  # Other reusable components
├── pages/  # Individual route components
│   ├── Admin/
│   │   └── ...
│   ├── Auth/
│   │   └── ...
│   ├── Organization/
│   │   └── ...
│   ├── Donor/
│   │   └── ...
│   └── ...  # Other page components
├── App.jsx  # Main application component
├── main.js  # Entry point for the application
└── utils/  # Utility functions (optional)
    └── routing.js  # Routing configuration file
```

## Manual for the `tailwind.config.js` file

### Font Size

These fonts are according to the Major Third scale. The Major Third scale is
used to create a harmonious font size scale. This does NOT mean that we will
use all of these font sizes in the application. We will only use the font sizes
that are necessary for the application.

- `sm` : we use this font size when we need to write super small text like in
  the footer of an image or in the footer of a card. This size should not be
  used for any other purpose. As a result it wont be used a lot in the
  application.

- `base` : This is the default font size that we use for most of the text in
  the application. This is the default font size that we use for most of the
  text in the application.

- `xl` : This is the font size that we use for the subheading of a card or for
  a header for a sub-section of a page etc. This font size should not be used a
  lot in the application.

- `2xl` : This is the font size that we use for the heading of a card or for a
  header for a section of a page etc. This font size will be used a lot in the
  the application.

- `3xl` : This is the font size that we use for the title of a page, that is
  it. This font size should not be used a lot in the application.

- `4xl` : This font size should not be used in the application.

- `5xl` : This font size should not be used in the application.

### Font Style

We went with a simple pallette of fonts. We have two fonts that we will use in
the application. Both of the fonts are from the Montserrat family, which is a
sans-serif font. We picked these fonts to be from the same family so that they
look good together.

- `heading` : This is the font that we use for the headings of the application.
  This font should be used for the headings of the cards, the headings of the
  sections of the page, the headings of the pages etc.

- `body` : This is the font that we use for the body of the application. This
  font should be used for the text in the cards, the text in the sections of
  the page, the text in the pages etc.

### Colors

We have a simple color palette. We have four colors that we will use in the
application. We have a text color, a background color, a primary color and a
secondary color. We also have an accent color that we will use for the buttons
in the application. We have a dark background color that we will use for the
background of the cards in the application. Here is a link of the colors that
we will use in the application in a demo application: [color-demo](https://www.realtimecolors.com/dashboard?colors=333333-f2f2f2-b45f65-a5d5d4-7b86c1&fonts=Montserrat-Montserrat)

- `text` : This is the color that we use for the text in the application. This
  color should be used for the text in the cards, the text in the sections of
  the page, the text in the pages etc.

- `background-main` : This is the color that we use for the actual background
  of the application. This color will only be used in the main div of the
  web page. No other div will have this color.

- `background-dark` : This is the color that we use for the background of the
  cards in the application. This color should be used for the background of the
  cards in the application. This color can be used for the background of a
  sub-section of a page (eg; the background of a sidebar).

- `primary` : This is the color that we use for the primary color of the
  application. This color should be used for the primary buttons in the
  application, the primary links in the application etc. This color should be
  used for 60% of the UI elements that NEED color.

- `secondary` : This is the color that we use for the secondary color of the
  application. This color should be used for the secondary buttons in the
  application, the secondary links in the application etc. This color should
  be used for 30% of the UI elements that NEED color.

- `accent` : This is the color that we use for the accent color of the
  application. This color should be used for the accent buttons in the
  application, the accent links in the application etc. This color should be
  used for 10% of the UI elements that NEED color.
