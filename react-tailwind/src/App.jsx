function App() {
  return (
    <>
      <h1 className='bg-coffe text-[#FFEECF]'>
        Vite + React
      </h1>
      <p className='w-1/4 bg-amber-800 text-amber-100 m-auto'>
        <span className='text-blue-500'>hola</span> mundo
      </p>

      <div className='size-28 bg-teal-300 w-'></div>
      <div className='size-card bg-violet-600 rounded-md'></div>
      <div className='w-32 h-24 border-4 border-orange-400 bg-zinc-400 rounded-md'></div>

      <div className='grid grid-cols-3 text-white border border-amber-200 w-3xs m-5 gap-2 rounded-sm'>
        <div className='bg-violet-800 text-center rounded-sm'>1</div>
        <div className='bg-violet-800 text-center rounded-sm'>2</div>
        <div className='bg-violet-800 text-center rounded-sm'>3</div>
        <div className='bg-violet-800 text-center rounded-sm'>4</div>
      </div>
    </>
  )
}

export default App
