import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaBeer } from 'react-icons/fa';

function Button({ to, children }) {
    return <a href={to} className={`transition ease-in-out mx-4 bg-spotify-sec text- drop-shadow px-9 py-2 rounded-md  hover:scale-110`}>
        {children}
    </a>
}

export default function Home() {
    return (
        <>
            <Head>
                <title>About • My Spotify Stats</title>
            </Head>

            <div className='flex flex-col items-center text-white mt-80 h-1/2 '>
             
                
            </div>
        </>
    )
}
