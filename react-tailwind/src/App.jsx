import { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('Ángel')
  const [lastName, setLastName] = useState('Hurtado')
  const handleChangeName = e => setName(e.target.value)
  const handleChangeLastName = e => {}

  const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem('theme')

    if (storageTheme === 'light')
      return 'light'
    else if (storageTheme === 'dark')
      return 'dark'
    else
      return 'system'
  })


  /*
  // Apply theme
  useEffect(() => {
    const htmlElement = document.documentElement

    if (theme === 'light')
      htmlElement.classList.remove('dark')
    else if (theme === 'dark')
      htmlElement.classList.add('dark')
    else if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

      const isDark = mediaQuery.matches
      setTheme(isDark ? 'dark' : 'light')
      if (isDark)
        htmlElement.classList.add('dark')
      else
        htmlElement.classList.remove('dark')

      const handlerSystemThemeChange = e => {
        console.log('cambio del sistema')
        setTheme(e.matches ? 'dark' : 'light')
      }
      mediaQuery.addEventListener('change', handlerSystemThemeChange)

      // Clear the listener event when unmounting the component
      // return () => mediaQuery.removeEventListener('change', handlerSystemThemeChange)
      return () => { console.log('chao') }
    }
  }, [theme])
  */


  // useEffect para manejar el tema
  useEffect(() => {
    const htmlElement = document.documentElement
    localStorage.setItem('theme', theme)

    if (theme === 'light')
      htmlElement.classList.remove('dark')
    else if (theme === 'dark')
      htmlElement.classList.add('dark')
    else if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

      // Función para manejar los cambios del tema del sistema
      const handleSystemChange = e => {
        // Solo actualiza si la opción del usuario es 'system'
        htmlElement.classList.toggle('dark', e.matches)
      }

      htmlElement.classList.toggle('dark', mediaQuery.matches)
      mediaQuery.addEventListener('change', handleSystemChange)

      // Función de limpieza - Se asegura de eliminar el listener, solo si fue agregado
      return () => {
        console.log('Removio el evento')
        mediaQuery.removeEventListener('change', handleSystemChange)
      }
    }
  }, [theme])
  // htmlElement.classList.toggle('dark', savedTheme === 'dark')


  return (
    <div className='absolute'>
      <div
        className='bg-white text-black dark:bg-black dark:text-white p-5 flex justify-between items-center'
      >
        <p>
          Modo oscuro
        </p>
        <div className='flex gap-2'>
          <button
            className='border border-black px-2 py-1 rounded-md hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer dark:border-white dark:hover:bg-white dark:hover:text-black'
            onClick={() => setTheme('system')}
          >
            Sistema
          </button>
          <button
            className='border border-black px-2 py-1 rounded-md hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer dark:border-white dark:hover:bg-white dark:hover:text-black'
            onClick={() => setTheme('light')}
          >
            Claro
          </button>
          <button
            className='border border-black px-2 py-1 rounded-md hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer dark:border-white dark:hover:bg-white dark:hover:text-black'
            onClick={() => setTheme('dark')}
          >
            Oscuro
          </button>
        </div>
      </div>

      <img
        className='drop-shadow-xl drop-shadow-green-800 -z-10 relative m-auto max-w-full'
        src="/guitar.webp"
        alt=""
      />

      <h1 className='bg-coffe text-[#FFEECF] sm:bg-cyan-800 desktop:bg-blue-400 z-10 relative'>
        Vite + React
      </h1>
      <p className='w-1/4 bg-amber-800 text-amber-100 m-auto'>
        <span className='text-blue-500'>hola</span> mundo
      </p>

      <div className='size-28 bg-teal-300 w-'></div>
      <div className='size-card bg-violet-600 rounded-md'></div>
      <div className='w-32 h-24 border-4 border-orange-400 bg-zinc-400 rounded-md'></div>

      <div className='grid grid-cols-3 text-white border border-amber-200 w-3xs m-5 gap-2 rounded-sm'>
        <div className='button bg-violet-950 col-start-2'>1</div>
        <div className='button col-start-1 col-span-full'>2</div>
        <div className='button'>3</div>
        <div className='button -col-end-1 col-span-2'>4</div>
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

      <button className='hover:bg-blue-800 bg-blue-700 cursor-pointer text-white text-lg px-4 py-2 rounded-md transition-colors duration-300'>
        Hola
      </button>

      <ol className='p-5'>
        <li className='text-white first:bg-amber-200 first:text-black last:bg-cyan-500 only:bg-orange-500'>HTML</li>
        <li className='text-white first:bg-amber-200 first:text-black last:bg-cyan-500 only:bg-orange-500'>CSS</li>
        <li className='text-white first:bg-amber-200 first:text-black last:bg-cyan-500 only:bg-orange-500'>Tailwind</li>
      </ol>

      <form>
        <input
          className='text-white border border-white required:border-red-500'
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={handleChangeName}
          required={true}
        />

        <input
          className='text-white border border-white disabled:bg-gray-400'
          type="text"
          placeholder="Apellido"
          value={lastName}
          onChange={handleChangeLastName}
          disabled={true}
        />
      </form>

      <label
        className='after:content-["*"] after:ml-2 after:text-red-500 bg-white'
      >
        Email:
      </label>
      <input
        className='placeholder:text-blue-700 bg-white outline-none'
        type="email"
        placeholder='Email'
      />

      <input
        className='block bg-white file:bg-amber-500 file:rounded-full file:px-3 file:py-1 file:cursor-pointer hover:file:bg-amber-800'
        type="file"
      />

      <ul className='inset-0 list-disc marker:text-sky-400 ml-8 text-sky-400'>
        <li>React</li>
        <li>Tailwind</li>
        <li>TypeScript</li>
      </ul>

      <p
        className='selection:bg-green-400 selection:underline first-line:uppercase first-letter:font-bold first-letter:text-7xl first-letter:float-left first-letter:mr-2 w-3/4 m-auto bg-white px-4 py-3 rounded-md'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod, earum recusandae repellendus nemo similique, magnam vitae, nulla fugiat sed assumenda quibusdam iusto quae ducimus blanditiis est alias nam temporibus.
      </p>

      <div className="container mx-auto bg-white :bg-amber-500">
        <p>Contenido centrado y con máximo ancho por pantalla</p>
      </div>

      <div className="relative h-40 bg-emerald-700">
        <div className="absolute bg-blue-200 inset-0">
          Cubre todo el contenedor
        </div>
      </div>
      <div className="absolute h-40 bg-emerald-700">
        <div className="relative bg-blue-200 inset-0">
          Cubre todo el contenedor
        </div>
      </div>
    </div>
  )
}

export default App
