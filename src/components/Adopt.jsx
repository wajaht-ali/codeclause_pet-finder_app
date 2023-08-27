import React from 'react'
import "../styling/Adopt.scss";
import data from "../assets/database.json";
import Footer from './Footer';

const Adopt = () => {
  return (
    <div className='main'>
      <div className='adoption'>
        <div className="headings">
          <h1>Find Your Pet for Adoption here: </h1>
          <div className="btns">
            <button>Dogs</button>
            <button>Cats</button>
            <button>Rabbits</button>
            <button>Fishes</button>
          </div>
        </div>
        <div className="cards">

          {
            data.adoptions.map(i => (
              <div className='card'>
                <img src={i.img} alt={i.firstname} />
                <h2>{i.firstname}</h2>
                <p>{i.about}</p>
                <span>
                  <h3>Type: {i.category}</h3>
                  <button>Adopt!</button>
                </span>
              </div>
            ))
          }

        </div>
      <div className="footer">
        <Footer />
      </div>
      </div>
    </div>
  )
}


// const petCard = ({ petName, imgSrc, description, type }) => {
//   return (
//     <div className="pet-collections">
//       <img src={imgSrc} alt={petName} />
//       <h2>{petName}</h2>
//       <p>{description}</p>
//       <p>{type}</p>
//       <div className="buttons">
//         <button>Adopt!</button>
//       </div>
//     </div>
//   )

// }
export default Adopt