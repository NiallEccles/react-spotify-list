import { toCanvas } from 'html-to-image';

export const convertToImage = (HTMLElement: React.MutableRefObject<HTMLElement | null>) => {
    const element = HTMLElement.current;

    if (element) {
        toCanvas(element, { cacheBust: false })
            .then((canvas) => {
                document.body.appendChild(canvas);
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        console.error("Ref is null");
    }
};

export default {};