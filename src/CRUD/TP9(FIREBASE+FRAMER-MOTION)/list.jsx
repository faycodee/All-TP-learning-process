import { motion  } from "framer-motion";

export default function List(props) {

  return (
    <div className="w-full">
      <div>
        <motion.h2 className="text-3xl  w-full font-mono
        font-extrabold mt-[80px] p-9 bg-green-400 text-white 400  text-center "
        whileInView={{scale:[0,1]}}
        transition={{duration:1}} >
          list des Etudiant
        </motion.h2>
      </div>
     <div className="w-full flex justify-center items-center">
     <motion.div 
     whileInView={{}}
      className=" w-full ml-10 mt-15 grid  grid-cols-4 gap-[10px] max-xl:grid-cols-3  max-lg:grid-cols-2 max-md:grid-cols-1 ">
        {props.data.map((e, i) => {
          return (
            <div className="w-full flex">
              <div
                key={i}
                className=" m-9 max-w-sm w-[35vh]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg "
                  src={e.src}
                  alt=""
                />

                <div className="p-5">
                  <p>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {e.nom.toUpperCase() + " | " + e.prenom}
                    </h5>
                  </p>
                  <p className="mb-3  text-sm font-normal text-gray-700 dark:text-gray-400">
                    {e.prenom} are live in {e.ville} city . <br />
                    photo URL :{" "}
                    <p className="text-[8px] text-blue-400 ">{e.src} </p>.{" "}
                    <br />
                  </p>
                  <p
                    onClick={() => props.delet(e.id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    supprimer
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
     </div>
    </div>
  );
}
