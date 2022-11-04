import { useCallback, useState } from "react";

function useImageGallery(src, dep) {
    // 각각의 이미지의 앞면을 보여주는 상태
    const [isFront, setIsFront] = useState(true);

    // 각각의 자신의 이미지가 선택된 상태
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    // 각각의 이미지 url을 받는 상태
    const [selectedItemUrl, setSelectedItemUrl] = useState("");

    const onContentSelect = useCallback((url) => {
        //console.log({ isFront, url });
        // 상태값 토글
        setIsFront((v) => !v);
        setSelectedItemUrl(url);
        setSelectedItemIndex(src.indexOf(url));
    }, dep);

    return { isFront, selectedItemUrl, onContentSelect, setIsFront, selectedItemIndex };
}

export default useImageGallery;
