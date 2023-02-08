import { useEffect, useState } from 'react';

export const useImageLoader = (initialSrc: string, currentSrc: string) => {
    const [imageSrc, setImageSrc] = useState(initialSrc);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            // console.log(currentSrc)
            setImageSrc(currentSrc);
        };
        img.src = currentSrc;
    }, [currentSrc]);

    return imageSrc;
};