import { useEffect, useState } from "react";

function useTitle(isFront) {
    //isFront는 I.G.js에서받아오는 값이 맞는가? Y
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        if (titleIndex === 0 && !isFront) {
            //true, false일 때를 상식적으로 생각하기 보단, 인덱스의 글자가 0이고, 뒷면일 때로 생각해야 편함
            setTitleIndex(1);
        } else if (isFront && titleIndex === 1) {
            setTitleIndex(2);
        }
    }, [isFront, titleIndex]);

    return { titleIndex };
}

export default useTitle;
