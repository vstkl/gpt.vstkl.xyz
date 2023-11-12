// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Linux Expert Landing Page</title>
        <meta name="description" content="Welcome to the Linux Expert Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <p className="description">Click the link below access LINUX_GURU:</p>
        <a href="https://chat.openai.com/g/g-mpNdRvlgN-linux-guru" className="link">
          Continue to openAI 
        </a>
        <div>
          <a className='gh-pre'>by:</a>
          <a href="https://github.com/vstkl" className='github'>
          vstkl
          </a>
</div>
      </main>
    </div>
  )
}
