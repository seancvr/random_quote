
## Random Quote

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). This app uses Nodejs for the backend and pnpm for the package manager.

The purpose of this app was just to learn some Nextjs, React and typescript design patterns. I implemented a simple local API route in app/api/quote, which functions as a server-side data fetching proxy. I initially tried to create the app as a client component, but the fetch request was blocked by CORS in the browser. Using Next.js server actions allowed me to get around the CORS blocking, and gives the app a relatively simple design.

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




