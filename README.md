# nextjs-embed-demo

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It displays [feedback typeform](https://form.typeform.com/to/crNvgGG2) using [@typeform/embed](https://github.com/Typeform/embed/tree/main/packages/embed-react) library.

## Read about this project on Medium

[Integrate Typeform with Next.js](https://mathio28.medium.com/integrate-typeform-with-next-js-b27a5306bfbb)

## See deployed app on CodeSandbox

[CodeSandbox demo](https://codesandbox.io/s/nextjs-embed-demo-d4n4o)

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Typeform implementation

You can find a `<Popover />` component in `pages/index.js`

There is an [API routes](https://nextjs.org/docs/api-routes/introduction) to retrieve typeform response in `pages/api/response.js`. It can be accessed on [http://localhost:3000/api/response](http://localhost:3000/api/response).

## Learn More

For Typeform Embed SDK and APIs see:

- [Typeform React Embed Library README file](https://github.com/Typeform/embed/tree/main/packages/embed-react)
- [Typeform Vanilla Embed Library README file](https://github.com/Typeform/embed/tree/main/packages/embed)
- [Typeform Responses API docs on developer portal](https://developer.typeform.com/responses/)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
