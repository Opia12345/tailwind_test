import React from 'react'

const Section1 = () => {
  return (
    <>
    <section className='sec-1'>
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
        </div>
        <div className="icon-grp mt-4 m-14 ">
          <div className="grp grid md:grid-cols-2 gap-2 grid-cols-1">
          <div className="one">
            <img src='Left.png' className='mb-4' />
            <span>
              <b>Title Goes Here</b><br />
              <small>Lorem ipsum dolor sit amet, consectetuer <br />
               adipiscing elit. Aenean commodo ligula eget <br /> dolor. </small>
            </span>
          </div>

          <div className="one">
            <img src='Left.png' className='mb-4' />
            <span>
              <b>Title Goes Here</b><br />
              <small>Lorem ipsum dolor sit amet, consectetuer <br />
               adipiscing elit. Aenean commodo ligula eget <br /> dolor. </small>
            </span>
          </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Section1