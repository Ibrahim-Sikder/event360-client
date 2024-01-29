import MainLayout from "./components/layout/MainLayout"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
 
  return (
   <main>
      <MainLayout/>
   </main>
  )
}

export default App
