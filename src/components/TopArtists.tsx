import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopArtists";
import { useRef } from "react";
import { convertToImage } from "../utils/convertToImage";

export const TopArtists: React.FC<{items: Item[]}> = ({items}) => {
    const elementRef = useRef<HTMLElement | null>(null);
          
    const handleClick = () => convertToImage(elementRef, 'Top Artists');

    return (
        <section className="mb-10" ref={elementRef} onClick={()=>{}}>
            <h3 className="text-3xl py-2 pl-2 italic font-bold bg-rose-200 border-black border-2 border-b-0 hover:bg-rose-300 transition-colors ease-in-out"><FormattedMessage id="topArtists" /></h3>
            <ol className="py-5 bg-rose-200 border-black border-2">
                {
                    items && items.map((artist: Item, index: number) => {
                        return index < 10 ? 
                            <li className="grid grid-cols-2 px-4 mb-3 w-full" key={artist.name}>
                                <div className="relative">
                                    <h4 className="text-xs w-6 h-6 font-bold absolute z-10 bg-white rounded-full -right-3 -bottom-2 flex items-center justify-center">#{++index}</h4>
                                    <img className="w-14 h-14 object-fill border-black border-2" src={artist.images[2].url} alt="" />
                                </div>
                                <div className="flex flex-col justify-center w-full ml-4 truncate">
                                    <h4 className="w-60 text-xl font-bold truncate">{artist.name}</h4>
                                </div>
                            </li> : null
                    })
                }
            </ol>
        </section>
    )
}