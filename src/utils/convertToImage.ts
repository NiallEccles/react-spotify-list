import { toPng } from 'html-to-image';
// import { saveAs } from 'file-saver';

export const convertToImage = async (HTMLElement: React.MutableRefObject<HTMLElement | null>, name: string) => {
    const element = HTMLElement.current;

    if (element) {
        // await toBlob(element).then((blob) => {
        //     saveAs(blob!, 'MY_BLOB.png');
        // });
        // Because Safari is bad
        // I need to call this
        // multiple times
        // so the canvas images
        // are rendered
        await toPng(element, { cacheBust: true });
        await toPng(element, { cacheBust: true });
        await toPng(element, { cacheBust: true })
        .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = `${name}.png`;
            link.href = dataUrl;
            link.click();
        })
        .catch((err) => {
            console.log(err);
        });
    } else {
        console.error("Ref is null");
    }
};

export default {};