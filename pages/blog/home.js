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
				<div className={styles.contentWrapper}>
					<div className={styles.details}></div>
					<div className={styles.blogList}>
						{createdData.map((item) => {
							return (
								<div className={styles.blog}>
									<div className={styles.blogImage}>
										<img
											src={item.image}
											alt='blog image'
										/>
									</div>

									<div className={styles.title}>
										{item.title}
									</div>
									<div className={styles.subText}>
										Read More
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
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
