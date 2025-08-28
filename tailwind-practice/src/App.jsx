import icons from './assets/icons.svg'

function App() {
  return (
    <>
      <h1 className='text-center'>Hola mundo</h1>

      <img
        className='rounded-full'
        src="https://angeldavidhurtado.github.io/img/angel-david-hurtado.webp"
        alt="Ángel David Hurtado"
      />

      <svg className='fill-amber-100 size-5'>
        <use href={`${icons}#email`} />
      </svg>
    </>
  )
}

export default App
