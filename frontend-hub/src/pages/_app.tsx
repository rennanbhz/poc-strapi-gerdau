import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SectionHeaderMenu from "@/components/SectionHeaderMenu/SectionHeaderMenu";
import {AeonikFono} from "@/fonts/AeonicFono";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <nav className={AeonikFono.className} style={{border: '1px solid bloack', paddingBottom: '96px'}}>
        <SectionHeaderMenu/>
    </nav>
    <main className={AeonikFono.className}>
      <Component {...pageProps} />
    </main>
  </>;
}
