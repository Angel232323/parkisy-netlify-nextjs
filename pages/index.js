import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Parkisy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="¡Algo increíble está en camino!" />
        <p className="description">
        Estamos desarrollando una plataforma revolucionaria que cambiará la forma en que interactúas con tu entorno urbano.
        </p>
      </main>

      <Footer />
    </div>
  )
}
