import { getCurrenTrack } from '../../lib/spotify2';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req });
  const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
  console.log(accessToken)
  const response = await fetch(PLAYLISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
  }
  });
  const { items } = await response.json();
  console.log(items)
  return res.status(200).json({ items });
};

export default handler;