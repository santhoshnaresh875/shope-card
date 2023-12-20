import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './comp/Nav';
import Rout from './comp/Rout';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

  const [cardItem, setcardItem] = useState([]);

  const addtocart = (product) => {
    const exist = cardItem.find((x) => {
      return x.id === product.id;
    })
    if (exist) {
      alert("This product is already added")
    }
    else {
      setcardItem([...cardItem, { ...product, quantity: 1 }])
    }
    console.log(setcardItem);
  }
  return (
    <>
      <Router>
        <Nav />
        <Rout addtocart={addtocart} cardItem={cardItem} setcardItem={setcardItem} />
      </Router>

    </>
  )
}

export default App
