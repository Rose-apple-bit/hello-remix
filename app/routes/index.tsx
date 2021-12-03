/** @format */

import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import {
  PlasmicRootProvider,
  PlasmicComponent,
} from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";

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
