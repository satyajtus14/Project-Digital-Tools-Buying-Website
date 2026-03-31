import React from "react";
import userImg from "../assets/user.png";
import product from "../assets/package.png";
import rocket from "../assets/rocket.png";
import { VscCheck } from "react-icons/vsc";

const OtherStaticElements = () => {
  return (
    <div>
      <div className="mt-25">
        {/* Ribbon section */}
        <div className="h-50 w-full text-white bg-gradient-to-r from-[#4f39f6] via-[#9514fa] from-[#4f39f6] flex justify-evenly items-center">
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-bold text-6xl">50k+</h1>
            <p>Active Users</p>
          </div>

          <div className="w-px h-16 bg-white/30" />

          <div className="flex flex-col items-center gap-1">
            <h1 className="font-bold text-6xl">200+</h1>
            <p>Premium Tools</p>
          </div>

          <div className="w-px h-16 bg-white/30" />

          <div className="flex flex-col items-center gap-1">
            <h1 className="font-bold text-6xl">4.9</h1>
            <p>Rating</p>
          </div>
        </div>

        {/* Section 3 steps */}
        <section>
          <div className="max-w-7xl mx-auto mt-35">
            <div>
              {/* Section of 3 steps */}
              <h1 className="mx-auto font-bold text-4xl text-center">
                Get Started in 3 Steps
              </h1>
              <p className="text-center mt-4">
                Start using premium digital tools in minutes, not hours.
              </p>
            </div>

            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 mt-10">
                {/* no -1 */}
                <div className="border-2 border-base-300 rounded-3xl">
                  <div className="relative inline-flex">
                    <button className="btn btn-ghost btn-circle"></button>
                    <span
                      className="badge badge-primary badge-sm absolute 
                  top-4.5 -right-90.5 w-10 h-10 border-2 border-base-100 text-white rounded-full"
                    >
                      01
                    </span>
                  </div>
                  <div className="p-4 mb-8">
                    <img
                      src={userImg}
                      alt=""
                      className="border-2 border-base-300 rounded-full h-20 w-20 mx-auto"
                    />
                    <h2 className="text-center font-bold text-xl">
                      Create Account
                    </h2>
                    <p className="text-center">
                      Sign up for free in seconds. No credit card <br />
                      required to get started.
                    </p>
                  </div>
                </div>

                {/* no -2 */}

                <div className="border-2 border-base-300 rounded-3xl">
                  <div className="relative inline-flex">
                    <button className="btn btn-ghost btn-circle"></button>
                    <span
                      className="badge badge-primary badge-sm absolute 
                  top-4.5 -right-90.5 w-10 h-10 border-2 border-base-100 text-white rounded-full"
                    >
                      02
                    </span>
                  </div>
                  <div className="p-4 mb-8">
                    <img
                      src={product}
                      alt=""
                      className="border-2 border-base-300 rounded-full h-20 w-20 mx-auto"
                    />
                    <h2 className="text-center font-bold text-xl">
                      Choose Products
                    </h2>
                    <p className="text-center">
                      Browse our catalog and select the tools <br />
                      that fit your needs.
                    </p>
                  </div>
                </div>

                {/* no-3 */}
                <div className="border-2 border-base-300 rounded-3xl">
                  <div className="relative inline-flex">
                    <button className="btn btn-ghost btn-circle"></button>
                    <span
                      className="badge badge-primary badge-sm absolute 
                  top-4.5 -right-90.5 w-10 h-10 border-2 border-base-100 text-white rounded-full"
                    >
                      03
                    </span>
                  </div>
                  <div className="p-4 mb-8">
                    <img
                      src={rocket}
                      alt=""
                      className="border-2 border-base-300 rounded-full h-20 w-20 mx-auto"
                    />
                    <h2 className="text-center font-bold text-xl">
                      Start Creating
                    </h2>
                    <p className="text-center">
                      Download and start using your premium <br />
                      tools immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Pricing Section */}
        <section className="mt-35">
          <div className="border-2 border-base-300 rounded-xl">
            <div>
              <h1 className="text-center font-bold text-4xl mt-20">
                Simple, Transparent Pricing
              </h1>
              <p className="text-center mt-2">
                Choose the plan that fits your needs. Upgrade or downgrade
                anytime.
              </p>
            </div>

            {/* Three cards display membership price */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 mt-5 mb-8">
              {/* Card-1 */}
              <div className="border-2 border-base-300 rounded-3xl p-4">
                <h2 className="text-lg font-bold">Starter</h2>
                <p>Perfect for getting started</p>
                <div className="mt-3">
                  <h1 className="text-3xl font-bold">
                    $0<span className="text-lg font-medium">/Month</span>
                  </h1>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Access to 10 free tools</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Basic templates</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Community support</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>1 project per month</p>
                  </div>
                </div>

                <div className="mt-20">
                <button 
            className="btn w-full text-white rounded-lg mt-20 bg-gradient-to-t from-[#4f39f6] to-[#9514fa]" >Get Started Free</button>
                </div>
              </div>

              {/* Card-2 */}
              <div className="border-2 border-base-300 bg-gradient-to-t from-[#4f39f6] to-[#9514fa] text-white rounded-3xl p-4">
                 <div className="relative inline-flex">
                    <button className="btn btn-ghost btn-circle"></button>
                    <span
                      className="badge badge-primary badge-sm absolute 
                  -top-7.5 -right-55 w-35 h-8 border-2 border-base-100 bg-amber-400 text-amber-800 rounded-2xl font-bold"
                    >
                      Most Popular
                    </span>
                  </div>
                  <div>
                  <h2 className="text-lg font-bold">Pro</h2>
                  <p>Best for professionals</p>
                  </div>
                <div className="mt-3">
                  <h1 className="text-3xl font-bold">
                    $29<span className="text-lg font-medium">/Month</span>
                  </h1>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-white-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Access to all premium tools</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-white-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Unlimited templates</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-white-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Priority support</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-white-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Unlimited projects</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Cloud sync</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Advanced analytics</p>
                  </div>
                </div>

                <div className="mt-8">
                <button 
            className="btn w-full text-[#9514fa] rounded-xl mt-5 bg-white h-15" >Start Pro Trial</button>
                </div>
              </div>

              {/* Card-3 */}
              <div className="border-2 border-base-300 rounded-3xl p-4">
                <h2 className="text-lg font-bold">Enterprise</h2>
                <p>For teams and businesses</p>
                <div className="mt-3">
                  <h1 className="text-3xl font-bold">
                    $99<span className="text-lg font-medium">/Month</span>
                  </h1>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Everything in Pro</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Team collaboration</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Custom integrations</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Dedicated support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>SLA guarantee</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">
                      <VscCheck />
                    </span>
                    <p>Custom branding</p>
                  </div>
                   
                </div>

                <div className="mt-20">
                <button 
            className="btn w-full text-white rounded-lg mt-5 bg-gradient-to-t from-[#4f39f6] to-[#9514fa]">Contact Sales</button>
                </div>
              </div>

            </div>
          </div>
        </section>

     {/* Bottom Ribbon */}
        <section>
      <div className='p-10 h-80 w-full text-white bg-gradient-to-r from-[#4f39f6] via-[#9514fa] from-[#4f39f6]'>
        <h1 className='text-center font-bold text-center text-6xl'>Ready to Transform Your Workflow?</h1>
        <p className='text-center mt-3 mb-3'>Join thousands of professionals who are already using Digitools to work smarter. <br />
        Start your free trial today.</p>
      
        <div className="mt-3 flex justify-center items-center gap-2">
            <button className="btn rounded-full text-[#9514fa]">Explore Products</button>
            <button className="btn rounded-full text-white btn-outline bg-[#9514fa] p-5">View Pricing</button>
        </div>
        <p className="mb-8 text-center p-5">14-day free trial • No credit card required • Cancel anytime</p>
     
        
     </div>
    
        </section>
      </div>
    </div>
  );
};

export default OtherStaticElements;
