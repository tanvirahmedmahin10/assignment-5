import { use, type Dispatch, type SetStateAction } from 'react';
import type { Ttechnoloy } from '../../Type';
import TechnologiesCard from './TechnologiesCard';
import TechnologyAdd from './TechnologyAdd';

interface tTechCard {
  techPromise: Promise<Ttechnoloy[]>;
  added: Ttechnoloy[];
  setAdded: Dispatch<SetStateAction<Ttechnoloy[]>>;
}

const TechnologiesMap = ({ techPromise, added, setAdded }: tTechCard) => {
  const techs = use(techPromise);

  return (
    <div className=" container mx-auto flex justify-between items-start gap-6 p-4 my-5">
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {techs.map((tech, index) => (
          <TechnologiesCard 
            key={index} 
            tech={tech} 
            added={added} 
            setAdded={setAdded} 
          />
        ))}
      </div>

    
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm w-full max-w-xs shrink-0 ">
        <TechnologyAdd added={added} setAdded={setAdded} />
      </div>
    </div>
  );
};

export default TechnologiesMap;