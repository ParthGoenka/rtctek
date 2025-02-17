import Sidebtn from "./sidebtn.jsx"

function Maindiv(props){
    return (
        <div className="flex flex-wrap">
            <div className="flex items-center"><Sidebtn name="<"/></div>
            <div className="mt-10 font-bold">
        <p className="p-10 flex justify-center  text-2xl text-gray-600">{props.heading}</p>
        <p className="flex justify-center text-5xl text-gray-900">{props.title}</p>
        <p className="p-10 flex justify-center text-center text-xl h-50 w-200 text-gray-800">{props.para}</p>
             </div>
             <div className="flex items-center"><Sidebtn name=">"/></div>
        </div>
    
    )
}
export default Maindiv