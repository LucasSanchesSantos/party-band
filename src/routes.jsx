import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home' 
import { QuemSomos } from './pages/Quemsomos'

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route
                    // aqui a gente vai colocar as nossas rotas. Path é o caminho
                    path='/'
                    element={<h1>Roi</h1>}
                /> */}
                {/* <Route
                    path='/quemsomos'
                    element={<h1>Nós somos a bagunça</h1>}
                    //o /how_we_are é como se fosse um novo arquvio em outra linguagem. Que a gente vai acessar via URL
                    //no caso, é localhost:3000/how_we_are
                /> */}
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/quemsomos'
                    element={<QuemSomos />}
                />


            </Routes>
        </BrowserRouter>
    )
}


export default Rotas;
//Aqui ele espotar a constant Rotas