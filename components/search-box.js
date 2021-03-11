import { FaSearch } from 'react-icons/fa';

export default function SearchBox() {
  return (
    <>
     
      <div className="search-box" >
       
        <button className="search-button">
          <FaSearch color="#002f34" background="#002f34" size="15px" />  
        </button>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Encuentra automóviles, telefonos, laptops y más"
       
        />
       
      </div>
      <style jsx>{`
        .search-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding-left: 12px;
          padding-right: 12px;
          height: 42px;
          background: #ffffff;
          border: 2px solid black;
          box-sizing: border-box;
          border-radius: 5px;
          color: "#002f34"
        }
        .search-box .search-button {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          color: #002f34;
          height: 100%;
        }
        .search-box .search-button:focus {
          outline: none;
          color: #002f34;
        }
        .search-box .search-button:hover {
          opacity: 40%;
        }
        .search-box input {
          width: 300px;
          height: 100%;
          border: none;
          padding-left: 8px;
        }
        .search-box input:focus {
          outline: none;
        }
        .search-box select {
          align-self: flex-end;
          max-width: 120px;
          height: 100%;
          text-transform: uppercase;
          font-style: normal;
          font-weight: 900;
          font-size: 10px;
          letter-spacing: 1px;
          color: #b2b2b2;
         
          background: none;
        }
        .search-box select:focus {
          outline: none;
        }
      `}</style>
    </>
  );
}
