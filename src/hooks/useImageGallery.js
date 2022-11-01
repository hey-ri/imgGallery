import { useCallback, useState } from "react";
function useImageGallery(dep) {
    // 각각의 이미지의 앞면을 보여주는 상태
    const [isFront, setIsFront] = useState(false);

    const [selectedItemUrl, setSelectedItemUrl] = useState("");

    const onContentSelect = useCallback((url) => {
        // 상태값 토글
        setIsFront((v) => !v);
        setSelectedItemUrl(url);
    }, dep);

    return { isFront, selectedItemUrl, onContentSelect };
}

export default useImageGallery;
