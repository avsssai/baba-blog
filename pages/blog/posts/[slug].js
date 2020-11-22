import Layout from "../../../components/layout";
import { getAllSlugs, getPostData } from "../../../lib/data";

export default function Blog({ postData }) {
	return (
		<Layout>
			<h1>{postData.title}</h1>
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
