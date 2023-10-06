import React from 'react'
import { Graph} from 'phosphor-react';
import { Link } from 'react-router-dom';
function Navbar() {
  const styles={
    container:{
    
      height:'14vh',
      width:'100%',
      margin:'0px',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-evenly'
    },
    list:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
      listStyleType:'none',
      textDecoration:'none',
      color:'white',
      width:'60%'
    }
  }
  return (
    <nav style={styles.container}>
      <ul style={styles.list}>
        <li >
          <Graph color='#13f287'/>
          <Link style={{textDecoration:'none',color:'white'}} to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link style={{textDecoration:'none',color:'white'}} to="/AddProducts">Add Product</Link>
        </li>
        <li>
          <Link style={{textDecoration:'none',color:'white'}} to="/Products">Inventory Search</Link>
        </li>
        <li>
          <Link style={{textDecoration:'none',color:'white'}} to="/SellProductScreen">Checkout</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar