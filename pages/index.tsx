import type { NextPage } from 'next'
import Head from 'next/head'
import Lightboard from '../components/Lightboard'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lightboard</title>
        <meta name="description" content="A lightboard by www.willthefirst.com" />
      </Head>

      <main className={styles.main}>
        <Lightboard width={300} height={400} />
      </main>
        
    </div>
  )
}

export default Home
