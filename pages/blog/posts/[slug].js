import Layout from "../../../components/layout";
import Image from "next/image";
import { getAllSlugs, getPostData } from "../../../lib/data";
import styles from "../../../styles/blogStyles.module.css";

export default function Blog({ postData }) {
	return (
		<Layout>
			<div className={styles.blogWrapper}>
				<div className={styles.headerContent}>
					<div className={styles.headerImage}>
						<img src={postData.image} alt='header image' />
					</div>
					<div className={styles.blogHeader}>{postData.title}</div>
				</div>
				<div className={styles.nameAndDate}>
					<div className={styles.secondaryDetails}>
						<Image
							className={styles.profileImage}
							src='/images/profile.jpg'
							height='75'
							width='75'
							alt='profile'
						/>
						<div className={styles.name}>N Sujay Krishna</div>
					</div>
					<div className={styles.date}>November 14, 2020</div>
				</div>
				<div className={styles.blogText}>{postData.content}</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = getPostData(params.slug);
	return {
		props: {
			postData,
		},
	};
}
