

import HeaderBarProducts from './headerBarProducts';
import Categorias from "./Categorias";
import Products from './products';
import Carrusel from './Carrusel';


export default function ProductSection({ category }) {
  return (
    <section id="product">
     
      <div className="main">

       
       <HeaderBarProducts/>
      <Categorias/>
    
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
          
          width: 100%;
        }
        #product .main {
          flex-grow: 1;
          
        }
        .titulo{
          text-align: center;
          color: #002f34;
        }
        .ca{
         padding-left: 50px;
          padding-bottom: 50px;
          margin-left: -100px;
          width: 1245px;
          
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
