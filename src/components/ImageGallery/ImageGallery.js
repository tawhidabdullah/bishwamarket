import React from 'react';
import ImageGallery from 'react-image-gallery';
import ImageMagnify from "./ImageMagnify";

import 'react-image-gallery/styles/scss/image-gallery.scss';

export default class MyImageGallery extends React.Component {
  state = {
    images: [],
  };

  onFullScreenHandler=  (status)=> {
    if (status===true) {
      const image= document.querySelector(".productDescriptionContainer____imageContainer img");
      console.log("style", image);
      image.style.height=768;
      image.style.maxHeight="unset";

      const oClass= document.querySelector(".onno-bosro-slide-image div img");
      console.log(oClass, "oClass");
      oClass.classList.add("unsetMaxHeight");
      
    }
  }

  componentDidMount() {
    let images = [];
    if (this.props.images instanceof Array) {
      [...this.props.images].forEach(img => {
        images.push({
          renderItem: () => {
            return <ImageMagnify {...img} />;
          },
          thumbnail: img.thumbnail,
          originalClass: 'onno-bosro-slide-image',
          thumbnailClass: 'onno-bosro-slide-thumbnail',
        });
      });
    }
    this.setState({
      ...this.state,
      images,
    });
  }

  render() {
    return (
      <ImageGallery {...{
        thumbnailPosition: "bottom",
        showFullscreenButton: true,
        showPlayButton: true,
        fullscreen: true,
        items: this.state.images,
        onScreenChange: this.onFullScreenHandler
      }}
      />
    );
  }
}
