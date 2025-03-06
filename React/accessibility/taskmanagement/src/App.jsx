import Card from "./components/Card";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import BasicTable from "./components/TAble";
import BasicLineChart from "./components/Chart";


function App() {

  return (
    <div>
    <a className="bg-[#000] text-[#fff] px-10 py-2 rounded-lg ml-[-100%] focus:ml-0 focus:opacity-100 opacity-0 focus:visible visible transition-all duration-300" 
       href="#main">Skip to main content</a>

    <Navbar/> 
    <Task />
    <hr></hr>
    <Card />
    <hr></hr>
    <Form />
    <hr></hr>
    <BasicTable />
    <hr></hr>
    <BasicLineChart/>

    </div>
    
  )
}

export default App
