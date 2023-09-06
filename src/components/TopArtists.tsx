import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopArtists";

export const TopArtists: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <section>
            <h3><FormattedMessage id="topArtists" /></h3>
            <ol>
                {
                    items && items.map((artist: Item, index: number) => {
                        return index < 10 ? 
                            <li className="flex flex-row items-center mb-4 justify-between" key={artist.name}>
                                <h4 className="text-5xl font-bold">#{++index}</h4>
                                <img className="w-32" src={artist.images[2].url} alt="" />
                                <h4 className="w-32 text-xl font-bold">{artist.name}</h4>
                            </li> : null
                    })
                }
            </ol>
        </section>
    )
}