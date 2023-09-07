import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopTracks";
import React from "react";

export const TopSongs: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <section className="pb-10">
            <h3 className="text-3xl mb-5 italic font-bold"><FormattedMessage id="topTracks" /></h3>
            <ol>
                {
                    items && items.map((track: Item, index: number) => {
                        return index < 10 ? 
                            <li className="flex flex-row items-center mb-3" key={track.name}>
                                <div className="flex flex-row">
                                    <h4 className="text-xl w-10 font-bold">#{++index}</h4>
                                    {/* <img className="w-12 h-12 ml-3 object-fill" src={track.images[2].url} alt="" /> */}
                                    <h4 className="text-xl ml-5 font-bold w-full">{track.name} - <span className="italic">{track.artists.map(artists=>artists.name).join(', ')}</span></h4>
                                </div>
                            </li> : null
                    })
                }
            </ol>
        </section>
    )
}