import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopTracks";
import { useRef } from "react";
import { convertToImage } from "../utils/convertToImage";
import { Download, Share2 } from "lucide-react";
import { downloadImage } from "../utils/downloadImage";
import { shareImage } from "../utils/shareImage";

export const TopSongs: React.FC<{ items: Item[] }> = ({ items }) => {
    const elementRef = useRef<HTMLElement | null>(null);

    const handleDownload = () => 
    convertToImage(elementRef).then(imageData => {
        downloadImage(imageData, 'Top Artists');
    });
const handleShare = () => {
    convertToImage(elementRef).then(imageData => {
        shareImage(imageData, 'Top Artists');
    }).catch(error => console.log(error));
};

    return (
        <section className="pb-10" ref={elementRef}>
            <h3 className="text-3xl p-2 italic font-bold flex justify-between bg-rose-200 border-black border-2 border-b-0 hover:bg-rose-300 transition-colors ease-in-out">
                <FormattedMessage id="topTracks" />
                <div className="flex flex-row w-20 justify-between">
                    <button className="w-8 h-8" onClick={handleDownload}>
                        <Download width={'100%'} height={'100%'} />
                    </button>
                    <button className="w-8 h-8" onClick={handleShare}>
                        {/* <Share image={image}/> */}
                        <Share2 width={'100%'} height={'100%'}/>
                    </button>
                </div>
            </h3>
            <ol className="py-5 bg-rose-200 border-black border-2">
                {
                    items && items.map((track: Item, index: number) => {
                        return index < 10 ?
                            <li className="grid grid-cols-2 px-4 mb-3 w-full" key={track.name}>
                                <div className="relative">
                                <h4 className="text-xs w-6 h-6 font-bold absolute z-10 bg-white rounded-full -right-8 top-1/2 -translate-y-1/2 flex items-center justify-center">#{++index}</h4>
                                    <img className="w-14 h-14 object-fill" src={track.album.images[2].url} alt="" />
                                </div>
                                <div className="flex flex-col justify-center w-full ml-10 truncate">
                                    <a href={track.external_urls.spotify} className="hover:underline">
                                        <h4 className="text-xl font-bold pr-3 block w-11/12 truncate">{track.name}</h4>
                                        <h4 className="italic text-xl font-bold truncate">{track.artists.map(artists => artists.name).join(', ')}</h4>
                                    </a>
                                </div>
                            </li> : null
                    })
                }
            </ol>
        </section>
    )
}