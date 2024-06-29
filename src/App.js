

import './App.css';
import { Header } from './components/Header';
import { Routes,Route,BrowserRouter } from "react-router-dom"

import { AuthProvider } from './contexts/Authentication Context/AuthContext';
import {HomePage} from "./pages/Home/HomePage"
import {MedicalState } from "./pages//Medical Cases/MedicalState"

import {Login} from './pages/Access/Login';
import {Register} from './pages/Access/Register';
import { Footer } from './components/Layout/Footer';
import PageNotFound from './pages/shared/PageNotFound'
import PrivateRoutes from './utilities/PrivateRoutes'

function App() {
  

  return (

    <AuthProvider>
    <BrowserRouter>
   <Header/>
    <main >

      <Routes>
   
         <Route element={<PrivateRoutes />}>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/MedicalState" element={ <MedicalState/> } />
        </Route>
    
      <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<PageNotFound />}/>
  
    </Routes>
	</main>
    	<Footer />
  
  </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
