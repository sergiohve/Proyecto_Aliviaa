/* Carousel component  ️ */
import Slider from "react-styled-carousel";
import styled from "styled-components";




const responsive = [
  
  { breakPoint: 1280, cardsToShow: 4 }, 
  { breakPoint: 1024, cardsToShow: 3 },
 
  { breakPoint: 760, cardsToShow: 2 },
  { breakPoint: 600, cardsToShow: 2 },
  { breakPoint: 480, cardsToShow: 1 },
];

const Carousel = () => (
  <div>
    <Slider
      responsive={responsive}
      autoSlide={2000}
      pauseOnMouseOver={true}
      cardsToShow={5}
      showArrows={true}
      showDots={false}
      infinite={true}
    >
      {/* 1 */}

      <CardContainer>
        <Card>
          {" "}
          <img
            src="https"
            alt="Dorman Engineering"
            width="150px"
            height="80px"
          />
        </Card>
      </CardContainer>
      {/* 2 */}
      <CardContainer>
        <Card>
          {" "}
          <img  src="https" alt="GTBank" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 3 */}
      <CardContainer>
        <Card>
          {" "}
          <img  src="https" alt="Main One" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 4 */}
      <CardContainer>
        <Card>
          {" "}
          <img
            src="https"
            alt="Reedemer University"
            width="150px"
            height="80px"
          />
        </Card>
      </CardContainer>
      {/* 5 */}
      <CardContainer>
        <Card>
          {" "}
          <img  src="https" alt="Seven Energy" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 6 */}
      <CardContainer>
        <Card>
          {" "}
          <img  src="https" alt="Sterling Bank" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 7 */}
      <CardContainer>
        <Card>
          {" "}
          <img  src="https" alt="UBA" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 8 */}
      <CardContainer>
        <Card>
          {" "}
          <img  src="https" alt="VDT" width="150px" height="80px" />
        </Card>
      </CardContainer>
      {/* 9 */}
      <CardContainer>
        <Card>
          {" "}
          <img  src="https" alt="Zenith Bank" width="150px" height="80px" />
        </Card>
      </CardContainer>
    </Slider>
  </div>
);

/*   Styled Components:
  CardContainer * Card
  */
const CardContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 20px;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  align-items: space-between;
  align-self: center;
  padding: 30px;
  background: white;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(96, 37, 102, 0.5);
  border-radius: 10px;
`;

export default Carousel;

