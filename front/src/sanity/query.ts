import { defineQuery } from 'next-sanity'

export const postQuery: string = defineQuery(`*[_type == 'post'] | order(publishedAt) {
  _id, title, publishedAt, slug
}`);

export const detailQuery:string = defineQuery(`*[_type == 'post' && slug.current == $slug][0]{
  ...,
  category->{ name, slug },
  image { asset->{ _id } }
}`);
