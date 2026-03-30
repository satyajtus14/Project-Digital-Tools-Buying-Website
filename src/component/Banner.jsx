import React from 'react';
import BannerImage from "../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";
import { CgEditBlackPoint } from "react-icons/cg";

const Banner = () => {
    return (
      <div className='space-y-8 '>
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-300 text-[#9514fa] text-sm font-medium px-5 py-2 rounded-full">
            <CgEditBlackPoint /> New: AI-Powered Tools Available
            </div>
  
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-black-600">
            Supercharge Your
            
              <br />
              <span className="text-black-600">
              Digital Workflow
              </span>
            </h1>
  
            <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            Explore Products

            </p>
  
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-gradient-to-t from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6] transition-all px-8 py-4 rounded-full font-semibold text-lg shadow-xl  flex items-center gap-3 group text-white">
                Explore Products
               
              </button> 
              <button
              className="grad-outline-btn px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 group">
                
              <span className="group-hover:translate-x-1 transition text-[#9514fa] text-xl">
              <CiPlay1 />
              </span>
              Watch Demo
              </button>
            

            </div>
  

          </div>
  
          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                src={BannerImage}
                alt="AI Models Banner"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className='h-50 w-full text-white bg-gradient-to-r from-[#4f39f6] via-[#9514fa] from-[#4f39f6] flex justify-evenly items-center'>
        <div className='flex flex-col items-center gap-1'>
        <h1 className='font-bold text-6xl'>50k+</h1>
        <p>Active Users</p>
        </div> 
     
        <div className="w-px h-16 bg-white/30" />
      
       <div className='flex flex-col items-center gap-1'>
       <h1 className='font-bold text-6xl'>200+</h1>
       <p>Premium Tools</p>
       </div>
      
       <div className="w-px h-16 bg-white/30" />
        
      <div className='flex flex-col items-center gap-1'>
      <h1 className='font-bold text-6xl'>4.9</h1>
      <p>Rating</p>
      </div>
      

    </div>
    
    <div className='text-center'>
      <h1 className='text-6xl font-bold'>Premium Digital Tools</h1> <br />
      <p className='text-[#627382]'>
      Choose from our curated collection of premium digital products designed <br />
      to boost your productivity and creativity.
      </p>
    </div> <br /> <br />
    

    </div>
    );
};

export default Banner;