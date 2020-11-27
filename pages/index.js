import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/index.module.css";
import Wave from "../public/wave.svg";

export default function Home() {
	return (
		<Layout>
			<div className={styles.main}>
				<div className={styles.leftSlab}>
					<div className={styles.name}>
						<div className={styles.first}>SUJAY</div>
						<div className={styles.second}>KRISHNA</div>
					</div>
					<div className={styles.writer}>WRITER</div>
					<div className={styles.secondLine}>
						<div>
							<span className={styles.blog}>BLOGGER</span>&
						</div>
						<div>FREELANCER</div>
					</div>
					<div className={styles.thirdLine}>
						<div>VIDEO GAME AFFICIANADO</div>
					</div>
				</div>
				<div className={styles.rightSlab}>
					<div className={styles.image} id={styles.img1}></div>
					<div className={styles.image} id={styles.img2}></div>

					<div className={styles.image} id={styles.img3}></div>

					<div className={styles.image} id={styles.img4}></div>

					<div className={styles.image} id={styles.img5}></div>

					<div className={styles.image} id={styles.img6}></div>

					<div className={styles.image} id={styles.img7}></div>

					<div className={styles.image} id={styles.img8}></div>

					<div className={styles.image} id={styles.img9}></div>
				</div>
			</div>
		</Layout>
	);
}

{
	/* <div className={styles.container}>
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
      </div> */
}
