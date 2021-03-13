import Link from 'next/link';

export default function Logo() {
  return (
    <>
     <img src="/products/log.png" className="logoo"/>
      <Link href="/">
       
        <a className="logo">Aliviaa.com</a>
      </Link>
      <style jsx>{`
        .logo {
          font-style: normal;
          font-weight: 900;
          font-size: 18px;
          line-height: 60px;
          letter-spacing: 1.65px;
          margin-right: 16px;
          color: white;
          text-decoration: none;
        }
        .logoo{
         margin-right: -10px;
          width: 38px;
          margin-top: -5px;
        }
      `}</style>
    </>
  );
}
