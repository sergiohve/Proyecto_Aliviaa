import Carousel from "./Carousel";

import { LayoutWrapper, GridContainer } from "./utils/Grid";

const Carru_products = () => {
  return (
    <LayoutWrapper >
      <GridContainer>
      <h1>Servicios</h1>
        <Carousel />
      </GridContainer>
    </LayoutWrapper>
  );
};
export default Carru_products;