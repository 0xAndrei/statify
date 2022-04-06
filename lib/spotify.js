const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;


export const getAccessToken = async (refresh_token) => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    return response.json();
};

const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists';


export const getUsersPlaylists = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token);

    const x = await fetch(PLAYLISTS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const ja = await x.json()
    return ja
};

const CURRENTSONG_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
export const getCurrentTrack = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token);

    const x = await fetch(CURRENTSONG_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const ja = await x.json()
    return ja
};

const TOPARTIST = '	https://api.spotify.com/v1/me/top/artists'
export const getTopArtists = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token);

    const x = await fetch(TOPARTIST, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const ja = await x.json()
    return ja
};

const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me"
export const getProfile = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token)
    const x = await fetch(PROFILE_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const ja = await x.json()
    return ja
}

const TOP_ARTIST_LONG = "https://api.spotify.com/v1/me/top/artists?=time_range=long_term"
export const getTopArtistLong = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token)
    const x = await fetch(TOP_ARTIST_LONG, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const ja = await x.json()
    console.log(ja)
    return ja
}
const TOP_ARTISTS_MID = "https://api.spotify.com/v1/me/top/artists?time_range=medium_term"
export const getTopArtistsMid = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token)
    const x = await fetch(TOP_ARTISTS_MID, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const ja = await x.json()
    console.log(ja)
    return ja
}
const TOP_ARTISTS_SHORT = "https://api.spotify.com/v1/me/top/artists?time_range=short_term"
export const getTopArtistsShort = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token)
    const x = await fetch(TOP_ARTISTS_SHORT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const ja = await x.json()
    console.log(ja)
    return ja
}

const TOP_TRACKS_LONG = "https://api.spotify.com/v1/me/top/tracks?=time_range=long_term"
export const getTopTracksLong = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token)
    const x = await fetch(TOP_TRACKS_LONG, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const ja = await x.json()
    console.log(ja)
    return ja
}
const TOP_TRACKS_MID = "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term"
export const getTopTracksMid = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token)
    const x = await fetch(TOP_TRACKS_MID, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const ja = await x.json()
    console.log(ja)
    return ja
}
const TOP_TRACKS_SHORT = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term"
export const getTopTracksShort = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token)
    const x = await fetch(TOP_TRACKS_SHORT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const ja = await x.json()
    console.log(ja)
    return ja
}