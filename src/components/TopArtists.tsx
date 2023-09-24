import { FormattedMessage } from "react-intl";
import { Item } from "../types/TopArtists";
// import { useRef } from "react";
// import { convertToImage } from "../utils/convertToImage";
import { Download } from "lucide-react";
import { useToPng } from '@hugocxl/react-to-image';

export const TopArtists: React.FC<{ items: Item[] }> = ({ items }) => {
    // const elementRef = useRef<HTMLElement | null>(null);

    // const handleClick = () => convertToImage(elementRef, 'Top Artists');
    // const handleClick = () => toCanvas(elementRef);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, convert, ref] = useToPng<HTMLDivElement>({
        quality: 1,
        onSuccess: data => {
          const link = document.createElement('a');
          link.download = 'TopArtistsNew.jpeg';
          link.href = data;
          link.click();
        }
      });

    return (
        <section className="mb-10" ref={ref}>
            <h3 className="text-3xl p-2 italic font-bold flex justify-between bg-rose-200 border-black border-2 border-b-0 hover:bg-rose-300 transition-colors ease-in-out">
                <FormattedMessage id="topArtists" />
                <span className="w-8 h-8" onClick={convert}>
                    <Download width={'100%'} height={'100%'} />
                </span>
            </h3>
            <ol className="py-5 bg-rose-200 border-black border-2">
                {
                    items && items.map((artist: Item, index: number) => {
                        return index < 10 ?
                            <li className="grid grid-cols-2 px-4 mb-3 w-full" key={artist.name}>
                                <div className="relative">
                                    <h4 className="text-xs w-6 h-6 font-bold absolute z-10 bg-white rounded-full -right-3 -bottom-2 flex items-center justify-center">#{++index}</h4>
                                    {/* <img className="w-14 h-14 object-fill border-black border-2" src={artist.images[2].url} alt="" /> */}
                                    <div className="w-14 h-14 object-fill border-black border-2 bg-cover" style={{backgroundImage: `url(${artist.images[2].url})`}}></div>
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