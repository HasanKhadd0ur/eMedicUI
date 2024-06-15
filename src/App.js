

import './App.css';
import { Header } from './components/Header';
import { Routes,Route,BrowserRouter } from "react-router-dom"

import { AuthProvider } from './contexts/AuthContext';
import {HomePage} from "./pages/HomePage"
import {MedicalState } from "./pages/MedicalState"

import {Login} from './pages/Login';
import {Register} from './pages/Register';
import { Footer } from './components/Footer';


function App() {
  

  return (

    <AuthProvider>
    <BrowserRouter>
    <Header/>
    
  
    <main >
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/MedicalState" element={ <MedicalState/> } />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
