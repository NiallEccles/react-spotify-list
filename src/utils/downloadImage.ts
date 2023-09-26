export const downloadImage = (dataUrl: string, name: string) => {
    const link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = dataUrl;
    link.click();
};

export default {};