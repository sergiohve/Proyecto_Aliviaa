import { sortProductSectionVar } from '../apollo/client/cache';
import { useQuery } from '@apollo/client';
import { SORT_PRODUCT_SECTION } from '../apollo/client/queries';
import Link from 'next/link';
export default function HeaderBarProducts() {
  const { data } = useQuery(SORT_PRODUCT_SECTION);

  function handlePopularProductsClick() {
    sortProductSectionVar(['rating', 'DESC']);
  }
  function handleLowPriceProductsClick() {
    sortProductSectionVar(['price', 'ASC']);
  }
  function handleHighPriceProductsClick() {
    sortProductSectionVar(['price', 'DESC']);
  }

  return (
    <div className="header">
      <div className="sort-list" style={{color: "#002f34"}}>
       
        <Link href="/"> 
        <a>
          Productos 
        </a>
        </Link>
         <Link href="/servicios">
        <a>Servicios 
        </a>
         </Link>
        
      </div>
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: #ffffff;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 6px;
          margin-bottom: 30px;
        }
        .header .sort-list {
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .header .sort-list a {
          box-sizing: border-box;
          margin-left: 35px;
          padding-top: 18px;
          padding-bottom: 18px;
          text-decoration: none;
          font-weight: bold;
          font-size: 13px;
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
