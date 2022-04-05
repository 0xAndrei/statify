import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export default NextAuth(
    {

        providers: [
            SpotifyProvider({

                clientId: process.env.SPOTIFY_CLIENT_ID,
                clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
                authorization: {
                    params: {
                        scope: "user-read-currently-playing user-read-email user-top-read"
                    }
                },
            }),
        ],
        jwt: {
            encryption: true
        },
        callbacks: {
            async jwt({ token, account }) {
                if (account) {
                    token.accessToken = account.refresh_token;

                }
                return token;
            },
            async session(session, user) {
                session.user = user;
                return session;
            },
        },
        secret: "andreiandreiandrei",

        synchronize: false

    }
)


