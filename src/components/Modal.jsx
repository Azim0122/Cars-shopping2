import React, { useState } from 'react'

function Modal({setModal, oneproduct}) {
    const [smallimgs, setSmallimgs]=useState(oneproduct.img)
  return (
   <>
   <div className="body1">
   <header>
   <nav>
         <div className="container">
         <img className='logo' src="./public/imgs/logo.svg" alt="" />
         <ul className="links">
          
          
            <li><a href="">Наш парк</a></li>
            <li><a href="">Условия аренды</a></li>
            <li><a href="">Отзывы</a></li>
            <li><a href="">Контакты</a></li>
            <li><a href="">+79781173839</a></li>
          </ul>
         </div>
        </nav>
   </header>

    <div className="modal">
        <button onClick={
           ()=>{
            setModal(false)
           }
        }> <i className="fa-solid fa-angle-left"></i> </button>
    <div className="container">
        <div className="right1">
            <div className="imgs1">
                <img src={smallimgs} alt="" />
                <div className="imgs2">
                   {oneproduct.imgss.map((img)=>{
                    return <img onClick={()=>{setSmallimgs(img)}} src={img} alt="" />
                   })}
                </div>
            </div>
            <button>Арендовать</button>
        </div>
        
        <div className="left2">
        <img className='img222' src="/public/imgs/modal.svg" alt="" />
        <div className="info1">
                <img src={oneproduct.brand} alt="" />
                <p>{oneproduct.name}<span>{oneproduct.yellowname}</span></p>
               </div>
               <div className="info-car">
                  {
                    oneproduct.imgs.map((img)=>{
                      return <img src={img} alt="" />
                    })
                  }
                </div>
                <h3>цены по сезонам</h3>
                <div className="price22">
                    <h5>низкий </h5>
                    <h5>межсезонье</h5>
                    <h5>высокий</h5>
                </div>
                <h4>10.01-30.04; 21.10-27.12</h4>
                <table border={1}>
                   <tbody>
                    <tr>
                        <td>1-2 суток</td>
                        <td>5500 руб. </td> 
                    </tr>
                    <tr>
                        <td>3-6 суток</td>
                        <td>5000 руб. </td>
                    </tr>
                    <tr>
                        <td>от 7 суток</td>
                        <td>4500 руб. </td>
                    </tr>
                    <tr>
                        <td>залог</td>
                        <td>30 000 руб. </td>
                    </tr>
                   </tbody>
                </table>
        </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Modal