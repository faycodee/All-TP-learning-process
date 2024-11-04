export  function Chercher(props) {
    let cherText ="";
    return (
        <div>
        <h2 className="text-black-300 font-mono font-bold text-xl">Chercher Bar</h2>
        <p className="my-2">Entrer le mot cle de recherche :</p>
        <input className="n p-2 outline-none rounded-lg mr-5 border-2
         border-blue-700  focus:bg-slate-600 active:border-red-600 
         text-white"  placeholder="legume,fruit...." type="text" onInput={(e)=>cherText=e.target.value} />
        <button  onClick={()=>props.chercherHandl(cherText)} className="transition-all 
        p-2 border-2 bg-gradient-to-r from-blue-200 to-blue-600 duration-1000 
         text-white rounded-md hover:from-blue-600 hover:to-blue-200">Chercher</button>
    </div>
    )
}