function App() {
  return (
    <>
      <h1 className='bg-coffe text-[#FFEECF] sm:bg-cyan-800 desktop:bg-blue-400'>
        Vite + React
      </h1>
      <p className='w-1/4 bg-amber-800 text-amber-100 m-auto'>
        <span className='text-blue-500'>hola</span> mundo
      </p>

      <div className='size-28 bg-teal-300 w-'></div>
      <div className='size-card bg-violet-600 rounded-md'></div>
      <div className='w-32 h-24 border-4 border-orange-400 bg-zinc-400 rounded-md'></div>

      <div className='grid grid-cols-3 text-white border border-amber-200 w-3xs m-5 gap-2 rounded-sm'>
        <div className='bg-violet-800 text-center rounded-sm col-start-2'>1</div>
        <div className='bg-violet-800 text-center rounded-sm col-start-1 col-span-full'>2</div>
        <div className='bg-violet-800 text-center rounded-sm'>3</div>
        <div className='bg-violet-800 text-center rounded-sm -col-end-1 col-span-2'>4</div>
      </div>

      <p className='text-white tablet:max-desktop:bg-amber-200 tablet:max-desktop:text-black'>
        Cambio de color en rango
      </p>

      <div className='@container resize overflow-hidden mb-5 border border-white m-5 rounded-md w-1/2'>
        <div className='flex @sm:flex-col gap-1'>
          <div className='bg-violet-700 text-white text-center rounded-md grow'>1</div>
          <div className='bg-violet-700 text-white text-center rounded-md grow'>2</div>
          <div className='bg-violet-700 text-white text-center rounded-md grow'>3</div>
        </div>
      </div>

      <button className='hover:bg-blue-800 bg-blue-700 cursor-pointer text-white text-lg px-4 py-2 rounded-md'>
        Hola
      </button>
    </>
  )
}

export default App
