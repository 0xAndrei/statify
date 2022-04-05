import Head from 'next/head'
import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react';




export default function playlists({ playlists }) {
    const { data: session, status } = useSession()
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    if (session) {

        if (isLoading) return <p>Loading...</p>
        if (!data) return <p>No profile data</p>
        useEffect(() => {
            setLoading(true)
            fetch('api/playlists')
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                    console.log(data)
                    setLoading(false)
                })
        }, [])
        return (
            <>
                <div>
                    <h1>{data.id}</h1>
                   
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


