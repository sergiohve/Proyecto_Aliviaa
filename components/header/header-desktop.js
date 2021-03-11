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

        <div className="nav-buttons"  style={{color: "black"}}>
         
          {!viewer && (
            <Link href="/user/login"  >
              <a className="nav-buttons-signin">
                <FaUser style={{color: "black"}} />
                <p  style={{color: "black"}}>Ingresar</p>
              </a>
            </Link>
          )}
          <Link href="/favoritos">
            <a className="nav-buttons-wishlist">
              <FaRegHeart style={{color: "black"}} />
              <p style={{color: "black"}}>Favoritos</p>
            </a>
          </Link>
         
          {viewer && (
            <>
            <Link href="/profile">
                <a className="nav-buttons-profile">
                  <FaUser color="black" />
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
      <div className="header header-bottom" style={{color: "#002f34"}}>
        <div className="all-categories-box">
          <FaBars color="black" />
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

        <nav className="main-nav" >
          <Link href="/">
            <a>Productos</a>
          </Link>
         
          <Link href="/servicios">
            <a>Servicios</a>
          </Link>
        </nav>

       
      </div>
     
      <style jsx>{`
        /* Header Top */
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 10px 10vw;
          background: #3A84DC;
          color: #f47619;
         
        }
        a{
          padding: 20px;
          color: #f47619;
          margin-left: -300px; 
        }
        .nav-buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: #f47619;
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
          color: #f47619;
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
          color: black;
          border: none;
          background: none;
        }
        .header-bottom .all-categories-box select:focus {
          outline: none;
          color: black;
        }
        .header-bottom .main-nav {
          display: flex;
          align-items: center;
          color: black;
        }
        .header-bottom .main-nav a {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: black;
          text-decoration: none;
          margin-left: 16px;
          margin-right: 16px;
        }
        .header-bottom .main-nav a:hover {
          
          color: black;
        }
        .header-bottom .settings {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: black;
        }
        .header-bottom .settings .menu-dropdown {
          /* Border */
          border-left: 2px solid #f5f5f5;
          padding: 20px 24px;
          color: black;
        }
        .header-bottom .settings .menu-dropdown p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: black;
        }
        
      `}</style>
    </>
  );
}
