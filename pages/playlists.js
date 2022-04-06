import Head from 'next/head'
import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react';
import Image from 'next/image'


export default function playlists({ items }) {
    const { data: session, status } = useSession()
    const [list, setList] = useState([]);
    const getMyPlaylists = async () => {
        const res = await fetch('/api/playlists');
        console.log(res)
        const { items } = await res.json();
        setList(items);
    };

    useEffect(() => {
        getMyPlaylists()
    }, [])
    if (session) {

        return (
            <>

                <div className='flex flex-col items-center mt-16 text-white h-1/2 '>

                    <div className='mb-16 text-center '>
                        <p className='py-2 mb-6 text-4xl '>{session.token.name}'s Playlists</p>
                        <div className="grid grid-cols-1 md:grid md:grid-cols-3 md:gap-6 ">
                           
                            {list.map((item) => (
                                <div className="px-6 pt-4 pb-6 mb-6 transition ease-in-out bg-opacity-50 rounded shadow-md bg-sec hover:scale-110 hover:text-spotify" key={item.id}>

                                    <a className="flex justify-center" href={item.uri}>

                                        <img className='object-cover w-2/3 h-48 md:w-4/5 ' src={item.images[0]?.url} ></img>
                                    </a>
                                    <h1 className='mb-3 text-2xl text-center '>{item.name}</h1>
                                    <h1 className='px-2 mb-3 font-mono text-center text-gray-500'>{item.description}</h1>

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

