import './footer.scss'



const Footer=()=>{
  return(
    <footer className='wrapper-footer'>
      <div className='wrapper-terms'>
        <p>Terms and conditions</p>
        <p>Privacy</p>
      </div>
      <div className='wrapper-links'>
        <p>Follow</p>
        
          <a className='facebook' href='#'/>
        
        
          <a className='twiter' href='#'/>
        
          <a className='inst' href='#'/>
        
      </div>
    </footer>
  )
}
export{Footer}