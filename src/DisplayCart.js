import React from 'react'
import PropTypes from 'prop-types';
import removeIcon from './close_red.png'
const DisplayCart =(props)=>
{
    return (
      <table className="table table-striped">
      <thead>
        <tr>
          <th>ITEM NAME</th>
          <th>QUANITY</th>
          <th>PRICE</th>
          <th>REMOVE</th>
        </tr>
      </thead>
      <tbody>
        {props.shoppingCart.map((item)=>{
          return <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td><img src={removeIcon} alt="REMOVE" width={25} height={25} onClick={()=>props.removeItem(item)}/></td>
          </tr>
        })
        }
        <tr>
          <td></td>
          <td>TOTAL :</td>
          <td>{props.total}</td>
          <td></td>
        </tr>
        </tbody>
      </table>
    )

}
DisplayCart.propTypes={
  id:PropTypes.number,
  name:PropTypes.string,
  quantity:PropTypes.number,
  price:PropTypes.number
}
export default DisplayCart;
