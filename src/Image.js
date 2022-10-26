import { useEffect, useState } from "react";

function Image() {
    const [clickOn, setClickOn] = useState(false);

    const cake = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];

    useEffect(() => {
        const rotate = () => {
            setClickOn(!clickOn);
            const li = document.querySelector("li.img_content");
            !clickOn ? (li.style.transform = "rotateY(180deg)") : (li.style.transform = "rotateY(0deg)");
        };
        document.addEventListener("click", rotate);
        return () => {
            document.removeEventListener("click", rotate);
        };
    }, [clickOn]);

    const scale = (e) => {
        e.target.style.transform = "scale(0.9)";
    };

    const reset = (e) => {
        e.target.style.transform = "scale(1)";
    };

    //이미지 클릭한 것으로 바뀌게 하기위한 로직 ing
    useEffect(() => {
        if (!clickOn) {
        }
    }, [clickOn]);

    return (
        <ul className="img_box">
            {cake.map((num) => (
                <li className="img_content" onMouseEnter={scale} onMouseLeave={reset}>
                    <img key={num.id} src={"/img/" + num.id + ".jpg"} alt={num.id}></img>
                </li>
            ))}
        </ul>
    );
}

export default Image;
