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

const titles = [
    "Choose a photo",
    "222222",
    <span>
        333333{" "}
        <a href="https://google.com" target="_blank">
            Google
        </a>
    </span>,
];

function ImageGallery({ src, index, delay }) {
    const { isFront, selectedItemUrl, onContentSelect, setIsFront, selectedItemIndex } = useImageGallery(src, []);

    const [title, setTitle] = useState(titles[0]);
    const getTransitionDelay = (i) => {
        console.log({ i, selectedItemIndex });

        return (selectedItemIndex - i) * 60;
    };

    useEffect(() => {
        if (title === titles[0] && !isFront) {
            setTitle(titles[1]);
        } else if (isFront && title === titles[1]) {
            setTitle(titles[2]);
        }
    }, [isFront, title, setTitle]);

    return (
        <>
            <h1>{title}</h1>
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
