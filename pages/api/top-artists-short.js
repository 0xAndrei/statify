import { getTopArtistsShort, getTopTracksShort } from '../../lib/spotify';
import {getSession} from 'next-auth/react';

const handler = async (req, res) => {
  const {
    token: {accessToken},
  } = await getSession({req});
  const response = await getTopArtistsShort(accessToken);
  console.log(response)

  return res.status(200).json(response);
};

export default handler;

