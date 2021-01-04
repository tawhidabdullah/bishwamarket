import React, { useState, useEffect, Children } from "react";
import ImageGallery from "react-image-gallery";
import ImageMagnify from "./ImageMagnify";

import "react-image-gallery/styles/scss/image-gallery.scss";

const mutationObserver = (targetNode, handler) => {
  // const config = { attributeFilter: ["class"] }; // filter the mutations you want to listen

  // const config = { attributes: true, childList: true, subtree: true }; // filter the mutations you want to listen
  const config = { childList: true }; // filter the mutations you want to listen

  const callback = function (mutationsList) {
    for (let mutation of mutationsList) {
      handler(mutation.oldValue);
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(targetNode, config);
};

const MyImageGallery = (props) => {
  const [images, setimages] = useState([]);

  const [Status, setStatus] = useState(false);

  const [CurrentIndex, setCurrentIndex] = useState(0);

  const onFullScreenHandler = (status) => {
    const oClass = document.querySelector(".onno-bosro-slide-image div");

    if (status === true) {
      oClass.classList.add("unsetMaxHeight");
      setStatus(true);
    } else {
      oClass.classList.remove("unsetMaxHeight");
      setStatus(false);
    }
  };

  const imageChangeHandler = (currentIndex) => {
    const oClass = document.querySelector(".onno-bosro-slide-image div");
    setCurrentIndex(currentIndex);
    console.log({ currentIndex });
    if (Status) {
      oClass.classList.add("unsetMaxHeight");
    } else {
      oClass.classList.remove("unsetMaxHeight");
    }
  };

  const myHandler = () => {
    // debugger;
    console.log("handler");
    const oClass = document.querySelector(".onno-bosro-slide-image div");
    if (Status) {
      oClass.classList.add("unsetMaxHeight");
    } else {
      oClass.classList.remove("unsetMaxHeight");
    }
  };

  useEffect(() => {
    const oClass = document.querySelector(".image-gallery-slides");

    console.log({ oClass });

    if (Status && CurrentIndex !== 0) {
      mutationObserver(oClass, myHandler);
    }
  }, [CurrentIndex, Status]);

  useEffect(() => {
    let images = [];
    if (props.images instanceof Array) {
      [...props.images].forEach((img) => {
        images.push({
          renderItem: () => {
            return <ImageMagnify {...img} />;
          },
          thumbnail: img.thumbnail,
          originalClass: "onno-bosro-slide-image",
          thumbnailClass: "onno-bosro-slide-thumbnail",
        });
      });
    } else {
      images.push();
    }
    setimages(images);
  }, []);

  useEffect(() => {
    console.log(props.imgCntr.current.childNodes[0].children.style, "imgCntr");
  }, [Status]);

  return (
    <ImageGallery
      {...{
        thumbnailPosition: "bottom",
        showFullscreenButton: true,
        showPlayButton: false,
        fullscreen: true,
        items: images,
        onScreenChange: onFullScreenHandler,
        useBrowserFullscreen: false,
        onSlide: imageChangeHandler,
      }}
    />
  );
};

export default MyImageGallery;
