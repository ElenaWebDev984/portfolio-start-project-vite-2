import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {About} from "./layout/sections/about/About.tsx";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <About />
            <Skills />
            <Works />
        </div>
    )
}

export default App

