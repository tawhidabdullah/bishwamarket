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
    if (status === true) {
      addHandler();
      setStatus(true);
    } else {
      removeHandler();
      setStatus(false);
    }
  };

  const imageChangeHandler = (currentIndex) => {
    if (Status) {
      addHandler();
    } else {
      removeHandler();
    }
  };

  const [isSetMaxHeight, setisSetMaxHeight] = useState(false);

  const addHandler = () => {
    const oClass = document.querySelectorAll(".onno-bosro-slide-image div");
    //@ts-ignore
    Array.from(oClass).forEach(function (item) {
      item.classList.add("unsetMaxHeight");
    });
  };

  const removeHandler = () => {
    const oClass = document.querySelectorAll(".onno-bosro-slide-image div");
    //@ts-ignore
    Array.from(oClass).forEach(function (item) {
      item.classList.remove("unsetMaxHeight");
    });
  };

  useEffect(() => {
    const slides = document.querySelectorAll(".onno-bosro-slide-image div");
    console.log({ slides });
  }, [isSetMaxHeight]);

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
      images.push({
        renderItem: () => {
          return <ImageMagnify single={props.images} />;
        },
        thumbnail: props.images,
        originalClass: "onno-bosro-slide-image",
        thumbnailClass: "onno-bosro-slide-thumbnail",
      });
    }
    setimages(images);
  }, []);

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
