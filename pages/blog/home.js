import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { createdData } from "../../lib/data";
import Layout from "../../components/layout";
import styles from "../../styles/blogLandingStyles.module.css";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1,
};

export default function BlogLanding({ createdData }) {
  // console.log(createdData);
  return (
    <Layout>
      <Head>
        <title>Blog!</title>
      </Head>
      <div className={styles.blogLanding}>
        <div className={styles.details}></div>
      </div>
      <div className={styles.blogList}></div>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { createdData },
  };
}

{
  /* <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.myMasonryGrid}
          columnClassName={styles.myMasonryGridColumn}
        >
          {createdData.map((item) => {
            return (
              <div className={styles.blogPost}>
                <div className={styles.image}>
                  <img src={item.image} />
                </div>
                <div className={styles.text}>
                  <Link
                    href={`/blog/posts/${item.slug}`}
                    className={styles.blogLink}
                  >
                    <a>{item.title} </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </Masonry> */
}
