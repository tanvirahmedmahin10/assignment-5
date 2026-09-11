
import { use } from 'react';
import type { Ttechnoloy } from '../../Type';

interface tTechCard{
    techPromise:Promise<Ttechnoloy[]>
}

const TechnologiesCard = ({techPromise}:tTechCard) => {
    const techs=use(techPromise)
    return (
        <div>
            
        </div>
    );
};

export default TechnologiesCard;