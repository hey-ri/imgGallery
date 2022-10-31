import { useCallback, useState } from "react";
import GalleryItem from "./GalleryItem";

const nomal = "0deg";
const reverse = "180deg";
const partInfo = {
    partSize: { w: 300, h: 200 },
    cols: 3,
    margins: 10,
};

function ImageGallery({ src }) {
    // 각각의 이미지의 앞면을 보여주는 상태
    const [isFront, setIsFront] = useState(false);

    const [selectedItemUrl, setSelectedItemUrl] = useState("");

    const onContentSelect = useCallback((url) => {
        // 상태값 토글
        setIsFront((v) => !v);
        setSelectedItemUrl(url);
    }, []);

    return (
        <div className="img_gallery" style={{ "--rotation": !isFront ? nomal : reverse }}>
            {src.map((eachUrl, i) => (
                <GalleryItem
                    key={i}
                    url={eachUrl}
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
