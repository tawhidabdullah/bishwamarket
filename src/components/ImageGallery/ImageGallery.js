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
      const image= document.querySelector(".productDescriptionContainer____imageContainer").getElementsByTagName("img")[0];
      console.log("style", image.height);
      image.height=768;
      
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
