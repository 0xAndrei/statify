import Head from 'next/head'
import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react';
import Image from 'next/image'




export default function playlists({ items }) {
    const { data: session, status } = useSession()
    const [list, setList] = useState([]);
    const getLongArtist = async () => {
        const res = await fetch('/api/top-artists-long');
        console.log(res)
        const { items } = await res.json();
        setList(items);
    };
    const getMidArtist = async () => {
        const res = await fetch('/api/top-artists-mid');
        console.log(res)
        const { items } = await res.json();
        setList(items);
    };
    const getShortArtist = async () => {
        const res = await fetch('/api/top-artists-short');
        console.log(res)
        const { items } = await res.json();
        setList(items);
    };

    useEffect(() => {
        getLongArtist()
    }, [])
    if (session) {

        return (
            <>

                <div className='flex flex-col items-center mt-16 text-white h-1/2 '>

                    <div className='mb-16 text-center '>
                        <p className='py-2 mb-6 text-4xl '>{session.token.name}'s Top Artists</p>
                        <div className='flex flex-row items-center mb-8'>
                            <button className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110" onClick={() => getLongArtist()}>Get alltime artists</button>
                            <button className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110" onClick={() => getMidArtist()}>Get last 6 month artists</button>
                            <button className="py-2 mx-4 transition ease-in-out rounded-md shadow-md bg-spotify-sec px-9 hover:scale-110" onClick={() => getShortArtist()}>Get last 4 week artists</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid md:grid-cols-3 md:gap-6 ">
                            {list.map((item, i) => (

                                <div className="px-6 pt-6 pb-6 mb-6 transition ease-in-out bg-opacity-50 rounded shadow-md bg-sec hover:scale-110 hover:text-spotify" key={item.id}>
                                
                                    <a className="flex justify-center" href={item.uri}>

                                        <img className='object-contain h-48 rounded-md md:w-4/5' src={item.images[0]?.url} ></img>
                                    </a>
                                    <h1 className='mb-3 text-2xl text-center '>{item.name}</h1>
                                    <h1 className='px-2 mb-3 font-mono text-center text-gray-500'>#{++i}</h1>


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

