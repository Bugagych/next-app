import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>About - my nextjs app</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>New page!</h1>
			</main>

			<footer className={styles.footer}>
				<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
			</footer>
		</div>
	)
}

export default Home
