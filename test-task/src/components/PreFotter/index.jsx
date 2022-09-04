import image1 from './photo/image1.png'
import image2 from './photo/image2.png'
import './index.scss'
const PreFotter=()=>{
  return(
    <div className='wrapper-block-prefotter'>
        <div className='block-prefotter'>
          <img src={image1}/>
          <h4>Lifestyle</h4>
          <h2>More than just a music festival</h2>
          <p className='discription-block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
        <div className='block-prefotter'>
          <img src={image2}/>
          <h4>Lifestyle</h4>
          <h2>More than just a music festival</h2>
          <p className='discription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
    </div>
  )
}
export{PreFotter}