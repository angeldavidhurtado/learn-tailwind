import Icon from './../components/Icon'

function Profile() {
  return (
    <div className='max-w-96 m-auto'>
      <img
        className='h-96 mask-radial-at-center mask-radial-from-45% mask-radial-to-75%'
        src="https://angeldavidhurtado.github.io/img/angel-david-hurtado.webp"
        alt="Ángel David Hurtado"
      />

      <h1 className='text-center text-3xl font-bold my-4'>Ángel David Hurtado</h1>

      <ul className='flex gap-2 justify-center'>
        <li>
          <a href="https://www.linkedin.com/in/angeldavidhurtado" target='_blank'>
            <Icon iconSelect="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/angeldavidhurtado" target='_blank'>
            <Icon iconSelect="github" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@angeldavidhurtado" target='_blank'>
            <Icon iconSelect="medium" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Profile
