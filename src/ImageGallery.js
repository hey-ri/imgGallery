import GalleryItem from "./GalleryItem";
import useImageGallery from "./hooks/useImageGallery";

const nomal = "0deg";
const reverse = "180deg";
const partInfo = {
    partSize: { w: 300, h: 200 },
    cols: 3,
    margins: 10,
};

function ImageGallery({ src }) {
    const { isFront, selectedItemUrl, onContentSelect } = useImageGallery([]);

    return (
        <div className="img_gallery" style={{ "--rotation": !isFront ? nomal : reverse }}>
            {src.map((eachUrl, i) => (
                <GalleryItem
                    key={i}
                    url={eachUrl}
                    delay={isFront ? 0 : 50 * i}
                    onSelect={onContentSelect}
                    selectedItemUrl={selectedItemUrl}
                    index={i}
                    partInfo={partInfo}
                ></GalleryItem>
            ))}
        </div>
    );
}

export default ImageGallery;
