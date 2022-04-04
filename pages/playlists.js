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

                <div className='flex flex-col items-center mt-64 text-white h-1/2 '>
                    <div>User authed</div>
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
            <div>User not authed</div>
            </div>

        </>
    )
}
