import Navbar from "../Navbar/Navbar"
import styles from "./App.module.css"
import coach from "../../images/woman-coach.jpg"
import frendsmans from "../../images/frendsmans.jpg"
import wendel from "../../images/wendel.jpg"
import { Link, useNavigate } from "react-router-dom"
import mens1 from "../../images/mens-1.jpg"
import mens2 from "../../images/mens-2.jpg"
import mens3 from "../../images/mens-3.jpg"
import Countdown from "../Sale/Sale"
import Hyperlinks from "../Hyperlinks/Hyperlinks"
import Copyright from "../Copyright/Copyright"
import Slideshow from "../Slideshow/Slideshow"
import Signup from "../Signup/Signup"
import man0 from "../../images/man-0.jpg"
import man1 from "../../images/man-1.jpg"
import bracelet from "../../images/bracelet.jpg"

export default function App() {
  
  let navigate = useNavigate(); 

  function handleMens() {
    let path = `/mens`; 
    navigate(path);
  }

  function handleJewelry() {
    let path = '/jewelry';
    navigate(path);
  }

  return (
    <>
      <Countdown />
      <Navbar activeTab='home'/>
      <Slideshow />
      <section className={styles.mens}>
        <div className={styles.mensPanel}>
          <div className={styles.manContainer}>
            <img src={man0} className={styles.man0}></img>
            <p className={styles.credit}>Photo by Karl Fredrickson via <a href="https://unsplash.com/photos/man-standing-facing-mountains-during-sunset-DsAjH9B24G8" className={styles.link}>Unsplash</a></p>
          </div>
          <div className={styles.manContainer}>
            <img src={man1} className={styles.man1}></img>
            <p className={styles.credit}>Photo by Brooke Cagle via <a href="https://unsplash.com/photos/man-standing-on-road-between-sand-7iTE5rhI6lc" className={styles.link}>Unsplash</a></p>
          </div>
        </div>
        <div className={styles.panelText}>
          <h1>Comfort and style</h1>
          <p>Casual pieces made for you to look and feel your best everywhere you go. </p>
          <button onClick={handleMens}>Shop Mens</button>
        </div>
      </section>
      <section className={styles.jewelry}>
          <div className={styles.jewelryContainer}>
            <img src={bracelet} className={styles.bracelet}></img>
            <p className={styles.credit}>Photo by Christian Lucas via <a href="https://unsplash.com/photos/silver-and-diamond-studded-bracelet-LrQys_Ukuak" className={styles.link}>Unsplash</a></p>
          </div>
          <div className={styles.panelText}>
            <h1>Timeless</h1>
            <p>High-quality jewelry made to stay elegant forever.</p>
            <button onClick={handleJewelry}>Shop Jewelry</button>
          </div>
      </section>
      <Signup />
      <Hyperlinks />
      <Copyright />
    </>
  )
}

/*<p className={styles.text}>TRENDY</p>
      <div className={styles.womens}>
        <div className={styles.womanContainer}>
          <img src={coach} className={styles.woman}></img>
          <p className={styles.credit}>Photo by Godisable Jacob via <a href="https://www.pexels.com/photo/woman-sitting-on-sofa-bed-wearing-sunglasses-965324/" className={styles.link}>Pexels</a></p>
          <Link to="/womens" className={styles.womanLink}>SHOP WOMENS</Link>
        </div>
        <div className={styles.womanContainer}>
          <img src={frendsmans} className={styles.woman}></img>
          <p className={styles.credit}>Photo by Konstantin Mishchenko via <a href="https://www.pexels.com/photo/woman-standing-indoor-1926769/" className={styles.link}>Pexels</a></p>
        </div>
        <div className={styles.womanContainer}>
        <img src={wendel} className={styles.woman}></img>
        <p className={styles.credit}>Photo by wendel moretti via <a href="https://www.pexels.com/photo/woman-wearing-black-sport-1972115/" className={styles.link}>Pexels</a></p>
        </div>
      </div>
      <p className={styles.text}>TIMELESS</p>
      <div className={styles.womens}>
        <div className={styles.womanContainer}>
          <img src={mens1} className={styles.woman}></img>
          <p className={styles.credit}>Photo by Chloe via <a href="https://www.pexels.com/photo/man-in-white-dress-shirt-holding-suit-jacket-1043474/" className={styles.link}>Pexels</a></p>
          <Link to="/mens" className={styles.womanLink}>SHOP MENS</Link>
        </div>
        <div className={styles.womanContainer}>
          <img src={mens2} className={styles.woman}></img>
          <p className={styles.credit}>Photo by Yogendra  Singh via <a href="https://www.pexels.com/photo/man-in-red-dress-shirt-near-wall-1760900/" className={styles.link}>Pexels</a></p>
        </div>
        <div className={styles.womanContainer}>
        <img src={mens3} className={styles.woman}></img>
        <p className={styles.credit}>Photo by Visión De Enfoque via <a href="https://www.pexels.com/photo/man-with-braided-hair-in-yellow-outfit-3341231/" className={styles.link}>Pexels</a></p>
        </div>
      </div>*/
