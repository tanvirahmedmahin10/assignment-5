import type { Dispatch, SetStateAction } from "react";
import type { Ttechnoloy } from "../../Type";

interface tCardAdd{
    added:Ttechnoloy[], 
    setAdded:Dispatch<SetStateAction<Ttechnoloy[]>>
}

const TechnologyAdd = ({added,setAdded}:tCardAdd) => {
    return (
        <div>
            sdsad
            
            {/* {
                added.map(add=>add.name)
            } */}
        </div>
    );
};

export default TechnologyAdd;