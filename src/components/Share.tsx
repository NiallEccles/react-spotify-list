import { Share2 } from "lucide-react";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const Share: React.FC<{image: any}> = ({ image }) => {

    const share = () => {
        console.log('HIT SHARE');
        if (navigator.canShare && navigator.canShare({ files: image })) {
            console.log('WE GOT SHARE');
            navigator.share({
              files: image,
              title: 'Vacation Pictures',
              text: 'Photos from September 27 to October 14.',
            })
            .then(() => console.log('Share was successful.'))
            .catch((error) => console.log('Sharing failed', error));
          } else {
            console.log(`Your system doesn't support sharing files.`);
          }
    }
    return (
        <button className="w-8 h-8" onClick={share}><Share2 width={'100%'} height={'100%'}/></button>
    )
}
