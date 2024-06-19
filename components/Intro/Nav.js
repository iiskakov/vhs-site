import { lato } from '@/app/fonts';
import Link from 'next/link'

const Nav = () => {
  return (
    <div className={`${lato.className} font-medium flex gap-14  absolute right-[25vw] z-20 text-[16px] uppercase mt-4`}>
        <Link className="hover:border-b-[1px] hover:border-white" href="/dashboard">Home</Link>
        <Link className="hover:border-b-[1px] hover:border-white" href="/dashboard">Works</Link>
        <Link className="hover:border-b-[1px] hover:border-white" href="/dashboard">About</Link>
        <Link className="hover:border-b-[1px] hover:border-white" href="/dashboard">Contact</Link>
    </div>
  )
}

export default Nav;
