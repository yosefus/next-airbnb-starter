import NavLink from './NavLink'
import Search from './Search'

export default function Nav() {

   return (
      <div className='bg-pink-500 p-4 flex gap-4'>
         <NavLink href='/'>Home</NavLink>
         <Search/>
      </div>
   )
}
