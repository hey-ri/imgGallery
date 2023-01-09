import "./App.css";
import ImageGallery from "./ImageGallery";
/* https://codepen.io/kiyutink/pen/XKvMjw */

const imageUrls = [
  "https://kiyutink.github.io/nyc/nyc1.jpg",
  "https://kiyutink.github.io/nyc/nyc2.jpg",
  "https://kiyutink.github.io/nyc/nyc3.jpg",
  "https://kiyutink.github.io/nyc/nyc4.jpg",
  "https://kiyutink.github.io/nyc/nyc5.jpg",
  "https://kiyutink.github.io/london/london1.jpg",
  "https://kiyutink.github.io/london/london2.jpg",
  "https://kiyutink.github.io/london/london3.jpg",
  "https://kiyutink.github.io/madrid/madrid1.jpg",
  "https://kiyutink.github.io/madrid/madrid2.jpg",
  "https://kiyutink.github.io/madrid/madrid3.jpg",
  "https://kiyutink.github.io/beijing/beijing1.jpg",
  "https://kiyutink.github.io/beijing/beijing2.jpg",
  "https://kiyutink.github.io/beijing/beijing3.jpg",
  "https://kiyutink.github.io/moscow/moscow1.jpg",
  "https://kiyutink.github.io/moscow/moscow2.jpg",
  "https://kiyutink.github.io/moscow/moscow3.jpg",
  "https://kiyutink.github.io/sidney/sidney1.jpg",
  "https://kiyutink.github.io/sidney/sidney2.jpg",
  "https://kiyutink.github.io/sidney/sidney3.jpg",
  "https://kiyutink.github.io/tokyo/tokyo1.jpg",
  "https://kiyutink.github.io/tokyo/tokyo2.jpg",
  "https://kiyutink.github.io/tokyo/tokyo3.jpg",
  "https://kiyutink.github.io/la/la3.jpg",
];

function App() {
  return (
    <div>
      <div className="container">
        {/* <h1>Click any of the files taget back</h1> */}
        {/* <h1>
                    clicke out my <a href="">pens</a> and follow me on <a href="">twitter</a>
                </h1> */}
        <ImageGallery src={imageUrls}></ImageGallery>
      </div>
    </div>
  );
}

export default App;
