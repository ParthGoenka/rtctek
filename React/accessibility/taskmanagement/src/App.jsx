import Card from "./components/Card";
import Form from "./components/Form";
import AccessibleModal from "./components/Modal";
import Navbar from "./components/Navbar";
import Task from "./components/Task";


function App() {

  return (
    <div>
       <a 
  className="bg-[#000] text-[#fff] px-10 py-2 rounded-lg ml-[-100%] focus:ml-0 focus:opacity-100 opacity-0 focus:visible visible transition-all duration-300" 
  href="#main"
>
  Skip to main content
</a>

      <Navbar/>
     
      <div className="flex p-10">
    <Task />
    <Card />
    </div>
    <Form />
    <AccessibleModal/>
    </div>
    
  )
}

export default App
