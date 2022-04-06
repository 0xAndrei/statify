import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

import { useState, useEffect } from 'react';
import { fetchData } from 'next-auth/client/_utils'



export default function profile( { xx } ) {
    const { data: session, status } = useSession()
    const [url, setUrl] = useState(null)
    const [artist, setArtist] = useState(null)
    const [title, setTitle] = useState(null)
    const [country, setCountry] = useState(null)
    const [displayName, setDisplayName] = useState(null)
    const [email, setEmail] = useState(null)
    const [follower, setFollower] = useState(null)
    const [sub, setSub] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/api/currentsong")
        .then(res => res.json())
        .then((data) => {
            setUrl(data.songUrl)
            setArtist(data.artist)
            setTitle(data.title)
        })
        fetch("http://localhost:3000/api/profile")
        .then(res => res.json())
        .then((data) => {
            setCountry(data.country)
            setDisplayName(data.display_name)
            setEmail(data.email)
            setFollower(data.followers)
            setSub(data.sub)
        })
        
    }, [])
    
    if (session) {
        return (
            <>
       
                <Head>
                    <title>{session.token.name}'s Profile • My Spotify Stats</title>
                </Head>

                <div className='flex flex-col items-center mt-16 text-white h-1/2 '>

                    <div className='mb-16 text-center '>
                        <p className='py-2 mb-6 text-4xl '>{session.token.name}'s Profile</p>
                        <div className="">
                            <div className='p-16 pt-1 pb-6 mb-6 bg-opacity-50 rounded shadow-md bg-sec'>
                                <div className='md:flex md:flex-row'>
                                    <img className='m-auto rounded-full md:p-6 md:mt-6 md:rounded-full ' src={session.token.picture} height="250" width="250"></img>
                                    <div className='flex flex-col justify-center p-6 '>
                                        <p className='font-mono text-gray-400'>Username</p>
                                        <p>{displayName}</p>
                                        <br />
                                        <p className='font-mono text-gray-400'>Email</p>
                                        <p>{email}</p>
                                        <br />
                                        <p className='font-mono text-gray-400'>Subscription</p>
                                        <p>{sub}</p>
                                    </div>

                                </div>
                                <div className='font-mono text-gray-400'>Listening to <a className="text-white" href={url}>{title}</a> by <span className='text-white'>{artist}</span></div>
                            </div>

                        </div>
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
                <div>User not authed</div>
            </div>

        </>
    )
}
