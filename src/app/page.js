"use client";
import DateCounter from "../../components/dateCounter";
import styles from "./page.module.css";
import { useRef } from "react";

export default function Index() {
  let steps = 0;
  let currentIndex = 0;
  let nbOfImages = 0;
  let maxNumberOfImages = 8;
  let refs = [];

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;

    steps += Math.abs(movementX) + Math.abs(movementY);

    if (steps >= currentIndex * 150) {
      moveImage(clientX, clientY);

      if (nbOfImages == maxNumberOfImages) {
        removeImage();
      }
    }

    if (currentIndex == refs.length) {
      currentIndex = 0;
      steps = -150;
    }
  };

  const moveImage = (x, y) => {
    const currentImage = refs[currentIndex].current;
    currentImage.style.left = x + "px";
    currentImage.style.top = y + "px";
    currentImage.style.display = "block";
    currentIndex++;
    nbOfImages++;
    setZIndex();
  };

  const setZIndex = () => {
    const images = getCurrentImages();
    for (let i = 0; i < images.length; i++) {
      images[i].style.zIndex = i;
    }
  };

  const removeImage = () => {
    const images = getCurrentImages();
    images[0].style.display = "none";
    nbOfImages--;
  };

  const getCurrentImages = () => {
    let images = [];
    let indexOfFirst = currentIndex - nbOfImages;
    for (let i = indexOfFirst; i < currentIndex; i++) {
      let targetIndex = i;
      if (targetIndex < 0) targetIndex += refs.length;
      images.push(refs[targetIndex].current);
    }
    return images;
  };

  return (
    <main>
      <div className="summer">
        <img src="./summer.png" />
      </div>

      <div
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className={styles.main}
      >
        {[...Array(20).keys()].map((_, index) => {
          const ref = useRef(null);
          refs.push(ref);
          return (
            <img
              onClick={() => {
                console.log(refs);
              }}
              ref={ref}
              key={index}
              src={`/images/${index}.jpg`}
              className="imagedesktop"
            ></img>
          );
        })}
      </div>
      <div className={styles.mobilemain}>
        {[...Array(20).keys()].map((_, index) => {
          return (
            <img
              src={`/images-mobile/${index}.jpg`}
              key={index}
              className={styles.imagemobile}
            ></img>
          );
        })}
      </div>

      <footer>
        <div>
          <DateCounter />
          <br />
          <p>
            PHOTOGRAPHIC EXHIBIT BY <strong>BORIS KIROV & NUNO CRUZ</strong>
          </p>
        </div>
        <br />
        <div>
          <p>
            PART OF PIROLITO & CONTACT{" "}
            <strong>ART, MUSIC, FRIEND & FERMENTED GRAPES</strong>
          </p>
          <p>
            DATE <strong>22 MARCH</strong>
          </p>
          <p>
            ADDRESS <strong> CONTACTWEG 47, AMSTERDAM</strong>
          </p>
          <p>
            TIME <strong> 1PM TO 10PM </strong>(OR LATER)
          </p>
        </div>
        <br />
        <br />
        <audio autoPlay loop controls className="audio">
          <source src="./Summer-In-The-City(1).mp3" type="audio/mpeg"></source>
        </audio>
      </footer>
    </main>
  );
}
