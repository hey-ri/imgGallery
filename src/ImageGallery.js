import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
import useImageGallery from "./hooks/useImageGallery";

const nomal = "0deg";
const reverse = "180deg";
const partInfo = {
    partSize: { w: 100, h: 100 },
    cols: 6,
    rows: 4,
    margins: 4,
};

function ImageGallery({ src, index, delay }) {
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [title, setTitle] = useState("Choose a photo");

    const { isFront, selectedItemUrl, onContentSelect, setIsFront, selectedItemIndex } = useImageGallery(src, []);

    const getTransitionDelay = (i) => {
        console.log({ i, selectedItemIndex });

        return (selectedItemIndex - i) * 60;

        return 0;
    };

    useEffect(() => {
        if (isFirstTime && !isFront) {
            setIsFirstTime(false);
            setTitle("222222");
        } else if (isFront && title === "222222") {
            setTitle("33333");
        }
    }, [isFront, isFirstTime, title, setTitle]);

    return (
        <>
            <h1 onClick={onContentSelect}>{title}</h1>
            <div
                className="img_gallery"
                style={{
                    "--rotation": isFront ? nomal : reverse,
                    "--opacity": isFront ? 0.5 : 0,
                }}
            >
                {src.map((eachUrl, i) => (
                    <GalleryItem
                        key={i}
                        url={eachUrl}
                        isFront={isFront}
                        delay={isFront ? getTransitionDelay(i) : 30 * i}
                        onSelect={onContentSelect}
                        selectedItemUrl={selectedItemUrl}
                        index={i}
                        partInfo={partInfo}
                    ></GalleryItem>
                ))}
            </div>
        </>
    );
}

export default ImageGallery;
