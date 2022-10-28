import "./App.css";
import ImageGallery from "./ImageGallery";

const imageUrls = [
    "img/0.jpg",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
];

function App() {
    return (
        <div>
            <div className="container">
                <h1>Click the photo</h1>
                <ImageGallery src={imageUrls}></ImageGallery>
                <div className="test">
                    <div className="">
                        <p style={{ color: "white" }}>Hello</p>
                    </div>
                    <div className="backface-hidden">
                        <img src="img/3.jpg" alt="test" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
