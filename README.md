<!-- @format -->

# Hello Remix + Plasmic!

Check out:

- The mention in the accompanying [blog article](https://twitter.com/yaaang/status/1466857426578198534)
- [Live site running on Vercel](https://hello-remix-plasmic.vercel.app/)
- [Official Plasmic quickstart for Remix apps](https://docs.plasmic.app/learn/remix-quickstart/)

## How does it work?

The key is in this snippet of code in app/routes/index.tsx:

```tsx
export let loader: LoaderFunction = async () => {
  // Load the design from Plasmic. This happens server-side.
  const plasmicData = await PLASMIC.fetchComponentData("/");
  return json(plasmicData);
};

export default function Index() {
  // Render the Plasmic design.
  const plasmicData = useLoaderData();
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  );
}
```

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
