import { toPng } from 'html-to-image';
// import { saveAs } from 'file-saver';

export const convertToImage = async (HTMLElement: React.MutableRefObject<HTMLElement | null>) => {
    const element = HTMLElement.current;

    if (!element) throw new Error('Ref is null');
    // await toBlob(element).then((blob) => {
    //     saveAs(blob!, 'MY_BLOB.png');
    // });
    // Because Safari is bad
    // I need to call this
    // multiple times
    // so the canvas images
    // are rendered
    try {
        await toPng(element, { cacheBust: true });
        await toPng(element, { cacheBust: true });
        const dataUrl = await toPng(element, { cacheBust: true });

        return dataUrl;
    } catch (error) {
        throw new Error('Failed to convert to image');
    }
};

export default {};