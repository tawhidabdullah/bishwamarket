import React from "react";
import styled from "styled-components";

import image1 from "../../../assets/blog/1.jpg"
const BlogItem = () => {
  return (
    <Content>
      <BlogContain>
        <BlogImage>
          <img src={image1} alt="blog" className="img-fluid  w-100" />
        </BlogImage>
        <BlogDetails>
          <h4>Latest News Post</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eleifend a massa rhoncus gravida.
          </p>
          <span>
            <a href="#">read more</a>
          </span>
        </BlogDetails>
        <Date>
          <p>25 july 2018</p>
        </Date>
      </BlogContain>
    </Content>
  );
};

export default BlogItem;

const Content = styled.div`

 
  padding:5px;
`;
const BlogContain = styled.div`
  margin-right: 15px;
  position: relative;
`;
const BlogImage = styled.div`
  overflow: hidden;
  border: 2px solid #fff;
  
`;
const BlogDetails = styled.div`
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  & h4 {
    color: #444;
    margin-bottom: 13px;
    font-size: calc(17px + (18 - 17) * ((100vw - 320px) / (1920 - 320)));
    letter-spacing: 1px;
    font-weight: 600;
  }

  & p {
    color: gray;
    text-transform: capitalize;
    margin-bottom: 5px;
    letter-spacing: 0.5px;
  }

  & a {

 

    text-decoration: none;
    background-color: transparent;

    color: #ff6000;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: 0.03em;
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