import React from 'react';
import ImageGallery from 'react-image-gallery';
import ImageMagnify from "./ImageMagnify";

import 'react-image-gallery/styles/scss/image-gallery.scss';

export default class MyImageGallery extends React.Component {
  state = {
    images: [],
  };

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
        showFullscreenButton: false,
        showPlayButton: false,
        items: this.state.images,
      }}
      />
    );
  }
}
