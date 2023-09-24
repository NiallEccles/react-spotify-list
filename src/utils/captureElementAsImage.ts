import html2canvas from "html2canvas";

export const captureElementAsImage = async (elementRef: HTMLElement | null) => {
    if(!elementRef) return;
    try {
        const canvas = await html2canvas(elementRef, {
            useCORS: true
        });
        return canvas.toDataURL('image/png');
    } catch (error) {
        console.error('Error capturing element as image:', error);
        return null;
    }
};