import styles from "./layout.module.css";

export default function Layout({ children }) {
	return (
		<div className={styles.root}>
			<nav className={styles.navbar}>
				<div className={styles.logo}>Sujay Writes!</div>
				<div className={styles.rightNavs}>
					<div className={styles.about}>About</div>
					<div className={styles.contact}>Contact</div>
					<div className={styles.blog}>Blog</div>
				</div>
			</nav>
			<div>{children}</div>
		</div>
	);
}
