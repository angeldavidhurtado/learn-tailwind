import icons from './../assets/technology-icons.svg'

function TechnologyIcons({ iconSelect }) {
	return (
		<svg className='fill-amber-100 size-5'>
			<use href={`${icons}#${iconSelect}`} />
		</svg>
	)
}

export default TechnologyIcons
