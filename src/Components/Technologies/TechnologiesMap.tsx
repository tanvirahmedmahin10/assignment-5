
import { use } from 'react';
import type { Ttechnoloy } from '../../Type';
import TechnologiesCard from './TechnologiesCard';

interface tTechCard{
    techPromise:Promise<Ttechnoloy[]>
}

const TechnologiesMap = ({techPromise}:tTechCard) => {
    const techs=use(techPromise)
    return (
        <div className="container mx-auto grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {
                techs.map((tech,index)=><TechnologiesCard key={index} tech={tech}/>
                
            )
            }
        </div>
    );
};

export default TechnologiesMap;