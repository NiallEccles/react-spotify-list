import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopTracks";
import React from "react";

export const TopSongs: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <section className="pb-10">
            <h3 className="text-3xl py-2 pl-2 italic font-bold bg-rose-200 border-black border-2 border-b-0 hover:bg-rose-300 transition-colors ease-in-out"><FormattedMessage id="topTracks" /></h3>
            <ol className="p-5 bg-rose-200 border-black border-2">
                {
                    items && items.map((track: Item, index: number) => {
                        return index < 10 ? 
                            <li className="flex flex-row items-center mb-3" key={track.name}>
                                <div className="flex flex-row">
                                    <h4 className="text-xl w-10 font-bold">#{++index}</h4>
                                    {/* <img className="w-12 h-12 ml-3 object-fill" src={track.images[2].url} alt="" /> */}
                                    <h4 className="text-xl ml-2 font-bold w-full">{track.name} - <span className="italic">{track.artists.map(artists=>artists.name).join(', ')}</span></h4>
                                </div>
                            </li> : null
                    })
                }
            </ol>
        </section>
    )
}