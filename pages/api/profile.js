import { getProfile } from '../../lib/spotify';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req });


  const song = await getProfile(accessToken)
  const country = song.country
  const display_name = song.display_name
  const email = song.email
  const followers = song.followers.total
  const image = song.images.url
  const sub = song.product

  return res.status(200).json({
    country,
    display_name,
    email,
    followers,
    image,
    sub,
  });
};

export default handler;