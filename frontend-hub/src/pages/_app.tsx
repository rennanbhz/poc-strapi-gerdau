import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SectionHeaderMenu from "@/components/SectionHeaderMenu/SectionHeaderMenu";

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <header style={{border: '1px solid bloack', paddingBottom: '96px'}}>
        <SectionHeaderMenu/>
    </header>
    <Component {...pageProps} />
  </div>;
}
