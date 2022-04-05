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

        <div className='flex flex-col items-center mt-56 text-white h-1/2 '>
          <p className='py-2 mb-6 text-4xl text-spotify'><span className='text-white'>Welcome to</span> Statify <span className="text-white">{session.token.name}</span>!</p>
          
          <p className="mb-8 font-mono text-center">You can check your Playlists, Top Artists, Top Tracks by following the links</p>
          <div className="flex flex-row">
            <Link href={`/playlists`}>
              <a className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110">PLAYLISTS</a>
            </Link>
            <Link href={`/topartists`}>
              <a className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110">TOP ARTISTS</a>
            </Link>
            <Link href={`/toptracks`}>
              <a className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110">TOP TRACKS</a>
            </Link>
          </div>
        </div>

      </>
    )
  }
  return (
    <>
      <Head>
        <title>Home • My Spotify Stats</title>
      </Head>

      <div className='flex flex-col items-center mt-64 text-white h-1/2 '>
        <p className='py-2 text-4xl text-spotify'>Statify</p>
        <p className='pb-5 font-mono text-center'>A website to check your Top Tracks and Top Artists on <a className="underline text-spotify" href="https://spotify.com">Spotify</a>.</p>

        <Link href={`/api/auth/signin`}>
          <a className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110">Try Out</a>
        </Link>
      </div>

    </>
  )
}
