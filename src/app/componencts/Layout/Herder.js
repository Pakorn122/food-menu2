'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  console.log(session)
  const status = session.status
  return (
    <>
     <header className='flex item-center justify-between'>
      <nav className='flex item-center gap-5 text-gray-400 font-semibold '>
      <Link className="text-primary font-semibold text-2xl" href=''>
        Food Menu</Link>
        < Link href ={'/.'}>Home</Link>
        < Link href ={'/Profile'}>Profile</Link>
        < Link href ={'/Recipes'}>Recipes</Link>
        < Link href ={'/about'}>About</Link>
      
      </nav>
      
      <nav className='flex item-center gap-5 text-gray-400 font-semibold '>
        {status === 'authenticated'&&(
             < Link href ={'/Register'}className='bg-primary rounded-full text-white px-3 
             py-2'>
          Logout
             </Link>
             
        )}
        {status !== 'authenticated'&&(
        <>
          < Link href ={'/Login'}>Login</Link>
           < Link href ={'/Register'}className='bg-primary rounded-full text-white px-3 
          py-2'>
           Register
          </Link>
        </>
        )}
      
      

      </nav>
      
    </header>
    </>
  );
  }
