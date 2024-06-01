# Dev setup

- Clone the repo
- Run `npm install`
- Comment out the line in MainLayout.astro: `new PagefindUI({ element: "#search", showSubResults: true });`.
This needs to be reviewed and fixed
- Run `npm run build` to build the pagefind static search
- Now you can run `npm run dev` without errors

