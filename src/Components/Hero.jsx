import React from 'react'

const Hero = () => {
  return (
    <>
    <header>
        <div className="txt p-14">
        <h1 className='font-black text-3xl'>
            Introduce Your Product <br /> Quickly & Effectively</h1>
            <h4 className='mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> 
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque <br />
             penatibus et magnis dis parturient montes, nascetur ridiculus <br />
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, <br /> sem. Nulla consequat massa quis enim.</h4>
            <div className="btn-grp space-x-3 mt-4">
                <button className='bg-blue-900 px-3 py-1 rounded text-white hover:scale-95 transition duration-700 hover:shadow-xl'>Purchase UI Kit</button>
                <button className='border border-blue-900 px-3 py-1 rounded text-blue-900 hover:bg-blue-900 hover:text-white transition duration-300'>Learn More</button>
            </div>
        </div>
    </header>
    </>
  )
}

export default Hero