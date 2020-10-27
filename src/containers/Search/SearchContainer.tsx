import React,{useEffect,useRef} from 'react'
import styled from "styled-components"
import { SearchContain } from "../../components/Search/SearchContain/";
import { SearchField } from "../../components/Search/SearchField";
import { ProductsByCategory } from "../../components/Slider/ProductsByCategory";
import image1 from "../../assets/dropdown.png";


 const SearchContainer = () => {
const ListRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  // useEffect(() => {
  //   if (ListRef && ListRef.current) {
  //     ListRef.current.focus();
  //   }
  // }, []);
  const handle=(val)=>{
   
    var myCollection = Array.from(document.getElementsByClassName("hOgxnO")as HTMLCollectionOf<HTMLElement>);



  
    if (myCollection[val].style.display === "none") {
     myCollection[val].style.display = "block";
    } else {
     myCollection[val].style.display = "none";
    }
  
  }
   return (
     <Section>
       <SearchContain title={"search"} />
       <SearchField />
       <InterSection>
         <LeftContent>
           <Tag onClick={(e) => handle(0)}>
             <h3 className="collapse-block-title mt-0">brand</h3>
           </Tag>
           <TagList ref={ListRef}>
             <div>
               <input
                 type="checkbox"
                 id="vehicle1"
                 name="vehicle1"
                 value="Bike"
               />
               <label> I have a bike</label>
             </div>
             <div>
               <input
                 type="checkbox"
                 id="vehicle2"
                 name="vehicle2"
                 value="Car"
               />
               <label> I have a car</label>
             </div>

             <div>
               <input
                 type="checkbox"
                 id="vehicle3"
                 name="vehicle3"
                 value="Boat"
               />
               <label> I have a boat</label>
             </div>
           </TagList>

           <Tag onClick={(e) => handle(1)}>
             <h3 className="collapse-block-title mt-0">brand</h3>
           </Tag>
           <TagList ref={ListRef}>
             <div>
               <input
                 type="checkbox"
                 id="vehicle1"
                 name="vehicle1"
                 value="Bike"
               />
               <label> I have a bike</label>
             </div>
             <div>
               <input
                 type="checkbox"
                 id="vehicle2"
                 name="vehicle2"
                 value="Car"
               />
               <label> I have a car</label>
             </div>

             <div>
               <input
                 type="checkbox"
                 id="vehicle3"
                 name="vehicle3"
                 value="Boat"
               />
               <label> I have a boat</label>
             </div>
           </TagList>

        


         </LeftContent>
         <div>content</div>
       </InterSection>

       <Main>
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
       </Main>
     </Section>
   );
 };








const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(240, auto);

  max-width: 1400px;
  margin: 0 auto;
  justify-items: center;

  margin-left: 10px;
  margin-right: 20px;

  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 980px) and (min-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  @media only screen and (max-width: 630px) and (min-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  @media only screen and (max-width: 1200px) and (min-width: 980px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Section = styled.div``;



const InterSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const LeftContent = styled.div`
  background-color: #fff;
`;
const TagList = styled.div`
  /* display: none; */
`;

const Tag = styled.div`
  background-image: url(${image1});
  background-position-x: 80%;
  background-position-y: 5%;
  background-size: 10px 10px;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
  cursor: pointer;
`;

export default SearchContainer;