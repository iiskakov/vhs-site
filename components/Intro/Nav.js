import { lato } from '@/app/fonts';
import Link from 'next/link'

const Nav = () => {
  return (
    <div className={`${lato.className} font-medium flex gap-14  absolute right-[25vw] z-20 text-[16px] uppercase mt-4`}>
      {/* IMPORTANT TODO */}
      {/* if will use external page here (such as for all projects - use nextjs link. as it will prerender the page) */}
        <a className="hover:border-b-[1px] hover:border-white" href="/">Home</a>
        <a className="hover:border-b-[1px] hover:border-white" href="#works">Works</a>
        <a className="hover:border-b-[1px] hover:border-white" href="#about">About</a>
        <a className="hover:border-b-[1px] hover:border-white" href="#contact">Contact</a>
    </div>
  )
}

export default Nav;
