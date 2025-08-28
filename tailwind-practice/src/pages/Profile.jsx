import Icon from './../components/Icon'

function Profile() {
  return (
    <>
      <h1 className='text-center'>Hola mundo</h1>

      <img
        className='h-96 mask-radial-at-center mask-radial-from-45% mask-radial-at-80%'
        src="https://angeldavidhurtado.github.io/img/angel-david-hurtado.webp"
        alt="Ángel David Hurtado"
      />

      <Icon iconSelect="email" />
      <Icon iconSelect="linkedin" />
      <Icon iconSelect="email" />
    </>
  )
}

export default Profile
