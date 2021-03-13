export default function ProductsGrid({ children }) {
  return (
    <div className="products-grid">
      {children}
      <style jsx>{`
        .products-grid {
          display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows:430px;
  grid-gap: 20px;
        }
        @media (min-width: 1650px) {
          .products-grid {
           display: grid;
         grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 430px;
       grid-gap: 20px;
          }
        }
        @media (max-width: 1360px) {
          .products-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 430px;
            grid-gap: 20px;
          }
        }
        @media (max-width: 700px) {
          .products-grid {
            grid: auto-flow / 1fr;
          }
        }
      `}</style>
    </div>
  );
}
