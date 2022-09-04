import  mainphoto from './photo/main-photo.png'
import './header.scss'

const Header=()=>{
  return(
    <header className='Header'>
      <div className='fixed'>
        <div className='headBar'>
          <div className='logo'>
            <h3>minimo</h3>
          </div>
          <div className='links'>
            <a href="">lifestyle</a>
            <a href="">photodiary</a>
            <a href="">music</a>
            <a href="">travel</a>
          </div>
        </div>
      </div>
      
      <div>
        <img src={mainphoto} alt="" />
      </div>
    </header>
  )
}

export {Header}