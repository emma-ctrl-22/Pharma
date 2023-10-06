import React, { useState } from 'react';


function AddProducts() {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [retail, setretail] = useState('');
  const [cost, setcost] = useState('');
  const styles = {
    container:{
      height:'80vh',
      width:'98vw',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
  }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={styles.container}>
      <h2 style={{fontFamily:'sans-serif',color:'#A1A1A1',fontSize:'0.9rem',fontWeight:100,marginTop:0}}>Add New Product</h2>
      <h2 style={{fontFamily:'sans-serif',color:'#ffffff',fontSize:'1.3rem',fontWeight:300,marginTop:0}}>General Information</h2>
      <div style={{background:'#282c34',borderRadius:10,width:'30%',height:'70vh',display:'flex',flexDirection:'column',padding:'2%'}}>
      <label style={{color:'#ffffff',fontWeight:500,background:'#282c34'}} htmlFor="productName">Product Name:</label>
      <input
      style={{border:'solid',borderColor:'#ffffff',background:'#282c34',borderWidth:'1px',height:'4vh',width:'90%',borderRadius:5,color:'#ffffff',textTransform:'uppercase',marginTop:'2%' }}
        type="text"
        
        id="productName"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <label style={{color:'#ffffff',fontWeight:500,background:'#282c34',marginTop:'5%'}} htmlFor="productQuantity">Quantity:</label>
      <input
       style={{border:'solid',borderColor:'#ffffff',background:'#282c34',borderWidth:'1px',height:'4vh',width:'90%',borderRadius:5,color:'#ffffff',marginTop:'2%'}}
        type="number"
        min={1}
        id="productQuantity"
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
      />
       <label style={{color:'#ffffff',fontWeight:500,background:'#282c34',marginTop:'5%'}} htmlFor="productQuantity">Retail Price:</label>
      <input
       style={{border:'solid',borderColor:'#ffffff',background:'#282c34',borderWidth:'1px',height:'4vh',width:'90%',borderRadius:5,color:'#ffffff',marginTop:'2%'}}
        type="number"
        min={1}
        id="productQuantity"
        value={retail}
        onChange={(e) => setretail(e.target.value)}
      />
       <label style={{color:'#ffffff',fontWeight:500,background:'#282c34',marginTop:'5%'}} htmlFor="productQuantity">Cost Price:</label>
      <input
       style={{border:'solid',borderColor:'#ffffff',background:'#282c34',borderWidth:'1px',height:'4vh',width:'90%',borderRadius:5,color:'#ffffff',marginTop:'2%'}}
        type="number"
        min={1}
        id="productQuantity"
        value={cost}
        onChange={(e) => setcost(e.target.value)}
      />
      </div>
      <button style={{background:'#13F287',borderRadius:7,fontSize:'1.2rem',color:'#0d0d0d',height:'8vh',border:'none',width:'20vw',marginTop:'2vh'}} >Add Product</button>
      </div>
    </div>
  );
}

export default AddProducts;
