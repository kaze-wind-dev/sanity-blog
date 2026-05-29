import styles from "./page.module.scss";
import {getPosts} from "@/sanity/client"
import {formatDate} from "@/utils/formatDate"
import Link from 'next/link'
const posts = await getPosts();

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main} id="main">
        <h1>Sanityでブログを作る</h1>
        <ul>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
            posts.map((post:any)=>{
              const date = formatDate(post.publishedAt);
              return(
                <li className="" key={post._id}>
                  <Link href={`/blog/${post.slug.current}`}>
                    <p>{post.title}</p>
                    <time dateTime={date}>{date}</time>
                  </Link>
                </li>
              )
            })
        }
        </ul>
      </main>
    </div>
  );
}
