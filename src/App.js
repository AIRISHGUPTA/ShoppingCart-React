import React, { Component } from 'react';
import './App.css';
import DisplayCart from './DisplayCart'
class App extends Component {
  state={
    shoppingCart:[],
    name:"",
    quantity:0,
    price:0,
    enableSubmit:true,
    total:0
  }
  updateValue=(event)=>
  {
    let tagName=event.target.name;
    let targetValue=event.target.value;
    if((tagName==='quantity' || tagName==='price' )&& targetValue!=='')
      {targetValue=parseInt(targetValue);}
    this.setState({
      [tagName]:targetValue
    });
    if(targetValue==='')
    {
      this.setState({enableSubmit:true})
      return;
    }
    if(this.state.name !== "" && this.state.quantity !== 0 && this.state.price !== 0)
    {
      this.setState({enableSubmit:false});
    }
  }
  addItem=()=>{
    let totalAmmount=this.state.total+this.state.price*this.state.quantity;
    let obj={id:new Date().getTime(),name:this.state.name,quantity:this.state.quantity,price:this.state.price};
    this.setState({shoppingCart:[...this.state.shoppingCart,obj],name:"",price:0,quantity:0,enableSubmit:true,total:totalAmmount});
  }
  removeItem=(item)=>{
    this.setState({
      shoppingCart:this.state.shoppingCart.filter((data)=>data.id!==item.id),
      total:this.state.total-item.price*item.quantity
    })
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1> SHOP </h1>
          <form id="form1">
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input type="text" className="form-control" value={this.state.name} name="name" onChange={this.updateValue}/>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">QUANITY</label>
              <input type="number" className="form-control" value={this.state.quantity} name="quantity" onChange={this.updateValue}/>
            </div>
            <div className="form-group">
              <label htmlFor="price">UNIT PRICE</label>
              <input type="number" className="form-control" value={this.state.price} name="price" onChange={this.updateValue}/>
            </div>
          </form>
          <button className="btn btn-primary" onClick={this.addItem} disabled={this.state.enableSubmit}> ADD </button>
        </div>
        <br/><br/>

        <h1> CART </h1>
        <DisplayCart shoppingCart={this.state.shoppingCart} total={this.state.total} removeItem={this.removeItem}/>
      </div>
    );
  }
}

export default App;
