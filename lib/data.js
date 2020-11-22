import fakeData from "./fakeData";

export const createdData = fakeData(50);

export function getAllSlugs() {
	return createdData.map((post) => {
		return {
			params: {
				slug: post.slug,
			},
		};
	});
}

export function getPostData(slug) {
	const post = createdData.find((match) => match.slug === slug);
	return {
		...post,
	};
}
