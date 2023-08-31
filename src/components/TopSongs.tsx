import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopTracks";
import React from "react";

export const TopSongs: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <section>
            <h3><FormattedMessage id="topTracks" /></h3>
            <ol>
                {
                    items && items.map((track: Item, index: number) => {
                        return index < 10 ? <li key={track.name}>{track.name}</li> : null
                    })
                }
            </ol>
        </section>
    )
}