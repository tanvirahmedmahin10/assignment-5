import type { Dispatch, SetStateAction } from "react";
import type { Ttechnoloy } from "../../Type";
import { TbX } from "react-icons/tb";
import { toast } from "react-toastify";

interface tCardAdd {
  added: Ttechnoloy[];
  setAdded: Dispatch<SetStateAction<Ttechnoloy[]>>;
  
}

const TechnologyAdd = ({ added, setAdded }: tCardAdd) => {
  
  const handleRemove=(add:Ttechnoloy)=>{
    let removingTech=added.filter(del=>del.name!==add.name)
    setAdded(removingTech)
    toast.error(`${add.name} is Removed`)
    
  }
  
  const handleRemoveAll=()=>{
    setAdded([])
    toast.error('Everthing Removed')
  }

  if(added.length===0){
    return (
     <div className="p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold  mb-2">
        Your Stack
      </h2>
      <p className="text-sm text-slate-400  py-1 rounded-full mb-3">
        No technologies selected yet
      </p>
      <p className="text-slate-400 text-sm text-center border-2 border-dotted border-gray-200 p-7 rounded-lg">
        Your stack is empty.
      </p>
    </div>
  )
  }
  return (
    <div>
    <div className=" grid grid-cols-1 gap-3 p-4 ">
      <h2 className="text-xl font-semibold  mb-2">Your Stack</h2>
      <p className="text-sm text-slate-400  py-1 rounded-full mb-3">{added.length} Technologies Selected</p>
      {added.map((add, index) => {
        return (
          <div 
            key={index} 
            className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-center">
            <div>
            <div className="flex items-center space-x-3">
              <img 
                src={add.icon} 
                alt={add.name} 
                className="w-10 h-10 object-cover rounded-full bg-gray-50 shrink-0"
              />
              <span className="font-medium text-gray-800 text-sm">
                {add.name}
              </span>
            </div>
            

            
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full shrink-0">
              {add.category}
            </span>
            </div>
            <span 
                onClick={() => handleRemove(add)} 
                className="cursor-pointer text-gray-500 hover:text-red-600 transition-colors"
              >
                <TbX />
              </span>
            </div>
            
          </div>
          
        );
      })}
    </div>
    <div className="flex justify-center w-full">
  <button onClick={handleRemoveAll} className="btn btn-error min-w-67 text-center my-6">
    Remove All
  </button>
</div>
    </div>
  );
};

export default TechnologyAdd;