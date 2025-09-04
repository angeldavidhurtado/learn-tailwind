import TechnologyIcons from "./TechnologyIcons"

function BentoItem({ iconSelect, title, description, className, iconClassName }) {
  return (
    <div className={`
      px-2 py-1 rounded-xl relative overflow-hidden min-h-24
      hover:scale-105 hover:contrast-125 transition duration-300
      group ${className}
    `}>
      <span className='bg-black/60 px-2 py-0.5 text-xs rounded-xl block w-min sm:w-fit'>
        {description}
      </span>
      <TechnologyIcons
        iconSelect={iconSelect}
        className={`
          absolute -right-0 -bottom-0.5 size-16 -rotate-6
          group-hover:-rotate-12 group-hover:scale-115 transition-transform
          ${iconClassName}
        `}
      />
      <span className='font-bold text-2xl absolute bottom-2 left-3'>
        {title}
      </span>
    </div>
  )
}

export default BentoItem
