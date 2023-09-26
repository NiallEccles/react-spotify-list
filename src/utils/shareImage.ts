export const shareImage = async (image: string, name: string) => {
    const blob = await (await fetch(image)).blob();
    const file = new File([blob], `${name}.png`, { type: blob.type });
    if (!navigator.canShare) throw new Error("Your system doesn't support sharing files.");
    // && !navigator.canShare({ files: [file] })

    navigator.share({
        files: [file],
        title: name,
        text: name,
    })
        .then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed', error));
};

export default {};