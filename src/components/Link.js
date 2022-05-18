import './Link.css'

const Link = ({ href, rel, target, className, title}) => {
  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={rel}
    >
      { title }
    </a>
  )
}

export default Link
