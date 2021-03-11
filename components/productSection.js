
import PromoCard from './promoCard';
import HeaderBarProducts from './headerBarProducts';
import Products from './products';
import Carrusel from './Carrusel';
import Carru_products from './Carru_products';

export default function ProductSection({ category }) {
  return (
    <section id="product">
     
      <div className="main">

       
       
        <div className="ca">
        <Carrusel  />

        </div>
        <h1 className="titulo">PRODUCTOS</h1>
        <Products category={category} />
      </div>

      <style jsx>{`
        #product {
          display: flex;
          flex-direction: row;
          
          width: 90%;
        }
        #product .main {
          flex-grow: 1;
          padding-left: 20px;
        }
        .titulo{
          text-align: center;
          color: #002f34;
        }
        .ca{
         padding-left: 50px;
          padding-bottom: 50px;
          
        }
        @media (max-width: 900px) {
          #product .main {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
