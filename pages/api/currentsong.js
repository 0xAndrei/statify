import { getCurrentTrack } from '../../lib/spotify';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req });

  console.log("-------------------")
  const { timestamp, item } = await getCurrentTrack(accessToken)
  const album = item

  const { artists } = album
  console.log("-------------------")

  const { name } = artists
  console.log(name)
  
  return res.status(200).json({ hi: "hi" });
};

export default handler;