import React from 'react'
import { BrowserRouter as PkRout, Route, Routes,  } from 'react-router-dom'
import FormPok from '../components/FormPok'
import NavbarPk from '../components/NavbarPk'
import RenderData from '../components/RenderData'


export const AppRouter = () => {
  return (
    <div>
        <PkRout>    
            <NavbarPk/>
            <Routes>
                <Route path='/' element={<RenderData/>}/>
                <Route path='/formpk' element={<FormPok/>}/>
            </Routes> 
        </PkRout>
    </div>
  )
}

export default AppRouter