import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopTracks";
import React from "react";

export const TopSongs: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <section className="pb-10">
            <h3 className="text-3xl py-2 pl-2 italic font-bold bg-rose-200 border-black border-2 border-b-0 hover:bg-rose-300 transition-colors ease-in-out"><FormattedMessage id="topTracks" /></h3>
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
                                    <h4 className="italic text-xl font-bold truncate">{track.artists.map(artists=>artists.name).join(', ')}</h4>
                                </div>
                            </li> : null
                    })
                }
            </ol>
        </section>
    )
}