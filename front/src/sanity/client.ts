
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from './environment';

if (!projectId || !dataset) {
  throw new Error('Missing environment variables');
}

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});
