import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Card = ({ cardItem, setcardItem }) => {
  

  //inc quantity 
  function inc(product)
  {
    const exist = cardItem.find((x) => {
      return x.id === product.id ;
    })
    setcardItem(cardItem.map((item) => {
      return item.id === product.id ? {...exist, quantity : exist.quantity + 1} : item
    }))
  }
  // dec quantity
  function dec(product)
  {
    const exist = cardItem.find((x) => {
      return x.id === product.id ;
    })
    setcardItem(cardItem.map((item) => {
      return item.id === product.id ? {...exist, quantity : exist.quantity - 1} : item
    }))
  }
  //remove product
  function removecart(product){
    const exist =cardItem.find((x)=>{
      return x.id === product.id;
    })
    if(exist.quantity > 0 ){
      setcardItem(cardItem.filter((x)=>{
        return x.id !== product.id
      }))
    }
  }
  //total price
  const TotalPrice = cardItem.reduce((price,item)=> price + item.quantity * item.price , 0);
  return (
    <>
      {cardItem.length === 0 && (
        <>
          <h2 className='empty_cart'>Cart Is Empty. Please select a product.</h2>
          <Link to="/">
            <button className='cart_shop'>Shop Now</button>
          </Link>
        </>
      )}

      <div className='cart_container'>
        <div className='cart_product'>
          {
            cardItem.map((item) => {
              return (
                <div className='cart_box' key={item.id}>
                  <div className='cart_product_container'>
                    <div className='cart_img_box'>
                      <img src={item.Img} alt={item.title}></img>
                    </div>
                    <div className='cart_item_detail'>
                      <h2>{item.title}</h2>
                      <h3>price:${item.price}</h3>

                      <button className='quantity-dec' onClick={() => dec (item)}>-</button>
                      <input type='text' value={item.quantity}></input>
                      <button className='quantity-inc' onClick={() => inc (item)}>+</button>
                      <h3>Sub Total: ${item.quantity * item.price}</h3>
                    </div>
                    <button className='remove-cart' onClick={() => removecart(item)}>X</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {
        cardItem.length > 0 &&
        <>
          <p className='cart_total'>Total:${TotalPrice}</p>
          <button className='checkout'>CheckOut</button>
        </>}
    </>
  )
}

export default Card;