
import PromoCard from './promoCard';
import HeaderBarProducts from './headerBarProducts';
import Services from './services';
import Carrusel from './Carrusel';
import Carru_products from './Carru_products';
export default function ServicioSection() {
  return (
    <section id="product">
     
      <div className="main">
        
       
       
        <div className="ca">
        <Carrusel  />
        </div>
        <h1 className="titulo">SERVICIOS</h1>
        <Services  />
      </div>

      <style jsx>{`
        #product {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 90%;
        }
        #product .main {
          flex-grow: 1;
          
        }
        .titulo{
          text-align: center;
          color: #002f34;
          margin-top: "30px";
        }
        .ca{
          margin-left: 75px;
          margin-bottom: 30px

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
