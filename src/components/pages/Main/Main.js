import './Main.css'
import icon from '../../imgs/bold.png'
import btc from '../../imgs/btc.png'

import React, { useEffect, useState } from "react";
import api from '../../Api/Api';




const Main = () => {



   

    const [post, setPost] = React.useState(null);




  React.useEffect(() => {
    api.get('').then((response) => {
      setPost(response.data);
      console.log(response.data)
      

    })
    ;
    

    

    
  }, []);

 





  if (!post) return null;
    
   
    

    return ( 
      <>
      
        <div className='section'>
            <div className="left">
            <h1>Moedas</h1>

            </div>
            <div className='card'>
                <label>BRL/USD</label>
                <div className='center'>
                    <p>R$</p>
                    <h1>{post[0].bid}</h1>
                </div>
               
                <img src={icon} />
            </div>
            <div className='card'>
            <label>BTC/EUR</label>
            <div className='center'>
                    <p>R$</p>
                    <h1>valor²api</h1>
                </div>
                <img src={btc} />
            </div>
            <div className='card'>

            <label>BTC/USD</label>
            <div className='center'>
                    <p>R$</p>
                    <h1>valor³api</h1>
                </div>
                <img src={icon} />

            </div>
            <div className='section tst'>
              <h1>Cotação</h1>
            </div>

            <div className='table'>


                <div className='tabela'>
                  
                  
                <img src={icon} />
                  <label>
                    {post[0].name}
                    <br></br>{post[0].create_date}

                  </label>
                  <label>MINIMO<br></br>{post[0].low}</label>
                  <label id='center'>
                    MÁXIMO<br></br>
                    {post[0].high}
                  </label>
                  <label >VARIAÇÃO<br></br><label id='bg'>{post[0].varBid}</label></label>
              
                </div>

                <div className='tabela'>
                  
                  
                <img src={icon} />
                  <label>
                    {post[0].name}
                    <br></br>{post[0].create_date}

                  </label>
                  <label>MINIMO<br></br>{post[0].low}</label>
                  <label id='center'>
                    MÁXIMO<br></br>
                    {post[0].high}
                  </label>
                  <label >VARIAÇÃO<br></br><label id='bg'>{post[0].varBid}</label></label>
              
                </div>
                <div className='tabela'>
                  
                  
                <img src={icon} />
                  <label>
                    {post[0].name}
                    <br></br>{post[0].create_date}

                  </label>
                  <label>MINIMO<br></br>{post[0].low}</label>
                  <label id='center'>
                    MÁXIMO<br></br>
                    {post[0].high}
                  </label>
                  <label >VARIAÇÃO<br></br><label id='bg'>{post[0].varBid}</label></label>
              
                </div>
                <div className='tabela'>
                  
                  
                <img src={icon} />
                  <label>
                    {post[0].name}
                    <br></br>{post[0].create_date}

                  </label>
                  <label>MINIMO<br></br>{post[0].low}</label>
                  <label id='center'>
                    MÁXIMO<br></br>
                    {post[0].high}
                  </label>
                  <label >VARIAÇÃO<br></br><label id='bg'>{post[0].varBid}</label></label>
              
                </div>


                
                
            </div>
            
            
            

        </div>

        
        

        

    
      </>

     );
}
 
export default Main;