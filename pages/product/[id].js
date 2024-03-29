import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import {
  FaCartArrowDown,
  FaCartPlus,
  FaRegHeart,
  FaHeart,
} from 'react-icons/fa';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import { PRODUCTS_BY_IDS, CART, WISHLIST } from '../../apollo/client/queries';
import Page from '../../components/page';
import ErrorAlert from '../../components/alerts/error';
import { toggleCart, toggleWishlist } from '../../utils/toggleProductStates';
import Carrusel from '../../components/Carrusel';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const cart = useQuery(CART);
  const wishlist = useQuery(WISHLIST);

  const { data, loading, error } = useQuery(PRODUCTS_BY_IDS, {
    variables: {
      id,
    },
  });

  if ((error || !data?.productsById.length) && !loading) {
    return (
      <Page title="ALIVIAA">
        <ErrorAlert message="ESTE PRODUCTO NO HA SIDO ENCONTRADO!"></ErrorAlert>
      </Page>
    );
  } else if (loading) {
    return (
      <Page title="ALIVIAA">
        <p>Loading...</p>
      </Page>
    );
  }

  return (
    <Page title="ALIVIAA">
      <article>
        <div className="top-buttons">
          <button
            className="add-wishlist"
            onClick={() => toggleWishlist(data.productsById[0].id)}
          >
            {wishlist.data.wishlist.products.includes(
              data.productsById[0].id
            ) && <FaHeart size={20} color="#D8D8D8" />}
            {!wishlist.data.wishlist.products.includes(
              data.productsById[0].id
            ) && <FaRegHeart size={20} color="#D8D8D8" />}
          </button>
        </div>
         
        <div className="product-img">
          <Image src={data.productsById[0].img_url} width="320" height="230" />
        </div>
        <div className="descripcion">
        <h1 className="product-name">{data.productsById[0].name}</h1>

        <h3 className="product-description">
          {data.productsById[0].description}
        </h3>

        <div className="rating">
          <StarRatings
            rating={parseFloat(data.productsById[0].rating)}
            starRatedColor="#F9AD3D"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="1px"
          />
        </div>

        <div className="price">
          <p className="price-value">${data.productsById[0].price}</p>
          <button
            className="add-cart"
            onClick={() => toggleCart(data.productsById[0].id)}
          >
            {cart.data.cart.products.includes(data.productsById[0].id) && (
              <FaCartArrowDown size={24} color="#D8D8D8" />
            )}
            {!cart.data.cart.products.includes(data.productsById[0].id) && (
              <FaCartPlus size={24} color="#D8D8D8" />
            )}
          </button>
        </div>
        </div>
        

        <style jsx>{`
          article {
            display: flex;
            align-items: center;
            flex-direction: row;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            padding: 24px;
            
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
            border-radius: 6px;

          }
          .descripcion{
            flex-direction: column;
            text-align: center;
            align-items: center;
          
          }
          .top-buttons {
            margin-bottom: 24px;
            align-self: flex-end;
          }
          .top-buttons .add-wishlist {
            background: none;
            border: none;
          }
          .top-buttons .add-wishlist:focus {
            outline: none;
          }
          .product-img {
            margin-bottom: 28px;
          }
          .product-name {
            width: 80%;
            line-height: 20px;
            text-decoration: none;
            font-weight: 500;
            font-size: 22px;
            text-align: center;
            color: #666666;
            margin-bottom: 28px;
            margin-left: 100px;
          }
          .product-description {
            width: 90%;
            line-height: 22px;
            text-decoration: none;
            font-weight: 400;
            font-size: 14px;
            text-align: justify;
            color: #666666;
            margin-bottom: 24px;
            margin-left: 100px;
          }
          .rating {
            margin-bottom: 18px;
            margin-left: 40px;
          }
          .price {
            display: flex;
            align-items: center;
            font-weight: 900;
            font-size: 20px;
            color: #666666;
            margin-bottom: 20px;
            margin-left: 400px;
          }
          .price .add-cart {
            background: none;
            border: none;
          
          }
          .price .add-cart:focus {
            outline: none;
          }
          @media (max-width: 1000px) {
            .product-img {
              width: 225px;
              height: 180px;
              margin-bottom: 28px;
            }
            .product-name {
              width: 80%;
              line-height: 20px;
              text-decoration: none;
              font-weight: 500;
              font-size: 18px;
              text-align: center;
              color: #666666;
              margin-bottom: 18px;
            }
            .product-description {
              width: 80%;
              line-height: 22px;
              text-decoration: none;
              font-weight: 400;
              font-size: 14px;
              text-align: center;
              color: #666666;
              margin-bottom: 18px;
            }
          }
        `}</style>
      </article>
     
    </Page>
  );
}
