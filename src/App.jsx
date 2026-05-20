
import s from './App.module.css'
import img1 from '/01.gif'
import img2 from '/02.gif'
import img3 from '/03.gif'


function App() {

  return (
    <>
          <nav>
        <span className={s.Navitens} onclick="navTo('s1')">
            <i class="fa-solid fa-binoculars"></i>
            <a className={s.navWords}>Ultrakill</a>
        </span>
         <span className={s.Navitens}  onclick="navTo(s2)">
            <i class="fa-solid fa-briefcase"></i>
            <a className={s.navWords}>Products</a>
        </span>
         <span className={s.Navitens} onclick="navTo('s3')">
            <i class="fa-solid fa-compact-disc"></i>
            <a className={s.navWords}>Musics</a>
        </span>
         <span className={s.Navitens} onclick="navTo('s4')">
            <i class="fa-solid fa-headset"></i>
            <a className={s.navWords}>Contact</a>
        </span>
    </nav>
    <main>

        <section className={s.s1}>
            <h1 className={s.title}>ULTRAKILL</h1>
            <h2>Mankind is DEAD. Blood is FUEL. Hell is FULL.</h2>

        </section>

        <section className={s.s2}> 
            <div className={s.card}>
                <img width="300px" height="auto" src={img2} alt=""/>
                <div>
                    <h4>V2 Plushie</h4>
                    <h5>$29,99</h5>
                    <p>Another little machine, that's red and more durable! It will fight you and will not be reconstructed, and now it will decor your room!</p>
                </div>
            </div>

            <div className={s.card}>
                 <img width="300px" height="auto" src={img1} alt=""/>
                <div>
                    <h4>V1 Plushie</h4>
                    <h5>$29,99</h5>
                    <p>A little machine, that feeds on blood! It entered hell and killed two kings, lots of hellish creatures, and now it will decor your room!</p>
                </div>
            </div>


            <div className={s.card}>
                 <img width="300px" height="auto" src={img3} alt=""/>
                <div>
                    <h4>Gabriel Plushie</h4>
                    <h5>$29,99</h5>
                    <p>An archangel, that will cut you down and spread your gore across the stars! His wrath is eternal, and now he will decor your room!</p>
                </div>
            </div>

        </section>

        <section className={s.s3}>
            
            <iframe className={s.vid} src="https://www.youtube.com/embed/m5ra-w1xct8?si=tWww8qA-H_HfqoMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className={s.vid} src="https://www.youtube.com/embed/QDYUiCPLtxk?si=uoHRJ2akmnH1ZGEZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className={s.vid} src="https://www.youtube.com/embed/In3SLsHpCSg?si=ZngH9osAtmJTq2jt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        </section>

        <section className={s.s4}>
            <h3>CONTACT</h3>
            <div className={s.formul}>
                <label for="name">Name:</label>
                <input type="text" id="nome" placeholder="Write your name."/>
                <label for="assunto">Message:</label>
                <textarea id="assunto" placeholder="Write your message."></textarea>
                <button onclick="enviar()">SEND</button>
            </div>
        </section>

    </main>

    <footer>
        <a href="https://www.instagram.com/">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="youtube.com">
           <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="x.com">
            <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://store.steampowered.com/?l=portuguese">
            <i class="fa-brands fa-steam"></i>
        </a>
    </footer>
    </>
  )
}

export default App
