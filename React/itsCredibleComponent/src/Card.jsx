function Card ({url, description}){
    return(
        <div className="max-w-sm bg-gray-100 border-none rounded-lg dark:bg-gray-800 dark:border-gray-700 m-5">
            <img src={url} className="rounded-t-lg " width={384}></img>
            <div className="p-2">
            <p className="mb-3 font-bold text-lg text-gray-500 dark:text-gray-400">{description}</p>
            <a href="#" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </a>
        </div></div>
    )
}
export default Card;



