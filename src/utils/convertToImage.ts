import { toBlob } from 'html-to-image';
import { saveAs } from 'file-saver';

export const convertToImage = async (HTMLElement: React.MutableRefObject<HTMLElement | null>, name: string) => {
    const element = HTMLElement.current;
    console.log(name);
    

    if (element) {
        await toBlob(element).then((blob) => {
            saveAs(blob!, 'MY_BLOB.png');
        });
        // await toPng(element, { cacheBust: true })
        //     .then((dataUrl) => {
        //         new Promise((resolve)=>{
        //             setTimeout(resolve, 1100);
        //         })
        //         const link = document.createElement("a");
        //         link.download = `${new Date().toLocaleTimeString()}.png`;
        //         link.href = dataUrl;
        //         link.click();
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    } else {
        console.error("Ref is null");
    }
};

export default {};