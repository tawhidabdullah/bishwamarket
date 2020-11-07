import React from "react";
import styled from "styled-components";

import image1 from "../../../assets/blog/1.jpg"
const BlogItem = () => {
  return (
  
      <BlogContain>
        <BlogImage>
          <img src={image1} alt="blog" className="img-fluid  w-100" />
        </BlogImage>
        <BlogDetails>
          <h4>Latest News Post</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eleifend a massa rhoncus
            gravida.iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            cristiano
          </p>
          <span>
            <a href="#">read more</a>
          </span>
        </BlogDetails>
        <Date>
          <p>25 july 2018</p>
        </Date>
      </BlogContain>
    
  );
};

export default BlogItem;

const BlogContain = styled.div`
  position: relative;
  min-width: 240px;
  margin: 10px;
`;
const BlogImage = styled.div`
  overflow: hidden;
  border: 2px solid #fff;
  width: 100%;
  & img {
    width: 100%;
    transition: all 0.5s;
  }
  &:hover img {
    transform: scale(1.2);
    overflow:hidden;
  }
`;
const BlogDetails = styled.div`
  background-color: #fff;

  display: flex;
  flex-wrap: wrap;

  & h4 {
    color: #444;
    margin-bottom: 7px;
    font-size: calc(17px + (18 - 17) * ((100vw - 320px) / (1920 - 320)));

    font-weight: 400;
    padding: 10px;
  }

  & p {
    color: gray;
    text-transform: capitalize;
    margin-bottom: 5px;
  
    padding: 10px ;
  }

  & a {
    text-decoration: none;
    background-color: transparent;
    padding: 10px;
    color: #ff6000;
    text-transform: capitalize;
    font-weight: 700;

    line-height: 1;
    font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  }
`;

const Date = styled.div`
  position: absolute;
  top: 5%;
  left: 0;
  background-color: #ff6000;
  padding: 2px 10px;
  color: #fff;
`;