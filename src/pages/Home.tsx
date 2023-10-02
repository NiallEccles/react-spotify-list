import { AuthLink } from '../components/AuthLink';

export const Home = () => {
    return (
        <div className='h-full flex flex-col justify-between'>
            <h1 className='text-4xl mb-5 text-white font-bold'>Listur</h1>
            <AuthLink />
            <img className="w-40 mx-auto pb-10" src="/Spotify_Logo_RGB_White.png" alt="" />
        </div>
    )
}