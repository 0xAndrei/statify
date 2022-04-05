import { getTopArtists } from '../../lib/spotify';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
    const {
        token: { accessToken },
    } = await getSession({ req });

    console.log("-------------------")
    const { name } = await getTopArtists(accessToken)
    
    console.log(name)

    return res.status(200).json({
        hi: "hi"
    });
};

export default handler;