import React from 'react';
import { lato } from '@/app/fonts';


const Footer = () => {
    return (
<div className="flex justify-between items-center text-white m-8">
  <div className="flex flex-col justify-between h-[170px] items-start w-[170px]">
    <img src="/2d-logo.svg" alt="Logo" className="h-[80px] w-auto" />
    <span className={`${lato.className} text-[14px]`} >2D PRODUCTION <span className="opacity-30">© 2024</span></span>
  </div>
  <div className="flex flex-col items-center">
  <div className="h-[80px] w-[720px] flex items-center justify-center mb-4 bg-gray-800 rounded-lg">
    <img src="/footer1.svg" alt="Enter your email" className="h-full w-[360px]"/>
  </div>
  <div className="h-[80px] w-[720px] flex items-center justify-center bg-green-500 rounded-lg">
    <img src="/footer2.svg" alt="Send the message" className="h-full w-[360px]"/>
  </div>
</div>


  {/* <div className="flex flex-col items-center"> */}
  {/*   <input type="email" placeholder="ENTER YOUR EMAIL HERE" className="h-[80px] w-[720px] text-center mb-4 p-2 text-black rounded-lg bg-gray-800 placeholder-gray-500"/> */}
  {/*   <button className="h-[80px] w-[720px] text-center p-2 bg-green-500 text-black font-bold rounded-lg">SEND THE MESSAGE</button> */}
  {/* </div> */}

  <div className={`${lato.className} flex flex-col justify-between h-[170px] items-start w-[170px]`}>
    <div >
    <p className="opacity-30">INSTAGRAM</p>
    <a href="https://www.instagram.com/DVA.D.PROD" className="mb-2">@DVA.D.PROD</a>
    </div>
    <div>
    <p className="opacity-30">E-MAIL</p>
    <a href="mailto:SALES@2D.PRO" className="mb-2">SALES@2D.PRO</a>
    </div>
    <div>
    <p className="opacity-30">PHONE NUMBER</p>
    <span>+7 705 495 93 40</span>
    </div>
  </div>
</div>
    );
};

export default Footer;
