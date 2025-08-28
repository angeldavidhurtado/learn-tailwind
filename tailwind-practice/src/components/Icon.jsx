import icons from './../assets/icons.svg'

function Icon({ iconSelect }) {
	return (
		<svg className='fill-amber-100 size-5'>
			<use href={`${icons}#${iconSelect}`} />
		</svg>
	)
}

export default Icon
