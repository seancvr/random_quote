
## Random Quote

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). This app uses Nodejs for the backend and pnpm for the package manager.

The purpose of this app was just to learn and illustrate some idiomatic Nextjs, React and typescript design patterns.

This was an interesting exercise as I initally tried to build everything as a client component, which caused the app to fail because making fetch calls from the browser were getting block by CORS. Turns out Next.js CORS SSR/client integration challenges are common and Next.js had a handy solution to this called Server Actions. This involves creating a local API route in app/api/quote, which functions as server-side quote fetching proxy. This gives the app a simple clean design that overcomes CORS blocking. 

UI <-> Server API proxy <-> External API

### To run the app

Clone the git repo:
```
git clone repo
```
Install the dependcies with pnpm:

```
pnpm i
```
Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the page. 

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.




