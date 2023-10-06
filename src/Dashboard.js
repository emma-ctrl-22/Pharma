import React from 'react'

export const Dashboard =() => {
  const styles = {
    container:{
      height:'90vh',
      width:'95vw',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly',
      alignItems:'center'
    },
    text:{
      fontSize: '80px',
      color:'red',
      fontWeight:500,
    }
  }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
      <div style={styles.container}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',height:'22%',width:'95%'}}>
          <div style={{height:'98%',width:'20%',background:'#13f287',borderRadius:8}}></div>
          <div style={{height:'98%',width:'20%',background:'#a1a1a1',borderRadius:8}}></div>
          <div style={{height:'98%',width:'20%',background:'#13f287',borderRadius:8}}></div>
          <div style={{height:'98%',width:'20%',background:'#13f287',borderRadius:8}}></div>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',height:'65%',width:'95%'}}>
           <div style={{height:'98%',width:'47%',background:'dodgerblue',borderRadius:8}}></div>
           <div style={{height:'98%',width:'47%',borderRadius:8,display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
            <div style={{height:'48%',width:'98%',background:'dodgerblue'}}>
              
            </div>
            <div style={{height:'48%',width:'98%',background:'dodgerblue'}}></div>
           </div>
        </div>
      </div>
    </div>
  )
}

