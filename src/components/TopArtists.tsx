import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopArtists";

export const TopArtists: React.FC<{items: Item[]}> = ({items}) => {
    return (
        <section className="mb-10">
            <h3 className="text-3xl py-2 pl-2 italic font-bold bg-rose-200 border-black border-2 border-b-0 hover:bg-rose-300 transition-colors ease-in-out"><FormattedMessage id="topArtists" /></h3>
            <ol className="py-5 bg-rose-200 border-black border-2">
                {
                    items && items.map((artist: Item, index: number) => {
                        return index < 10 ? 
                            <li className="flex flex-row items-center mb-3" key={artist.name}>
                                <div className="flex flex-row items-center relative">
                                    <h4 className="text-sm w-6 h-6 font-bold absolute z-10 bg-white rounded-full -right-3 -bottom-2 flex items-center justify-center">#{++index}</h4>
                                    <img className="w-14 h-14 ml-3 object-fill border-black border-2" src={artist.images[2].url} alt="" />
                                </div>
                                <h4 className="w-60 text-xl font-bold ml-3">{artist.name}</h4>
                            </li> : null
                    })
                }
            </ol>
        </section>
    )
}