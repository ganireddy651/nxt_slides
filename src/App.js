import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

const App = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [slidesList, setSlidesList] = useState(initialSlidesList)
  console.log(slidesList, slidesList.length)

  const handleSlideTabClick = index => {
    setActiveSlideIndex(index)
  }

  const handleHeadingChange = event => {
    const updatedSlidesList = [...slidesList]
    updatedSlidesList[activeSlideIndex].heading = event.target.value
    setSlidesList(updatedSlidesList)
  }

  const handleDescriptionChange = event => {
    const updatedSlidesList = [...slidesList]
    updatedSlidesList[activeSlideIndex].description = event.target.value
    setSlidesList(updatedSlidesList)
  }

  const addNewSlide = () => {
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }

    // const updatedSlidesList = [...slidesList]
    // updatedSlidesList.splice(activeSlideIndex + 1, 0, newSlide)

    setSlidesList(prevState => [...prevState, newSlide])
    // setActiveSlideIndex(activeSlideIndex + 1)
  }

  return (
    <div className="app">
      <header className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
          alt="nxt slides logo"
          className="website-logo"
        />
        <h1 className="website-heading">Nxt Slides</h1>
      </header>
      <button className="new-slide-button" type="button" onClick={addNewSlide}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
          alt="new plus icon"
          className="plus-icon"
        />
        New
      </button>
      <div className="slide-container">
        <ol className="sidebar-slide-container">
          {slidesList.map((slide, index) => (
            <li
              key={slide.id}
              className={`slide-tab ${
                index === activeSlideIndex ? 'active-slide' : ''
              }`}
              onClick={() => handleSlideTabClick(index)}
              data-testid={`slideTab${index}`}
            >
              <h1 className="heading">{slide.heading}</h1>
              <p className="description"> {slide.description}</p>
            </li>
          ))}
        </ol>
        <div className="active-slide-container">
          <div className="slide-content">
            <input
              type="text"
              value={slidesList[activeSlideIndex].heading}
              onChange={handleHeadingChange}
              className="heading-input"
            />
          </div>
          <div className="slide-content">
            <input
              type="text"
              value={slidesList[activeSlideIndex].description}
              onChange={handleDescriptionChange}
              className="description-input"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
