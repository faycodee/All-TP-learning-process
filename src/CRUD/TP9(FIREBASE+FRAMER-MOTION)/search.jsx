import { motion } from "framer-motion";
export  function Chercher(props) {
    let cherText ="";
    return (
        <div className="mb-6 w-full flex flex-col justify-center items-center">
            <motion.h2 className="text-3xl  w-full font-mono font-extrabold
             mt-[80px]   text-center mb-5
              p-9 bg-blue-400 text-white "
              whileInView={{scale:[0,1]}}
              transition={{duration:1}} >Search des Etudiant</motion.h2>
          <div  className="flex flex-col w-[70vh]">
        <input className="n p-2 outline-none rounded-lg mr-5 border-2
         border-blue-700  focus:bg-slate-200 active:border-red-600 
         "  placeholder="ahmed,...." type="text" onInput={(e)=>cherText=e.target.value} />
        <button  onClick={()=>props.chercherHandl(cherText)} className=" 
        p-2 border-2 bg-gradient-to-r from-blue-200 to-blue-600  
         text-white rounded-md hover:from-blue-600 hover:to-blue-200  
          transition-transform duration-700" >Chercher</button>
         </div>
         
    </div>
    
    )
}