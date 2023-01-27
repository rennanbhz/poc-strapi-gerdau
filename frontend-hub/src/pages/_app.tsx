import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {AeonikFono} from "@/fonts/AeonicFono";



export default function App({Component, pageProps}: AppProps) {
    return <>
        <nav className={AeonikFono.className} style={{border: '1px solid bloack'}}>
            <h1>POC - MAIS GERDAU</h1>
        </nav>
        <main className={AeonikFono.className}>
            <Component {...pageProps} />
        </main>
    </>;
}
