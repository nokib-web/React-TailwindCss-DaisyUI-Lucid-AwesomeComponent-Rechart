import {  CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    console.log(feature)
    return (
       <p className='flex gap-4 mt-4'>
        <CircleCheckBig></CircleCheckBig>
        {feature}
       </p>
    );
};

export default PricingFeature;