import Head from 'next/head';

export default function PageContainer({ title, description, children }) {
  return (
    <div className="container">
      <Head>
        <title>{title || 'ALIVIAA'}</title>
        {description !== false && (
          <meta
            name="description"
            content={
              description ||
              'ECOMMERCE ALIVIA'
            }
          />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <style jsx>{`
        main {
          display: flex;
          background-color: #fafafa;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-family: Roboto;
        }
      `}</style>
    </div>
  );
}
