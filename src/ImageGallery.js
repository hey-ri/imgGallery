import { useEffect, useRef, useState } from "react";
import Img from "./Img";

const nomal = "0deg";
const reverse = "180deg";

function ImageGallery({ src }) {
    // 각각의 이미지의 앞면을 보여주는 상태
    const [isFront, setIsFront] = useState(false);

    // 마우스가 올라가있는 이미지의 인덱스
    const [activeItemIndex, setActiveIndex] = useState(-1);

    const onContentClick = (e) => {
        // 상태값 토글
        setIsFront((v) => !v);
    };

    const onMouseHover = (index) => {
        setActiveIndex(index);
    };

    const onMouseLeave = () => {
        setActiveIndex(-1);
    };

    //이미지 클릭한 것으로 바뀌게 하기위한 로직 미완성

    /*  const allimg = useRef();

    useEffect(() => {
        if (current) {
            allimg.current = cake.id;
        }
    }, [clickOn]); */

    return (
        <ul className="img_gallery" style={{ "--r": isFront ? nomal : reverse }}>
            {src.map((url, i) => (
                <li
                    className="img_content"
                    style={{ "--s": activeItemIndex === i ? 0.9 : 1 }}
                    key={i}
                    onClick={onContentClick}
                    onMouseEnter={() => onMouseHover(i)}
                    onMouseLeave={onMouseLeave}
                >
                    <div className="back">
                        <div className="back_inner"></div>
                    </div>
                    <div className="front" style={{ backgroundImage: url }}></div>
                    {/* <img src={url} alt={url}></img> */}
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;
