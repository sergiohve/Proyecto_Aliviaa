

import HeaderBarProducts from './headerBarProducts';
import Services from './services';
import Carrusel from './Carrusel';
import Categorias from "./Categorias";


export default function ServicioSection() {
  return (
    <section id="product">
     
      <div className="main">
        
      <HeaderBarProducts/>
      <Categorias/>
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
          width: 100%;
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
          padding-left: 50px;
          padding-bottom: 50px;
          margin-left: -160px;

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
