import { useEffect, useRef, useState } from "react";
import GalleryItem from "./GalleryItem";

const nomal = "0deg";
const reverse = "180deg";
const borderRadius = 10;
const partSize = { w: 300, h: 200 };
const margins = 10;
const rows = 3;
const cols = 3;

function ImageGallery({ src }) {
    // 각각의 이미지의 앞면을 보여주는 상태
    const [isFront, setIsFront] = useState(false);

    // 마우스가 올라가있는 이미지의 인덱스
    const [activeItemIndex, setActiveIndex] = useState(-1);
    const [selectedItem, setSelectedItem] = useState("");

    const onContentClick = (url) => {
        // 상태값 토글
        setIsFront((v) => !v);
        setSelectedItem(url);
    };

    const onMouseHover = (index) => {
        setActiveIndex(index);
    };

    const onMouseLeave = () => {
        setActiveIndex(-1);
    };

    return (
        <div className="img_gallery" style={{ "--r": isFront ? nomal : reverse }}>
            {src.map((url, i) => (
                <div
                    className="img_content"
                    style={{ "--s": activeItemIndex === i ? 0.9 : 1 }}
                    key={i}
                    onClick={() => onContentClick(url)}
                    onMouseEnter={() => onMouseHover(i)}
                    onMouseLeave={onMouseLeave}
                >
                    <div className="back backface-hidden">
                        <div
                            className="back_inner"
                            style={{
                                backgroundImage: `url(${selectedItem})`,
                                transform: `translate(
                                    ${-(i % cols) * (partSize.w + margins)}px,
                                    ${-Math.floor(i / cols) * (partSize.h + margins)}px
                                )`,
                            }}
                        ></div>
                    </div>
                    <div className="front backface-hidden" style={{ "--url": `url(${url})` }}></div>
                </div>
            ))}
        </div>
    );
}

export default ImageGallery;
