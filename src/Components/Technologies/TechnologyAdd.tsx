import type { Dispatch, SetStateAction } from "react";
import type { Ttechnoloy } from "../../Type";

interface tCardAdd {
  added: Ttechnoloy[];
  setAdded: Dispatch<SetStateAction<Ttechnoloy[]>>;
}

const TechnologyAdd = ({ added, setAdded }: tCardAdd) => {
  return (
    
    <div className="grid grid-cols-1 gap-3 p-4 ">
        
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
            <div>sdadsasdasd</div>
            </div>
            
          </div>
          
        );
      })}
    </div>
  );
};

export default TechnologyAdd;