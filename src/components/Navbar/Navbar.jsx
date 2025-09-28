import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from './Link'

const navbar1 = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "About", path: "/about" },
  { id: 3, label: "Services", path: "/services" },
  { id: 4, label: "Blog", path: "/blog" },
  { id: 5, label: "Contact", path: "/contact" }
];


const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = navbar1.map(route => <Link key={route.id} route={route} ></Link>)

  return (

    <div>


      <div className='flex justify-between w-11/12 mx-auto mt-4 items-center'>
        <span onClick={() => setOpen(!open)} className='flex '>
          {open ? <X></X> : <Menu className='md:hidden'></Menu>}

          <ul className={`md:hidden absolute duration-1000 text-black
            ${open ? 'top-12' : '-top-64'}

            bg-amber-200
            rounded-lg
          
            `}>
            {
              links
            }
          </ul>


          <h1 className='ml-3'>My Navbar</h1>

        </span>

        <ul className=' md:flex justify-around hidden'>

          {
            links
          }

        </ul>
        <button className='btn btn-ghost'> Click me</button>

      </div>


    </div>



  );
};

export default Navbar;