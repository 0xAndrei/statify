import { getFollowing } from '../../lib/spotify';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req });


  const song = await getFollowing(accessToken)
  console.log(song)
  const total = song.items
  

  return res.status(200).json({
    total
  });
};

export default handler;