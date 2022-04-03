import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"






export default function Home() {
  const { data: session, status } = useSession()


  if (session) {
    return (
      <>
        <Head>
          <title>Home • My Spotify Stats</title>
        </Head>

        <div className='flex flex-col items-center text-white mt-80 h-1/2 '>
          <p className='py-2 text-4xl text-spotify'>Welcome to Statify!</p>
          <p className='pb-5 font-mono text-4xl text-center'>{session.token.name}</p>
          <p>{session.token.email}</p>
          <img src={session.token.img}></img>
          <p>{session.token.accessToken}</p>
        </div>

      </>
    )
  }
  return (
    <>
      <Head>
        <title>Home • My Spotify Stats</title>
      </Head>

      <div className='flex flex-col items-center text-white mt-80 h-1/2 '>
        <p className='py-2 text-4xl text-spotify'>Statify</p>
        <p className='pb-5 font-mono text-center'>A website to check your Top Tracks and Top Artists on <a className="underline text-spotify" href="https://spotify.com">Spotify</a>.</p>

        <Link href={`/api/auth/signin`}>
          <a className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110">Try Out</a>
        </Link>
      </div>

    </>
  )
}
