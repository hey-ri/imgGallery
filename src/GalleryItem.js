import { useState } from "react";
import PropTypes from "prop-types";

function GalleryItem({
    url,
    index,
    selectedItemUrl,
    partInfo: { partSize = { w: 300, h: 200 }, margins = 10, cols = 3 },
    onSelect,
    delay,
}) {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseHover = () => {
        setIsHovered(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="img_content"
            style={{ "--scale": isHovered ? 0.9 : 1, "--delay": `${delay}ms` }}
            onClick={() => onSelect(url)}
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseLeave}
        >
            <div className="back backface-hidden">
                <div
                    className="back_inner"
                    style={{
                        backgroundImage: `url(${selectedItemUrl})`,
                        transform: `translate(${-(index % cols) * (partSize.w + margins)}px, ${
                            -Math.floor(index / cols) * (partSize.h + margins)
                        }px)`,
                    }}
                ></div>
            </div>
            <div className="front backface-hidden" style={{ "--url": `url(${url})` }}></div>
            {/*
                //${url}로 표기 된 것은 src.map이기에 src는 app컴포넌트에서 가져온 props이고 imageUrls를 뜻한다. map 함수 첫번 째 인자로는 처리할 현재 요소를 뜻하므로, imageUrls에 들어있는 url을 인덱스 순서대로 받아올 것이다. 그래서 ${}에 넣어주면 url로 반환해 주기에 그렇게 쓰여졌다. url이 component를 빼면서 props로 전해졌기에 그 후에 이름을 잘 알아보게 하기 위해 eachUrl로 바꼈다 의미는 비슷하지만 url은 전해주는 이름이고, eachUrl을 받으면서 url를 보여주게 되는 것이다.
            */}
        </div>
    );
}

export default GalleryItem;

GalleryItem.propTypes = {
    url: PropTypes.string,
    index: PropTypes.number,
    selectedItemUrl: PropTypes.string,
    partInfo: {
        partSize: { w: PropTypes.number, h: PropTypes.number },
        margins: PropTypes.number,
        cols: PropTypes.number,
    },
    onSelect: PropTypes.func,
    delay: PropTypes.number,
};
