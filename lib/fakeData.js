import faker from "faker";

const fakeData = (number) => {
	const data = [];
	for (let i = 0; i <= number; i++) {
		const instance = {
			id: i + 1,
			slug: `blog-${i}`,
			title: faker.lorem.sentence(20, true),
			content: faker.lorem.paragraphs(10, true),
			image: faker.image.imageUrl(),
		};
		// console.log(instance);
		data.push(instance);
	}
	return data;
};

export default fakeData;
