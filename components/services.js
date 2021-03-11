import { useQuery } from '@apollo/client';
import ProductItem from './productItem';
import EmptySection from './emptySection';
import { PRODUCTS, SORT_PRODUCT_SECTION } from '../apollo/client/queries';
import ProductsGrid from './productsGrid';
import offlineServices from '../db/offlineData/services';

export default function Services({ category }) {
  const sortQueryResult = useQuery(SORT_PRODUCT_SECTION);

  if (category) {
    var { data, loading, error } = useQuery(PRODUCTS, {
      variables: {
        field: sortQueryResult.data.sortProductSection[0],
        order: sortQueryResult.data.sortProductSection[1],
        category: category,
      },
    });
  } else if (!category) {
    var { data, loading, error } = useQuery(PRODUCTS, {
      variables: {
        field: sortQueryResult.data.sortProductSection[0],
        order: sortQueryResult.data.sortProductSection[1],
      },
    });
  }

  if (loading)
    return (
      <>
        <p className="loading">Loading...</p>
        <style jsx>{`
          .loading {
            width: 100%;
            text-align: center;
            align-self: center;
            font-size: 18px;
          }
        `}</style>
      </>
    );

  // Offline data
  if (!data?.services || error)
    return (
      <ProductsGrid>
        {offlineServices.map((service) => (
          <ProductItem
            key={service.id}
            id={service.id}
            name={service.name}
            rating={service.rating}
            img_url={service.img_url}
            price={service.price}
          />
        ))}
      </ProductsGrid>
    );

 

  return (
    <ProductsGrid>
      {data.services.map((service) => (
        <ProductItem
          key={service.id}
          id={service.id}
          name={service.name}
          rating={service.rating}
          img_url={service.img_url}
          price={service.price}
        />
      ))}
    </ProductsGrid>
  );
}
