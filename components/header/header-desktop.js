import { useQuery } from '@apollo/client';
import Link from 'next/link';
import {
  FaShoppingCart,
  FaRegHeart,
  FaUser,
  FaSignOutAlt,
  FaBars,
} from 'react-icons/fa';
import { CART_COUNT } from '../../apollo/client/queries';

import Logo from '../logo';
import SearchBox from '../search-box';

export default function HeaderDesktop({ viewer }) {


  return (
    <>
      <div className="header header-top">
        <Logo />

        <SearchBox />

        <div className="nav-buttons"  style={{color: "white"}}>
         
          {!viewer && (
            <Link href="/user/login"  >
              <a className="nav-buttons-signin">
                <FaUser style={{color: "white"}} />
                <p  style={{color: "white"}}>Ingresar</p>
              </a>
            </Link>
          )}
          <Link href="/favoritos">
            <a className="nav-buttons-wishlist">
              <FaRegHeart style={{color: "white"}} />
              <p style={{color: "white"}}>Favoritos</p>
            </a>
          </Link>
          <Link href="/crearproducto">
            <a className="nav-buttons-wishlist">
             
              <p style={{color: "white"}}>Vender</p>
            </a>
          </Link>
         
          {viewer && (
            <>
            <Link href="/profile">
                <a className="nav-buttons-profile">
                  <FaUser color="white" />
                  <p>{viewer.name}</p>
                </a>
              </Link>
              <Link href="/user/signout">
                <a className="nav-buttons-signout">
                  <FaSignOutAlt />
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="header header-bottom" style={{color: "white"}}>
        <div className="all-categories-box">
          <FaBars color="white" />
          <select name="categories" id="all-categories-box">
            <option value="Todas as categorias" selected>
             Todas las categorias
            </option>
            <option value="1">Escritorio</option>
            <option value="2">Telefonos</option>
            <option value="3">Relojes</option>
            <option value="4">Juegos</option>
            <option value="5">Laptop</option>
            <option value="6">TV & Video</option>
            <option value="7">Accessorios</option>
          </select>
        </div>

       

       
      </div>
     
      <style jsx>{`
        /* Header Top */
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 10px 10vw;
          background: black;
          color: white;

         
        }
        a{
          padding: 20px;
          color: white;
          margin-left: -300px; 
        }
        .nav-buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: white;
        }
        .nav-buttons a {
          display: flex;

          flex-direction: row;
          align-items: center;
          margin-left: 32px;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          text-decoration: none;
          color: white;
        }
        .nav-buttons .items-total {
          font-size: 12px;
          align-self: flex-end;
        }
        .nav-buttons .nav-buttons-signout {
          margin-left: 12px;
          color: white;
        }
        .nav-buttons a:hover {
          text-decoration: underline;
        }
        .nav-buttons a p {
          margin-left: 8px;
        }
        .main-nav{
          color: #f47619;
          margin-left: -300px;
        }
        /* Header Bottom */
        .header-bottom {
          padding: 0px 10vw;
          border-top: 2px solid #f5f5f5;
        }
        .header-bottom .all-categories-box {
          height: 100%;
          display: flex;
          align-items: center;
          /* Border */
          border-right: 2px solid #f5f5f5;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 48px;
        }
        .header-bottom .all-categories-box select {
          height: 100%;
          padding-left: 15px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 60px;
          color: white;
          border: none;
          background: none;
        }
        .header-bottom .all-categories-box select:focus {
          outline: none;
          color: white;
        }
        .header-bottom .main-nav {
          display: flex;
          align-items: center;
          color: white;
        }
        .header-bottom .main-nav a {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: white;
          text-decoration: none;
          margin-left: 16px;
          margin-right: 16px;
        }
        .header-bottom .main-nav a:hover {
          
          color: white;
        }
        .header-bottom .settings {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: white;
        }
        .header-bottom .settings .menu-dropdown {
          /* Border */
          border-left: 2px solid #f5f5f5;
          padding: 20px 24px;
          color: white;
        }
        .header-bottom .settings .menu-dropdown p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: white;
        }
        
      `}</style>
    </>
  );
}
