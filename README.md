# Dev setup

- Create a new repo from the [template](https://github.com/gerardo-m/astro_knowledge_base) selecting the "Use this template" option.
- Once on your new repo, run `npm install`
- Run `npm run build` for pagefind to index the site (This is necessary to test the Search feature)
- Run `npm run dev` to start the astro dev server, now you should be able to visit `localhost:4321` and see the index page


<img src="https://i.ibb.co/f1b8BSf/astro-kb-index.png" width="700">


# Usage

For the complete documentation you can visit the demo page, that also works as documentation.

## Main menu

When you create new pages in the `/src/pages/` directory they are automatically added to the main menu.

The code for this logic is in `/src/components/Navigation.astro`

## Articles

The content must be added to the `/src/content/articles/` directory. In that directory you can find 
a couple of sample articles. One with an image and one without and image

Then again, all articles you put in the articles directory are going to be automatically loaded.

### Data

The data that is mandatory for every article is:
- title
- pubDate
- description
- author
- categories

And the following data is optional:
- updateDate
- image

### Content

The template also have a Content table for the article, based on the headings of the markdown file

The code for this feature is in `/src/components/ContentTable.astro`

## Theme

This template uses Tailwindcss, and is build so you can easily change your color palette without 
touching (too much of) the code.

Take a look at `tailwind.config.mjs` under theme/extend you will find colors. To replace the color
palette just use a palette generator to get all the shadows for your preferred color, I personally 
use this [site](https://uicolors.app/create).

Once generated, replace just the number portion and the 'light' and 'dark' values with any value
in the palette, for example, if I want to replace the primary color
to a green one:

Original:
```mjs
'primary': {
    '50': '#eff9ff',
    '100': '#daf0ff',
    '200': '#bee6ff',
    '300': '#91d7ff',
    '400': '#5ebffc',
    '500': '#38a1f9',
    '600': '#2284ee',
    '700': '#1a6ddb',
    '800': '#1c58b1',
    '900': '#1b4885',
    '950': '#162e55',
    'light': '#1a6ddb',
    'dark': '#91d7ff',
}
```

New palette:
```mjs
'primary': {
    '50': '#e7ffe0',
    '100': '#c8ffbb',
    '200': '#95ff80',
    '300': '#50ff37',
    '400': '#16ff00',
    '500': '#00ff0b',
    '600': '#00d313',
    '700': '#009f0f',
    '800': '#007b09',
    '900': '#005706',
    '950': '#003b0a',
    'light': '#009f0f',
    'dark': '#50ff37',
}
```

# Deploy

This is a template for a static site, so unless you add some functionality that uses SSR
or a frontend framework, all you need to do is run `npm run build` and copy the content of
the `/dist/` directory on your web host.

If you find any problem, errors, inconsistencies or you have a suggestion for this template
please open an issue.

Don't forget to star the repo if you like it.