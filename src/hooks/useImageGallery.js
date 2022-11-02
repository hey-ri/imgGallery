import { useCallback, useState, useRef } from "react";

function useImageGallery(src, dep) {
    // 각각의 이미지의 앞면을 보여주는 상태
    const [isFront, setIsFront] = useState(true);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const [selectedItemUrl, setSelectedItemUrl] = useState("");

    // 클릭 시 글씨 변경
    // let text = useRef("click any of the tiles to get back");

    // function changeText() {
    //     text.current.innerText = "chkeck out my other pens and follow me on twitter";
    // }

    const changeTxt = useRef();

    const onContentSelect = useCallback((url) => {
        // 상태값 토글
        setIsFront((v) => !v);
        setSelectedItemUrl(url);
        setSelectedItemIndex(src.indexOf(url));

        //글씨 변경
        changeTxt.current = "Click any of the files to get back";
    }, dep);

    return { isFront, selectedItemUrl, onContentSelect, setIsFront, changeTxt, selectedItemIndex };
}

export default useImageGallery;
