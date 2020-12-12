// import React from "react";
// import ReactImageMagnify from "react-image-magnify";
// // import Magnifier from "react-magnifier";

// // export default function ImageMagnify(props) {
// //   return <Magnifier src={props.original} />;
// // }


// export default function ImageMagnify(props) {
//   return (
//     <ReactImageMagnify
//       {...{
//         smallImage: {
//           alt: "",
//           isFluidWidth: true,
//           src: props.original,
//           sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
//         },
//         largeImage: {
//           src: props.original,
//           width: 1426,
//           height: 2000
//         },
//         // enlargedImagePortalId: "imageMagnefyerDiv",
//         enlargedImageContainerDimensions: {
//           width: '200%',
//           height: '100%',
//         },
//         enlargedImagePosition: 'over'
//       }}
//     />
//   );
// }


import React from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';

export default function ImageMagnify(props) {
  const propss = {
      
     img: props.original, zoomPosition: 'original'};
  return <ReactImageZoom {...propss} />;
}