import { useState } from 'react'



export default function Navbar() {

    return (
        <footer className="fixed inset-x-0 bottom-0 text-white bg-main drop-shadow-xl">
            <div className="flex flex-row items-center p-4 pb-6 text-center justify-evenly">
                <p>©<span className="text-spotify">Statify</span> 2022</p>
                <p>Not related and partnered to <span  className="text-spotify">Spotify</span> AB</p>
                <a href="/imprint">Imprint</a>
            </div>
        </footer>
    )
}
