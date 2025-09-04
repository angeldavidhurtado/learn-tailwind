import icons from './../assets/technology-icons.svg'

function TechnologyIcons({ iconSelect, className }) {
	return (
		<svg className={`fill-amber-100 size-5 ${className}`}>
			<use href={`${icons}#${iconSelect}`} />
		</svg>
	)
}

export default TechnologyIcons
