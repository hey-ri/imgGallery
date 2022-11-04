import { useEffect, useState } from "react";

function useTitle(isFront) {
    //isFront는 I.G.js에서받아오는 값이 맞는가?
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        if (titleIndex === 0 && !isFront) {
            //true true가 됐을 때 실행하는 것, true, false일 때를 고려하면 안됨
            setTitleIndex(1);
        } else if (isFront && titleIndex === 1) {
            setTitleIndex(2);
        }
    }, [isFront, titleIndex]);

    return { titleIndex };
}

export default useTitle;
