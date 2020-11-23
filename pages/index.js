import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/index.module.css";
import Wave from "../public/wave.svg";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.mainCard} style={{ borderRadius: "10px" }}>
          <div className={styles.cardContent}>
            <div className={styles.mainHeader}>
              <div className={styles.firstName}>Sujay</div>
              <div className={styles.lastName}>Krishna</div>
            </div>
            <div className={styles.intro}>
              Food writer and blogger, video game afficianado and proud owner of
              my dog <i>Cookie</i> .
            </div>
            <div className={styles.links}>
              <Link href="/blog/home">
                <a>
                  Me flexing my finger muscles
                  <div className={styles.underline}></div>
                </a>
              </Link>
              <Link href="#">
                <a>
                  Get in touch
                  <div className={styles.underline}></div>
                </a>
              </Link>
              <Link href="#">
                <a>
                  Cute pictures of my dog
                  <div className={styles.underline}></div>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.cardImage}>
            <img src="/images/profile.jpg" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

{
  /* <div className={styles.content}>
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
			</div> */
}
