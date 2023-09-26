import { Share2 } from "lucide-react";

export const Share: React.FC = () => {

    const share = () => {
        console.log('HIT SHARE');
        if (navigator.share) {
            console.log('WE GOT SHARE');
            navigator.share({
                title: 'web.dev',
                text: 'Check out web.dev.',
                url: 'https://web.dev/',
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        }
    }
    return (
        <button className="w-8 h-8" onClick={share}><Share2 width={'100%'} height={'100%'}/></button>
    )
}