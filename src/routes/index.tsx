import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Declaration from '../pages/declaration'
import Home from '../pages/home'

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/declaration' element={ <Declaration /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter