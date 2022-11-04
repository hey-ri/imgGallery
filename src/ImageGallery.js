import GalleryItem from "./GalleryItem";
import useImageGallery from "./hooks/useImageGallery";
import useTitle from "./hooks/useTitle";

const nomal = "0deg";
const reverse = "180deg";
const delayMs = 230;
const partInfo = {
    partSize: { w: 100, h: 100 },
    cols: 6,
    rows: 4,
    margins: 4,
};
const titles = [
    "Choose a photo",
    "Click any of the tiles to get back",
    <span>
        Click out my other{" "}
        <a href="https://codepen.io/kiyutink" target="_blank" rel="noreferrer" className="titles">
            pens
        </a>
        &nbsp; and follow me on{" "}
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="titles">
            twitter
        </a>
    </span>,
];

function ImageGallery({ src }) {
    const { isFront, selectedItemUrl, onContentSelect, selectedItemIndex } = useImageGallery(src, []);

    const { titleIndex } = useTitle(isFront); //(isFront)는 useTitle에 보내주는 값이 맞는가? Y

    const getTransitionDelay = (i) => {
        const x = i % partInfo.cols;
        const y = Math.floor(i / partInfo.cols);

        const sx = selectedItemIndex % partInfo.cols;
        const sy = Math.floor(selectedItemIndex / partInfo.cols);
        const dist = Math.abs(Math.sqrt(Math.pow(sx - x, 2) + Math.pow(sy - y, 2)));

        return dist;
    };

    return (
        <>
            <h1>{titles[titleIndex]}</h1>
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
                        delay={delayMs * (isFront ? i * 0.2 : getTransitionDelay(i))}
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
