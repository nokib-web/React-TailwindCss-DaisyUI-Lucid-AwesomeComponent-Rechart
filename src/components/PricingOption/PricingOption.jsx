import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOption = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    console.log(pricingData)
    return (
        <div className='w-11/12 mx-auto '>
            <h2 className='text-5xl text-center my-4'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing=><DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
                }
                {/* {
                    pricingData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}
            </div>
       
        </div>
    );
};

export default PricingOption;