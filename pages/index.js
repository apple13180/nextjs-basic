import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
          <title> หน้าแรก | Bird Bunchana</title>
          <meta name="keyword" content="birdbunchana,ร้านค้า,ขายเสื้อผ้า"/>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไซด์</h1>
        <Image src='/shopping.svg' width={400} height={300} alt='logo'/>
        <p>ยินดีต้อนรับสู้ร้านเด็กชายเบิร์ด</p>
        <Link href='/products' className={styles.btn}>ดูสินค้าทั้งหมด</Link>
      </div>
    </>
  )
} 
