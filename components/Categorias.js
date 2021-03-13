import React from  "react";
import Link from 'next/link';


export default function Categorias() {
 
  return (
    <div className="header">
      <div className="sort-list" >
       
       <div className="categoria1" ><Link href="/"><a><img src="/products/deporte.png"/><div className="cate">Deportes</div></a></Link></div>
      <div className="categoria2"><Link href="/"><a><img src="/products/carro.png" /><div className="cate">Carros</div></a></Link></div>
      <div className="categoria3"><Link href="/"><a><img src="/products/pc.png" /><div className="cate2">Computadoras</div></a></Link></div>
      <div className="categoria4"><Link href="/"><a><img src="/products/peluche.png" /><div className="cate">Regalos</div></a></Link></div>
      <div className="categoria6"><Link href="/"><a><img src="/products/tlf.png"/><div className="cate">Telefonos</div></a></Link></div>
      <div className="categoria6"><Link href="/"><a><img src="/products/chaleco.png"/><div className="cate">Seguridad</div></a></Link></div>
        <div className="categoria6"><Link href="/"><a><img src="/products/salud.png"/><div className="cate">Salud</div></a></Link></div>

       

        
      </div>
      
      
      <style jsx>{`
        .header {
          display: flex;
          
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 200px;
          background: #ffffff;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 6px;
          margin-bottom: 30px;
        }
        .cate{
          margin-left: 55px;
          
        }
        .cate2{
          margin-left: 42px;
         
        }
        .header .sort-list {
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center; 
          
        }
        .categoria1{
          width: 5px;
          font-size: 10px;
      
        }
       
        .categoria2{
          width: 40px;
          font-size: 10px;
          margin-left: 130px;
        }
        .categoria3{
          width: 20px;
          font-size: 10px;
          margin-left: 100px;
        }
        .categoria4{
          width: 30px;
          font-size: 10px;
          margin-left: 100px;
        }
        .categoria5{
          width: 30px;
         
          margin-left: 100px;
        }
        .categoria6{
          width: 30px;
          
          margin-left: 100px;
        }
        .header .sort-list a {
          box-sizing: border-box;
          margin-left: 35px;
          padding-top: 18px;
          padding-bottom: 18px;
          text-decoration: none;
          font-weight: bold;
        
          text-align: center;
          color: #b3b3b3;
        }
        .header .sort-list a.active {
          color: #1875f0;
          border-bottom: 2px solid #1875f0;
        }
        .header .sort-list a:hover {
          cursor: pointer;
        }
        @media (max-width: 850px) {
          .header {
            width: 80vw;
            justify-content: center;
            align-items: center;
          }
          .header .sort-list {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-left: 24px;
            padding-right: 24px;
          }
          .header .sort-list a {
            font-size: 12px;
            margin-left: 0px;
          }
        }
      `}</style>
    </div>
  );
}
