import GalleryItem from "./GalleryItem";
import useImageGallery from "./hooks/useImageGallery";
import useTitle from "./hooks/useTitle";

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

    const { titleIndex } = useTitle(isFront); //(isFront)는 useTitle에 보내주는 값이 맞는가?

    const getTransitionDelay = (i) => {
        console.log({ i, selectedItemIndex });

        return (
            Math.sqrt(
                Math.pow(selectedItemIndex - partInfo.cols, 2) + Math.pow(selectedItemIndex - i, 2) /* +
                    Math.pow(selectedItemIndex - partInfo.rows, 2) + Math.pow(selectedItemIndex - i, 2) */
            ) * 30
        );
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
                        delay={isFront ? 30 * i : getTransitionDelay(i)}
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
