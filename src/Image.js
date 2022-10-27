import { useEffect, useRef, useState } from "react";

function Image() {
    const [clickOn, setClickOn] = useState(false);

    const cake = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];

    const nomal = "0deg";
    const reserve = "180deg";

    const sScale = 0.9;
    const nScale = 1;

    const rotate = (e) => {
        const liList = Array.from(e.target.closest("ul").children);
        setClickOn((current) => {
            liList.forEach((li) => {
                li.style.setProperty("--r", current ? nomal : reserve);
            });
            return !current;
        });
    };

    const scale = (e) => {
        e.target.style.setProperty("--s", sScale);
    };

    const reset = (e) => {
        e.target.style.setProperty("--s", nScale);
    };

    //이미지 클릭한 것으로 바뀌게 하기위한 로직 미완성

    /*  const allimg = useRef();

    useEffect(() => {
        if (current) {
            allimg.current = cake.id;
        }
    }, [clickOn]); */

    return (
        <ul className="img_box">
            {cake.map(({ id }) => (
                <li
                    className="img_content"
                    key={id}
                    onClick={rotate}
                    onMouseEnter={scale}
                    onMouseLeave={reset}
                    style={{ transform: `scale(var(--s)) rotateY(var(--r))` }}
                >
                    <img src={`/img/${id}.jpg`} alt={id}></img>
                </li>
            ))}
        </ul>
    );
}

export default Image;
