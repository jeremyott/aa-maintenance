import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@components/Footer.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>A Aliance - Coming Soon!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />
        <Header title="A whole new experience is in the works!" />
        <p className="description">
          There's an art to forming an office. See what we've helped our clients create!
        </p>
        <a href="http://www.daniarps.com/"><button>Our Portfolio</button></a>
      </main>

      <Footer />
    </div>
  )
}
