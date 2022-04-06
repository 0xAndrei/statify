import Head from 'next/head'
import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react';
import Image from 'next/image'




export default function playlists({ items }) {
    const { data: session, status } = useSession()
    const [list, setList] = useState([]);
    const getLongTracks = async () => {
        const res = await fetch('/api/top-tracks-long');
        console.log(res)
        const { items } = await res.json();
        setList(items);
    };
    const getMidTracks = async () => {
        const res = await fetch('/api/top-tracks-mid');
        console.log(res)
        const { items } = await res.json();
        setList(items);
    };
    const getShortTracks = async () => {
        const res = await fetch('/api/top-tracks-short');
        console.log(res)
        const { items } = await res.json();
        setList(items);
    };

    useEffect(() => {
        getLongTracks()
    }, [])
    if (session) {

        return (
            <>

                <div className='flex flex-col items-center mt-16 text-white h-1/2 '>

                    <div className='mb-16 '>
                        <p className='py-2 mb-6 text-4xl text-center'>{session.token.name}'s Top Tracks</p>
                        <div className='flex flex-row items-center mb-8'>
                            <button className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110" onClick={() => getLongTracks()}>Get alltime artists</button>
                            <button className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110" onClick={() => getMidTracks()}>Get last 6 month artists</button>
                            <button className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110" onClick={() => getShortTracks()}>Get last 4 week artists</button>
                        </div>
                        <div className="">
                            {list.map((item, i) => (
                                <div className='mb-6'>
                                    <ul class="transition ease-in-out p-3 bg-opacity-50 rounded shadow-md bg-sec hover:scale-105">

                                        <a href={item.album.uri}> <li className=''><span className='font-mono text-gray-400'>#{++i}</span> {item.album.name} <span className='float-right text-gray-400'>{item.album.artists[0].name}</span></li></a>
                                    
                                    </ul>
                                </div>
                            ))}

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

