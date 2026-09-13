import { type Dispatch, type SetStateAction } from "react";
import type { Ttechnoloy } from "../../Type";

import { toast } from "react-toastify";

interface tTechCardMain{
    tech:Ttechnoloy
     added:Ttechnoloy[], 
      setAdded:Dispatch<SetStateAction<Ttechnoloy[]>>
}

const TechnologiesCard = ({tech,added,setAdded}:tTechCardMain) => {
  // const [Stacked, setStacked] = useState(false);

const handleIsStacked = () => {
  // setStacked(true);
  setAdded([...added, tech]);
  toast.success(`${tech.name} is Added to Stack`)
};
    return (
      <div>
   <div className="max-w-sm rounded-2xl bg-base-100 p-6 shadow-xl border border-base-200  flex flex-col justify-between">
  <div>
    
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-base-200 rounded-xl w-14 h-14 flex items-center justify-center">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
      </div>
      <span className={`badge border-none font-semibold px-3 py-2 ${tech.badgeColor}`}>
        {tech.badge}
      </span>
    </div>

  
    <h2 className="text-xl font-bold mb-2">{tech.name}</h2>
    <p className="text-sm text-base-content/70 mb-4 leading-relaxed">
      {tech.description}
    </p>
  </div>

  <div>
   
    <div className="flex items-center justify-between border border-base-200 pt-4 mb-5 text-xs font-medium ">
      <div className="flex items-center gap-2">
        <span className="badge badge-ghost mr-6">{tech.category}</span>
        <span className="text-base-content/70">{tech.difficulty}</span>
      </div>
      <div className="flex items-center gap-1 text-amber-500 font-semibold">
        <span>★</span>
        <span>{tech.rating}</span>
      </div>
    </div>


    <button onClick={()=>handleIsStacked()} className="btn btn-neutral w-full"   disabled={added.some(item => item.name === tech.name)}>
      {added.some(item => item.name === tech.name)?'Added to Stack':'Add to Stack'}
      
    </button>
  </div>
  
</div>

  </div>

    );
};

export default TechnologiesCard;