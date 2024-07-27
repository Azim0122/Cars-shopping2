import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'


function App() {
  const[modal, setModal]=useState(false)
  const [cards, setCards] = useState([

    {
        name:  'BMWкабриолет',
        yellowname: 'i325',
        brand: './public/imgs/bmw small.svg',
        img: './public/imgs/Rectangle 1.svg',
        imgs:[
            './public/imgs/calendar 1.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 1.svg",
            "./public/imgs/fuel 1.svg" 
        ],
        price: "от 4500 р. / сутки",
        imgss:[
             "./public/imgs/modal 2.svg",
             "./public/imgs/modal 3.svg", 
             "./public/imgs/modal 4.svg", 
             "./public/imgs/modal 5.svg", 
             "./public/imgs/modal 6.svg", 
        ]
    },
    {
        name:  'BMWкабриолет',
        yellowname: 'i325',
        brand: './public/imgs/bmw small.svg',
        img: './public/imgs/Rectangle 2.svg',
        imgs:[
           './public/imgs/calendar 2.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 1.svg",
            "./public/imgs/fuel 1.svg" 
        ],
        price: "от 4500 р. / сутки",
        imgss:[
          "./public/imgs/modal 2.svg",
          "./public/imgs/modal 3.svg", 
          "./public/imgs/modal 4.svg", 
          "./public/imgs/modal 5.svg", 
          "./public/imgs/modal 6.svg", 
     ]
    },
    {
        name:  'BMWкабриолет',
        yellowname: '325',
        brand: './public/imgs/bmw small.svg',
        img: './public/imgs/Rectangle 3.svg',
        imgs:[
           './public/imgs/calendar 3.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 3.svg",
            "./public/imgs/fuel 3.svg" 
        ],
        price: "от 4500 р. / сутки",
        imgss:[
          "./public/imgs/modal 2.svg",
          "./public/imgs/modal 3.svg", 
          "./public/imgs/modal 4.svg", 
          "./public/imgs/modal 5.svg", 
          "./public/imgs/modal 6.svg", 
     ]
    },
    {
        name:  'BMWкабриолет',
        yellowname: 'Z4',
        brand: './public/imgs/bmw small.svg',
        img: './public/imgs/Rectangle 4.svg',
        imgs:[
           './public/imgs/calendar 3.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 1.svg",
            "./public/imgs/fuel 1.svg" 
        ],
        price: "от 7500 р. / сутки",
        imgss:[
          "./public/imgs/modal 2.svg",
          "./public/imgs/modal 3.svg", 
          "./public/imgs/modal 4.svg", 
          "./public/imgs/modal 5.svg", 
          "./public/imgs/modal 6.svg", 
     ]
    },
    {
        name:  'BMWкабриолет',
        yellowname: '420D',
        brand: './public/imgs/bmw small.svg',
        img: './public/imgs/Rectangle 5.svg',
        imgs:[
           './public/imgs/calendar 5.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 5.svg",
            "./public/imgs/fuel 3.svg" 
        ],
        price: "от 9500 р. / сутки",
        imgss:[
          "./public/imgs/modal 2.svg",
          "./public/imgs/modal 3.svg", 
          "./public/imgs/modal 4.svg", 
          "./public/imgs/modal 5.svg", 
          "./public/imgs/modal 6.svg", 
     ]
    },
    {
        name:  'Mercedes',
        yellowname: 'С180',
        brand: './public/imgs/MERC SMALL.svg',
        img: './public/imgs/Rectangle 6.svg',
        imgs:[
           './public/imgs/calendar 6.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 6.svg",
            "./public/imgs/fuel 1.svg" 
        ],
        price: "от 4500 р. / сутки",
          imgss:[
             "./public/imgs/modal 2.svg",
             "./public/imgs/modal 3.svg", 
             "./public/imgs/modal 4.svg", 
             "./public/imgs/modal 5.svg", 
             "./public/imgs/modal 6.svg", 
        ]
    },
    {
        name:  'Mercedes',
        yellowname: 'Viano',
        brand: './public/imgs/MERC SMALL.svg',
        img: './public/imgs/Rectangle 7.svg',
        imgs:[
           './public/imgs/calendar 3.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 7.svg",
            "./public/imgs/fuel 3.svg" 
        ],
        price: "от 4500 р. / сутки",
          imgss:[
             "./public/imgs/modal 2.svg",
             "./public/imgs/modal 3.svg", 
             "./public/imgs/modal 4.svg", 
             "./public/imgs/modal 5.svg", 
             "./public/imgs/modal 6.svg", 
        ]
    },
    {
        name:  'KIA',
        yellowname: 'K5',
        brand: './public/imgs/kia small.svg',
        img: './public/imgs/Rectangle 8.svg',
        imgs:[
           './public/imgs/calendar 8.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 7.svg",
            "./public/imgs/fuel 1.svg" 
        ],
        price: "от 4500 р. / сутки",
        imgss:[
          "./public/imgs/modal 2.svg",
          "./public/imgs/modal 3.svg", 
          "./public/imgs/modal 4.svg", 
          "./public/imgs/modal 5.svg", 
          "./public/imgs/modal 6.svg", 
     ]
    },
    {
        name:  'KIA',
        yellowname: 'RIO',
        brand: './public/imgs/kia small.svg',
        img: './public/imgs/Rectangle 9.svg',
        imgs:[
           './public/imgs/calendar 8.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 9.svg",
            "./public/imgs/fuel 1.svg" 
        ],
        price: "от 4500 р. / сутки",
          imgss:[
             "./public/imgs/modal 2.svg",
             "./public/imgs/modal 3.svg", 
             "./public/imgs/modal 4.svg", 
             "./public/imgs/modal 5.svg", 
             "./public/imgs/modal 6.svg", 
        ]
    },
    {
        name:  'KIA ',
        yellowname: 'RIO',
        brand: './public/imgs/kia small.svg',
        img: './public/imgs/Rectangle 10.svg',
        imgs:[
           './public/imgs/calendar 8.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 9.svg",
            "./public/imgs/fuel 1.svg" 
        ],
        price: "от 4500 р. / сутки",
          imgss:[
             "./public/imgs/modal 2.svg",
             "./public/imgs/modal 3.svg", 
             "./public/imgs/modal 4.svg", 
             "./public/imgs/modal 5.svg", 
             "./public/imgs/modal 6.svg", 
        ]
    },
    {
        name:  'Volkswagen',
        yellowname: 'Volkswagen',
        brand: './public/imgs/w small.svg',
        img: './public/imgs/Rectangle 11.svg',
        imgs:[
           './public/imgs/calendar 5.svg',
           "./public/imgs/automatic-transmission 1.svg",      
            "./public/imgs/engine 11.svg",
            "./public/imgs/fuel 3.svg" 
        ],
        price: "от 4500 р. / сутки",
          imgss:[
             "./public/imgs/modal 2.svg",
             "./public/imgs/modal 3.svg", 
             "./public/imgs/modal 4.svg", 
             "./public/imgs/modal 5.svg", 
             "./public/imgs/modal 6.svg", 
        ]
    }

])
const [oneproduct, setOneproduct]= useState({
  name:  'Volkswagen',
  yellowname: 'Volkswagen',
  brand: './public/imgs/w small.svg',
  img: './public/imgs/Rectangle 11.svg',
  imgs:[
     './public/imgs/calendar 5.svg',
     "./public/imgs/automatic-transmission 1.svg",      
      "./public/imgs/engine 11.svg",
      "./public/imgs/fuel 3.svg" 
  ],
  price: "от 4500 р. / сутки",
    imgss:[
       "./public/imgs/modal 2.svg",
       "./public/imgs/modal 3.svg", 
       "./public/imgs/modal 4.svg", 
       "./public/imgs/modal 5.svg", 
       "./public/imgs/modal 6.svg", 
  ]
})


  return (
    <>
     <div className="body">
      {modal && <Modal setModal={setModal} oneproduct={oneproduct}/>}
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
        <div className="hero">
        <div className="container">
         <h1>Аренда <span>экслюзивных</span> авто в Крыму</h1>
         <h2>Доставка в любую точку Крыма</h2>
         <h2>Бесплатно доп. аксессуары</h2>
         <h2>Любой способ оплаты</h2>
         <button>Выбрать авто</button>
        </div>
        </div>
      </header>
      <main>
        <section className='s-1'>
          <div className="container">
            <h1>Наш <span>автопарк</span></h1>
            <div className="cards">
                {cards.map((card) => {
                return <div  className="card">
                <div className="info1">
                 <img src={card.brand} alt="" />
                 <p>{card.name}<span>{card.yellowname}</span></p>
                </div>
                 <div className="img-car">
                   <img src={card.img} alt="" />
                 </div>
                 <div className="info-car">
                   <img src={card.imgs[0]} alt="" />
                   <img src={card.imgs[1]} alt="" />
                   <img src={card.imgs[2]} alt="" />
                   <img src={card.imgs[3]} alt="" />
                 </div>
                 <h5>{card.price}</h5>
                 <button onClick={()=>{
                  setOneproduct(card)
                    setModal(true)
                 }}>Арендовать авто</button>
               </div>
               })}

            </div>
          </div>
        </section>
        <section className='s-2'>
          <div className="container">
            <h1><span>Условия</span> аренды</h1>
            <div className="s2-info">
            <div className="box1">
              <img src="./public/imgs/pasport.svg" alt="" />
              <h2>Паспорт</h2>
            </div>
            <div className="box1">
              <img src="./public/imgs/driver-license 1.svg" alt="" />
              <h2>Водительское <br />
                 удостоверение</h2>
            </div> <div className="box1">
              <img src="./public/imgs/age 1.svg" alt="" />
              <h2>Возраст от <br /> 22 лет</h2>
            </div> <div className="box1">
              <img src="./public/imgs/steering-wheel 1.svg" alt="" />
              <h2>Водительский стаж <br /> от 3 лет</h2>
            </div>
            </div>
            <button>Договор аренды</button>
          </div>
        </section>
        <section className='s-3'>
          <div className="container">
           <h1>Отзывы</h1>
           <div className="s3-info">
            <img src="./public/imgs/unnamed 1.svg" alt="" />
            <img src="./public/imgs/unnamed 2.svg" alt="" />
            <img src="./public/imgs/unnamed 3.svg" alt="" />
           </div>
          </div>
        </section>
        <section className='s-4'>
          <div className="container">

          </div>
        </section>
      </main>
      <footer>

      </footer>
     </div>
    </>
  )
}

export default App

