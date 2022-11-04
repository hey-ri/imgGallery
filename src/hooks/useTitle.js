import { useEffect, useState } from "react";

function useTitle(isFront) {
    //isFront는 I.G.js에서받아오는 값이 맞는가? Y
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        if (titleIndex === 0 && !isFront) {
            setTitleIndex(1);
        } else if (isFront && titleIndex === 1) {
            setTitleIndex(2);
        }
    }, [isFront, titleIndex]);

    return { titleIndex };
}

export default useTitle;
