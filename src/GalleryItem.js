import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useImageGallery from "./hooks/useImageGallery";

function GalleryItem({
    url,
    index,
    selectedItemUrl,
    partInfo: { partSize = { w: 100, h: 100 }, margins = 4, cols = 6 },
    onSelect,
    delay,
    isFront,
}) {
    const [isHovered, setIsHovered] = useState(false);

    //돌고 있지 않은 상태
    const [transitionCompleted, setTransitionCompleted] = useState(true);
    //돌고 있지 않다는 의미의 true

    const onMouseHover = () => {
        setIsHovered(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
    };

    //transitionCompleted을 false값으로 바꾸기 위한 useEffect
    useEffect(() => {
        //transitionCompleted의 상태 값을 변경하기 위해, 어느 상태 값을 추적해야하냐
        setTransitionCompleted(false);
        const id = setTimeout(() => {
            setTransitionCompleted(true);
        }, 1380);
        return () => {
            // = function cleanUp(){}
            //isFront에 대한 값이 바뀔 때 settimeout이 계속 실행 되는데 clear해주지 않으면 계속 꼬임
            //return문 안에는 무조건 함수가 들어가야 하는데 이 return 함수문은 clear해주는 아이인데, useEffect가 다시 실행되기 직전에 지워주는 역할이다.
            //이 코드에서는 setTimeout때문에 사용을 하였지만 useEffect를 사용한다면 특정 effect를 시작하기 전에 지워줘야 할 때가 있을 것이다. 그럴 때 사용하는 것이다.
            //cleanUp 함수의 작동 순서는 re-render -> 이전 effect clean-up -> effect 로 실행된다.
            clearTimeout(id);
        };
    }, [isFront]);

    const onSelectImage = useCallback(() => {
        if (transitionCompleted) {
            onSelect(url);
        }
    });

    const onDeselectImage = useCallback(() => {
        if (transitionCompleted) {
            onSelect(selectedItemUrl);
        }
    });

    return (
        <div
            className="img_content"
            style={{
                "--scale": isFront && isHovered ? 0.97 : 1,
                "--delay": `${delay}ms`,
            }}
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseLeave}
            //onClick={()=>onSelect(url)}
        >
            <div className="back backface-hidden" onClick={onDeselectImage}>
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
            <div className="front backface-hidden" style={{ "--url": `url(${url})` }} onClick={onSelectImage}></div>
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
    isFront: PropTypes.bool,
    selectedItemUrl: PropTypes.string,
    partInfo: PropTypes.shape({
        partSize: PropTypes.shape({ w: PropTypes.number, h: PropTypes.number }),
        margins: PropTypes.number,
        cols: PropTypes.number,
    }),
    onSelect: PropTypes.func,
    delay: PropTypes.number,
};
