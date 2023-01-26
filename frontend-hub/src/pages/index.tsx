import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const HOST = 'http://localhost:1337';

export default function Home() {
  const [content, setContent] = useState<any>(null);
  const [itemsHeader, setItemsHeader] = useState<any>(null);

  useEffect(() => {
    fetch(`${HOST}/api/personas`)
      .then(response => response.json())
      .then(body => setContent(body));

    fetch(`${HOST}/api/item-header-menus`)
      .then(res => res.json())
      .then(body => setItemsHeader(body));
  }, []);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Header</h1>
        <pre>{
          JSON.stringify(itemsHeader, null, 4)
        }</pre>
        <h1>Personas</h1>
        <pre>{
          JSON.stringify(content, null, 4)
        }</pre>
      </main>
    </>
  )
}
