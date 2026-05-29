
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from './environment';

import { postQuery, detailQuery } from '@/sanity/query';

if (!projectId || !dataset) {
  throw new Error('Missing environment variables');
}

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});

export async function getPosts() {
  return await client.fetch(postQuery);
}

export async function getDetail(slug:string) {
  return await client.fetch(detailQuery, {slug});
}
