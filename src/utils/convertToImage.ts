import { toPng } from 'html-to-image';

export const convertToImage = (HTMLElement: React.MutableRefObject<HTMLElement | null>, name: string) => {
    const element = HTMLElement.current;

    if (element) {
        toPng(element, { cacheBust: false })
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