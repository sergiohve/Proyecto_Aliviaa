
import PromoCard from './promoCard';
import HeaderBarProducts from './headerBarProducts';
import Servicios from './Servicios';
import Carrusel from './Carrusel';

export default function ServicioSection() {
  return (
    <section id="product">
     
      <div className="main">
        <HeaderBarProducts />
        <div className="ca">
        <Carrusel  />
        </div>

        <Servicios  />
      </div>

      <style jsx>{`
        #product {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
        }
        #product .main {
          flex-grow: 1;
          padding-left: 30px;
        }
        .ca{
          margin-left: 100px;
          paddingBottom: 100px
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
