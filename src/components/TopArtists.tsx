import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopArtists";

export const TopArtists: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <section className="mb-10">
            <h3 className="text-3xl mb-5 italic font-bold"><FormattedMessage id="topArtists" /></h3>
            <ol>
                {
                    items && items.map((artist: Item, index: number) => {
                        return index < 10 ? 
                            <li className="flex flex-row items-center mb-3" key={artist.name}>
                                <div className="flex flex-row items-center">
                                    <h4 className="text-xl w-10 font-bold">#{++index}</h4>
                                    <img className="w-12 h-12 ml-3 object-fill" src={artist.images[2].url} alt="" />
                                </div>
                                <h4 className="w-60 text-xl font-bold ml-3">{artist.name}</h4>
                            </li> : null
                    })
                }
            </ol>
        </section>
    )
}