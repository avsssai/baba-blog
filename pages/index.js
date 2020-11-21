import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/index.module.css";
import Wave from "../public/wave.svg";

export default function Home() {
	return (
		<Layout>
			<div className={styles.content}>
				<div className={styles.nameImage}>
					<div className={styles.name}>
						<div className={styles.firstName}>Sujay</div>
						<div className={styles.lastName}>Krishna</div>
						<div className={styles.subtags}>
							<div className={styles.writer}>Writer</div>
							<div>Gamer</div>
							<div>Activist</div>
						</div>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src='/profile.jpg'
							alt='profile'
							height='300'
							width='300'
							className={styles.image}
						/>
					</div>
				</div>
				<div className={styles.intro}>
					There are a lot of things I enjoy like
					<span className={styles.specialText}>
						{" "}
						a good video game
					</span>{" "}
					or{" "}
					<span className={styles.specialText}>
						a hot plate of food
					</span>{" "}
					but most importantly I enjoy{" "}
					<span className={styles.specialWrittenText}>
						writing by hand.
					</span>
				</div>
			</div>
			<div className='wave'>
				<Wave />
			</div>
		</Layout>
	);
}
