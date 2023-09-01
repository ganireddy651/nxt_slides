import './index.css'

const SlideItemList = props => {
  const {eachSlide, activeSlide, isActive} = props
  const {heading, description, id} = eachSlide

  const activeSlideTab = () => {
    activeSlide(id)
  }

  const slideBackground = isActive ? 'active-slide' : 'slide-card-button'

  return (
    <li>
      <button
        type="button"
        className={slideBackground}
        onClick={activeSlideTab}
      >
        <div className="slide-card">
          <h1 className="heading">{heading}</h1>
          <p className="description">{description}</p>
        </div>
      </button>
    </li>
  )
}

export default SlideItemList
