
import styles from "./page.module.scss";
import { SanityImage } from "sanity-image";
import { projectId, dataset } from "@/sanity/environment";
import { getDetail } from '@/sanity/client';
import {formatDate} from "@/utils/formatDate"
import { PortableText, PortableTextComponents } from "@portabletext/react"

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <SanityImage
        id={value.asset._ref}
        baseUrl={`https://cdn.sanity.io/images/${projectId}/${dataset}/`}
        alt={value.alt ?? ""}
      />
    ),
  },
  block: {
    normal: ({ children }) => <p className="text">{children}</p>,
    h1: ({ children }) => <h1 className="heading1">{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
  },
}



type Params = {
  params: Promise<{ slug: string }>
}

export default async function BlogDetail({params} : Params) {
  const { slug 
  } = await params;
  
  const post = await getDetail(slug);
  const date = formatDate(post.publishedAt);
    return (
      <div className={styles.page}>
        <main className={styles.main} id="main">
          <h1>{post.title}</h1>
          {post.image && (
            <SanityImage
              id={post.image.asset._id}
              baseUrl={`https://cdn.sanity.io/images/${projectId}/${dataset}/`}
              alt={post.title}
            />
          )}
          <time dateTime={date}>{date}</time>
          <p>{post.category?.name}</p>
          {post.body && <PortableText value={post.body} components={components} />}
        </main>
      </div>      
    );
  }
  