import React from 'react';

const Link = ({route}) => {
    return (
       <li className='mr-10  p-1 rounded-xl hover:bg-amber-400'>
            <a href={route.path}>{route.label}</a>
       </li>
    );
};

export default Link;