import Link from 'next/link';

export default function Logo() {
  return (
    <>
     <img src="/products/log.png" className="logoo"/>
      <Link href="/">
       
        <a className="logo">ALIVIAA.com</a>
      </Link>
      <style jsx>{`
        .logo {
          font-style: normal;
          font-weight: 900;
          font-size: 22px;
          line-height: 60px;
          letter-spacing: 1.65px;
          text-transform: uppercase;
          color: white;
          text-decoration: none;
        }
        .logoo{
        
          width: 60px;
        }
      `}</style>
    </>
  );
}
