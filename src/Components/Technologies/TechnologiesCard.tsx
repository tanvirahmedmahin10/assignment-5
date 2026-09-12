import { use, useState } from "react";
import type { Ttechnoloy } from "../../Type";
import TechnologyAdd from "./TechnologyAdd";

interface tTechCardMain{
    tech:Ttechnoloy
}

const TechnologiesCard = ({tech}:tTechCardMain) => {
  const [Stacked,setStacked]=useState(false)
  const [added, setAdded] = useState<Ttechnoloy[]>([]);

 

  const handleIsStacked=()=>{
    setStacked(true)
    setAdded([...added,tech])
  }
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


    <button onClick={()=>handleIsStacked()} className="btn btn-neutral w-full" disabled={Stacked}>
      {Stacked?'Stacked':'Add to Stack'}
      
    </button>
  </div>
  
</div>
<div>
    <TechnologyAdd added={added} setAdded={setAdded}></TechnologyAdd>
  </div>
  </div>

    );
};

export default TechnologiesCard;