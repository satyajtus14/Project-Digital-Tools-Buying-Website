import React, { use } from 'react';
import ModelCard from './ModelCard';


const DigiModel = ({modelPromise,carts,setCarts}) => {

    
    const modelData = use(modelPromise);
    console.log(modelData);

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    modelData.map(model => 
                        <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}/>    
                    )
                }

            </div>
        </div>
    );
};

export default DigiModel;