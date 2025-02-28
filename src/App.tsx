import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Slogan} from "./layout/sections/slogan/Slogan.tsx";
// import {HeaderMobile} from "./layout/header/headerMobile/HeaderMobile.tsx";


function App() {
    return (
        <div className="App">
            <Header />
            {/*<HeaderMobile />*/}
            <Main />
            <About />
            <Skills />
            <Works />
            <Slogan />
            <Footer />
        </div>
    )
}

export default App

