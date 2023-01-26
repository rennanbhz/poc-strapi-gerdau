import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <header style={{border: '1px solid bloack'}}>
      <h1>POC - MAIS GERDAU</h1>
    </header>
    <Component {...pageProps} />
  </div>;
}
