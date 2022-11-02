import { useEffect, useState } from "react";

function useTitle(isFront) {
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        if (titleIndex === 0 && !isFront) {
            //false
            setTitleIndex(1);
        } else if (isFront && titleIndex === 1) {
            setTitleIndex(2);
        }
    }, [isFront, titleIndex]);

    return { titleIndex };
}

export default useTitle;
