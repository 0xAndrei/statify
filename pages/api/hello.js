// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from "next-auth/react"
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event"
export default async function handler(req, res) {

  const session = await getSession({ req })
  const accessToken = session.user.accessToken
  const settings = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer BQCVRzulfbY7uc8kuQLq5FDhB6Ks1ymS7MY32M5PK3Dlf4nfBdILFIz0s4FPpdJ__m7hpmq3o8LjNHwRmVsD4lX1xmTGTZfgvwVGTYmoj06i6PapRovcXSlwKn7Mr1ZHooO4SCqb4I7sYm2xjjoXahJ2VikGOHV8n6eglQfW",
      'Content-Type': 'application/json',
      "Accept" : ' application/json'
    }
  }
  if (session) {

    async function getUser() {
      let res = await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, settings)
      let data = await res.json()
      return data
    }

    let data = await getUser()
    console.log(data)

    res.send({
      error: "You must be sign in to view the protected content on this page.",
    })



  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    })
  }
}
