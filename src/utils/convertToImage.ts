import { toJpeg } from 'html-to-image';

export const convertToImage = (HTMLElement: React.MutableRefObject<HTMLElement | null>, name: string) => {
    const element = HTMLElement.current;
    console.log(name);
    

    if (element) {
        toJpeg(element, { cacheBust: true })
            .then((dataUrl) => {
                new Promise((resolve)=>{
                    setTimeout(resolve, 500);
                })
                const link = document.createElement("a");
                link.download = `${new Date().toLocaleTimeString()}.png`;
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