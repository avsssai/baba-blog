import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function BlogLanding() {
	return (
		<Layout>
			<Head>
				<title>Blog!</title>
			</Head>
			<h1>Blog Landing</h1>
			<Link href='/'>
				<a>Back to Home</a>
			</Link>
		</Layout>
	);
}
