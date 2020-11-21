import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div className={styles.root}>
			<nav className={styles.navbar}>
				<div className={styles.logo}>Sujay Writes!</div>
				<div className={styles.rightNavs}>
					<div className={styles.about}>About</div>
					<div className={styles.contact}>Contact</div>

					<div className={styles.blog}>
						<Link href='/blog/home'>
							<a>Blog</a>
						</Link>
					</div>
				</div>
			</nav>
			<div>{children}</div>
		</div>
	);
}
