import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopTracks";
import { useRef } from "react";
import { convertToImage } from "../utils/convertToImage";
import { Download } from "lucide-react";

export const TopSongs: React.FC<{ items: Item[] }> = ({ items }) => {
    const elementRef = useRef<HTMLElement | null>(null);

    const handleClick = () => convertToImage(elementRef, 'Top Artists');

    return (
        <section className="pb-10" ref={elementRef}>
            <h3 className="text-3xl p-2 italic font-bold flex justify-between bg-rose-200 border-black border-2 border-b-0 hover:bg-rose-300 transition-colors ease-in-out">
                <FormattedMessage id="topTracks" />
                <span className="w-8 h-8" onClick={handleClick}>
                    <Download width={'100%'} height={'100%'} />
                </span>
            </h3>
            <ol className="py-5 bg-rose-200 border-black border-2">
                {
                    items && items.map((track: Item, index: number) => {
                        return index < 10 ?
                            <li className="grid grid-cols-2 px-4 mb-3 w-full" key={track.name}>
                                <div className="relative">
                                    <h4 className="text-xs w-6 h-6 font-bold absolute z-10 bg-white rounded-full -right-3 -bottom-2 flex items-center justify-center">#{++index}</h4>
                                    <img className="w-14 h-14 object-fill border-black border-2" src={track.album.images[2].url} alt="" />
                                </div>
                                <div className="w-full ml-4 truncate">
                                    <h4 className="text-xl font-bold pr-3 block w-full truncate">{track.name}</h4>
                                    <h4 className="italic text-xl font-bold truncate">{track.artists.map(artists => artists.name).join(', ')}</h4>
                                </div>
                            </li> : null
                    })
                }
            </ol>
        </section>
    )
}