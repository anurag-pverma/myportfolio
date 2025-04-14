import React from 'react'

function Home() {
  return (
    <div className=' bg-stone-900 justify-center pt-16 px-4 relative'>
    
    <div className='container mx-auto max-w-4xl'>

        <div className='animation-fadeIn' style={{ animationDelay: '0.2s', animationFillMode:'forwards'}}>
            <p className='text-highlight font-mono mb-5 text-emerald-300'>Namaste🙏, My name is</p>
        </div>

    </div>


    <div className='contatiner mx-auto max-w-4xl'
     style={{ animationDelay: '0.4s', animationFillMode:'forwards'}}
    >
        <h1 className='text-6xl md:6xl font-bold font-mono mb-4 text-amber-800'>
            Anurag Verma,
        </h1>
    </div>


    <div className='contatiner mx-auto max-w-4xl'>
        <h2 className='text-3xl md:text-3xl font-bold font-mono mb-4 text-slate-400'>I build things for web.</h2>
    </div>



    <div className='contatiner mx-auto max-w-4xl' >
    <p className='text-lg font-normal font-mono mb-8 text-slate-400'>
    I'm a <span className='text-emerald-300'>Full Stack Developer</span> with strong focus on frontend technologies.
    I specialize in crafting responsive, high-performance web applications that enhance user engagement  and business efficiency.
    </p>
    </div>


    <div className='flex gap-4 mx-auto max-w-4xl'>
    <button className="bg-amber-800 hover:bg-amber-700 text-slate-200 font-bold py-2 px-4 border border-amber-700 rounded">
    View My Work
    </button>

    <button className="bg-transparent hover:bg-amber-700 text-amber-700 font-semibold hover:text-slate-200 py-2 px-4 border border-amber-700 hover:border-transparent rounded">
    Contact ME
    </button>

    </div>


    </div>
  )
}

export default Home
