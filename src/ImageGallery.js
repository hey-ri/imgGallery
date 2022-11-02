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
    "222222",
    <span>
        333333{" "}
        <a href="https://google.com" target="_blank">
            Google
        </a>
    </span>,
];
function ImageGallery({ src }) {
    const { isFront, selectedItemUrl, onContentSelect, setIsFront, selectedItemIndex } = useImageGallery(src, []);

    const { titleIndex } = useTitle(isFront);

    const getTransitionDelay = (i) => {
        //console.log({ i, selectedItemIndex });

        return Math.floor(selectedItemIndex - partInfo.cols - (selectedItemIndex - i)) * 60;
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
