import './form.scss'

const Form=()=>{
  return(
    <div className='wrapper-form'>
      <h2>Sign up for our newsletter</h2>
      <form>
        <input className='input' type='text' placeholder='....'/>
        <input className='btn' type="button" id='btn' />
        <label className='label'for='btn'></label>
      </form>
      
    </div>
  )
}
export {Form}