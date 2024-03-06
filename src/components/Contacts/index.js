import './Contacts.css';


const Contacts = () => {
    return (
        <footer className='footer'> 
        <section>   
            <div>
            <img  src="./img/logo.png" alt="foto de um carro"/>
                <p>
                Our activities in the oil and petrochemical sector,
                 engineering, construction, and production of 
                 lubricants date back to 25 years ago An activity 
                 that continues to grow and develop through the 
                 design and implementation of various projects
                </p>                
                <img  src="./img/social-media/instagram.svg" alt="foto de um carro"/>
                <img  src="./img/social-media/whatsapp.svg" alt="foto de um carro"/>
                <img  src="./img/social-media/x.svg" alt="foto de um carro"/>
            </div>
            <div className='sms'>
            <img  src="./img/footer/sms.svg" alt="foto de um carro"/>
            <span className='sms_email'>
                <h3>Enter Your Email</h3>
                <span>Our colleagues will contact you soon</span>
            </span>
            <input className='submit' type="text" placeholder='Enter Email'></input>
            <img className='arrow'  src="./img/footer/arrow-right.svg" alt="foto de um carro"/>
            </div>
            <div className='list'>
                <h4>Product Category</h4>
                <ul>
                    <li>
                   <img  src="./img/footer/arrow-list.svg" alt="foto de um carro"/>
                    Car Care
                    </li>
                    <li> <img  src="./img/footer/arrow-list.svg" alt="foto de um carro"/>Diesel Engine Oil</li>
                    <li> <img  src="./img/footer/arrow-list.svg" alt="foto de um carro"/>Gear</li>
                    <li> <img  src="./img/footer/arrow-list.svg" alt="foto de um carro"/>Motorbike</li>
                    <li> <img  src="./img/footer/arrow-list.svg" alt="foto de um carro"/>More ...</li>
                </ul>
            </div>
            <div className='list'>
                <h4>Useful links</h4>
                <ul>
                    <li> <img  src="./img/footer/arrow-list.svg" alt="foto de um carro"/>Home</li>
                    <li> <img  src="./img/footer/arrow-list.svg" alt="foto de um carro"/>Products & Shopl</li>
                    <li> <img  src="./img/footer/arrow-list.svg" alt="foto de um carro"/>Pictures & Stories</li>
                    <li> <img  src="./img/footer/arrow-list.svg" alt="foto de um carro"/>Contact us & Support</li>
                    <li> <img  src="./img/footer/arrow-list.svg" alt="foto de um carro"/>Blog Page</li>
                </ul>
            </div>

            <div className='list'>
                <h4>Contact Us</h4>
                <h5>Dubai Address</h5>
                <span>
                    Churchill Executive Tower, Business Bay, 
                    Dubai, UAE P.O.Box: 28824 Dubai.UAE
                </span>
                <h5>Istanbul Address</h5>
                <span>
                University neighborhood, Civan Alley, No:1,
                 Allure tower, unit:384 Avcilar/Istanbul
                </span>               
            </div>
            <div>
                <p>©| All Rights Reserved | Powered by Caio Design Department</p>
            </div>
            <img className='photo'  src="./img/footer/copy-right.svg" alt="foto de um carro"/>
            </section>    
        </footer>
    )

        
        
    
    
}

export default Contacts;
