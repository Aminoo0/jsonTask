This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

## First you must run the json server by run this line in bash :
## json-server --watch --port 8000 db.json

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## about project and what i used to build it
# Please run json server first

I used next js for SEO using meta data 
And also because it is server side render(ssr) 

Secondly, I used JSON Server to simulate all restfull api like PUT and PUST and DELETE and GET to create and edit and delete the posts then display it

I used Context to handle the states between components

I faced difficulties in how to deal with Form in the beginning because the information is stored on the client side, which exposes it to danger
So I tried to search for how to deal with data taken from the Form on the server, and I found that the best way is to use Server actions available in next js with useActionState available from React.
So it became easy

it takes between 7-8 hours to complete

/////////////////////


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
