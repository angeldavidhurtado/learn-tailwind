import Icon from './../components/Icon'
import BentoItem from '../components/BentoItem'

function Profile() {
  return (
    <div className='max-w-96 m-auto p-4'>
      <img
        className='mask-radial-at-center mask-radial-from-45% mask-radial-to-75% animate-pulse-fade-in'
        src='https://angeldavidhurtado.github.io/img/angel-david-hurtado.webp'
        alt='Ángel David Hurtado'
      />
      <h1 className='text-center text-3xl font-bold -mt-4 mb-4'>Ángel David Hurtado</h1>
      <ul className='flex gap-2 justify-center'>
        <li className='bg-black p-3 inline-block rounded-full animate-slide-up-fade animate-delay-100'>
          <a href='https://www.linkedin.com/in/angeldavidhurtado' target='_blank'>
            <Icon iconSelect='linkedin' />
          </a>
        </li>
        <li className='bg-black p-3 inline-block rounded-full animate-slide-up-fade animate-delay-200'>
          <a href='https://github.com/angeldavidhurtado' target='_blank'>
            <Icon iconSelect='github' />
          </a>
        </li>
        <li className='bg-black p-3 inline-block rounded-full animate-slide-up-fade animate-delay-300'>
          <a href='https://medium.com/@angeldavidhurtado' target='_blank'>
            <Icon iconSelect='medium' />
          </a>
        </li>
      </ul>
      <p className='mt-4 text-center text-sm text-balance'>
        Frontend Developer, React, Node.js, JavaScript, PostgreSQL, MongoDB, MySQL, HTML5, CSS3
      </p>
      <div className='grid grid-cols-5 grid-rows-2 gap-2 mt-5'>
        <BentoItem
          iconSelect='react'
          title='React'
          description='Librearía de JavaScript'
          className='col-span-3 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800'
        />
        <BentoItem
          iconSelect='css'
          title='CSS'
          description='Estilos'
          className='col-span-2 bg-gradient-to-br from-violet-700 via-violet-600 to-violet-900'
        />
        <BentoItem
          iconSelect='html'
          title='HTML'
          description='Maquetación'
          className='col-span-2 bg-gradient-to-br from-orange-700 via-orange-600 to-orange-800'
          iconClassName='-right-2'
        />
        <BentoItem
          iconSelect='js'
          title='JavaScript'
          description='Lenguaje de programación'
          className='col-span-3 bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-800'
        />
      </div>
    </div>
  )
}

export default Profile
