import { useState } from "react";

function GalleryItem({ activeItemIndex, selectedItem, partSize, margins, i, url }) {
    const onMouseHover = (index) => {
        setActiveIndex(index);
    };

    const onMouseLeave = () => {
        setActiveIndex(-1);
    };

    // 마우스가 올라가있는 이미지의 인덱스
    const [activeItemIndex, setActiveIndex] = useState(-1);
    const [selectedItem, setSelectedItem] = useState("");

    return (
        <div
            className="img_content"
            style={{ "--s": activeItemIndex === i ? 0.9 : 1 }}
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
    );
}

export default GalleryItem;
