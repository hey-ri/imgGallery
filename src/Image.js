import { useEffect, useRef, useState } from "react";

function Image() {
    const [clickOn, setClickOn] = useState(false);
    //const [allChange, setAllChange] = useState(false);

    const cake = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];

    const ulR = useRef();

    const rotate = () => {
        setClickOn(!clickOn);
        !clickOn ? (ulR.current.style.transform = "rotateY(180deg)") : (ulR.current.style.transform = "rotateY(0deg)");
        console.log(ulR);
    };

    const scale = (e) => {
        e.target.style.transform = "scale(0.9)";
    };

    const reset = (e) => {
        e.target.style.transform = "scale(1)";
    };

    const allimg = useRef();
    //이미지 클릭한 것으로 바뀌게 하기위한 로직 미완성
    useEffect(() => {
        if (!clickOn) {
            allimg.current = cake.id;
        }
    }, [clickOn]);

    return (
        <ul className="img_box">
            {cake.map((num) => (
                <li className="img_content" onClick={rotate} onMouseEnter={scale} onMouseLeave={reset} ref={ulR}>
                    <img key={num.id} src={"/img/" + num.id + ".jpg"} alt={num.id} ref={allimg}></img>
                </li>
            ))}
        </ul>
    );
}

export default Image;
