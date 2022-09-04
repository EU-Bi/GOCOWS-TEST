import './main.scss'
import img2 from './photo/img2.png'
import image1 from './photo/image1.png'
import image3 from './photo/image3.png'
import image4 from './photo/image4.png'
const Main = ()=>{
  return(
    <main className='main-mid'>
      <div>
        <h4>photodiary</h4>
        <h2>The perfect weekend getaway</h2>
        <p className='discription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div> 
      <h4>Leave a comment</h4>
      <div className='wrapper-block'>
        <div className='block'>
          <img src={image1}/>
          <h4>Lifestyle</h4>
          <h2>More than just a music festival</h2>
          <p className='discription-block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
        <div className='block'>
          <img src={img2}/>
          <h4>Lifestyle</h4>
          <h2>More than just a music festival</h2>
          <p className='discription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
        <div className='block'>
          <img src={image3}/>
          <h4>Lifestyle</h4>
          <h2>More than just a music festival</h2>
          <p className='discription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
        <div className='block'>
          <img src={image4}/>
          <h4>Lifestyle</h4>
          <h2>More than just a music festival</h2>
          <p className='discription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
      </div>
    </main>
  )
}
export {Main}