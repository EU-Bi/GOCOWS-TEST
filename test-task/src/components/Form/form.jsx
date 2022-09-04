import './form.scss'

const Form=()=>{
  return(
    <div className='wrapper-form'>
      <h2>Sign up for our newsletter</h2>
      <form>
        <input type='text' placeholder='....'/>
        <input type="button" id='btn' />
        <label for='btn'>Submit</label>
      </form>
      
    </div>
  )
}
export {Form}