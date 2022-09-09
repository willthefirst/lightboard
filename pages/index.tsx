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
        <Lightboard width={640} height={400} rows={4} cols={2} />
      </main>
        
    </div>
  )
}

export default Home
