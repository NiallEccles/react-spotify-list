import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopArtists";

export const TopArtists: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <section>
            <h3><FormattedMessage id="topArtists" /></h3>
            <ol>
                {
                    items && items.map((artist: Item, index: number) => {
                        return index < 10 ? <li key={artist.name}>{artist.name}</li> : null
                    })
                }
            </ol>
        </section>
    )
}