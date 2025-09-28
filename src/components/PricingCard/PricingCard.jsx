import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
   const {name, price, description , features}=pricing
    return (
        <div className=' flex flex-col bg-amber-500 p-4 rounded-2xl'>
            {/* Card Header */}

            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>

            <div className='bg-amber-400 mt-10 rounded-2xl p-4 flex-1'>
                {/* Card body */}
                <p >{description}</p>
                {
                    features.map((feature,index)=><PricingFeature key={index} feature={feature}></PricingFeature>)
                }


            </div>

            <button className="btn w-full mt-10 rounded-xl bg-amber-600 border-none">Subscribe</button>
        </div>
    );
};

export default PricingCard;