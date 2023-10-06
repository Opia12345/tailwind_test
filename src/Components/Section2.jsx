import React from 'react'

const Section2 = () => {
  return (
    <>
        <section className='sec-2 flex justify-evenly flex-wrap'>
          <img src="sec2.png" className='w-64 m-14' alt="" />
        <div className="txt m-14">
            <h1 className='font-medium text-3xl'>
            Light, Fast & Powerful
            </h1>
            <h4 className='mt-4'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            <br /> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
            <br /> dis parturient montes, nascetur ridiculus <br /> 
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              <br /> Nulla consequat massa quis enim.
            </h4>
            <button className='btn1 mt-4'>Purchase Now</button>
        </div>
        </section>
    </>
  )
}

export default Section2