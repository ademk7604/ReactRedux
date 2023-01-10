import React from "react";
import "./gallery.scss";
import images from "./images.json";
const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((img, i) => (
        <div key={i}>
          <img src={require(`../../assets/img/${img.name}`)} alt="" />{/* bu sekilde birden fazla img gosterilebiliyor */}
        </div>
      ))}
    </div>
  );
  /* neden $ kullandik bectik kullanirken SJ kullanirken $ ve {} kullanarak bir sey goruyoruz.  */
};
export default Gallery;
