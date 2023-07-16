const Form = () => {
  return (
    <div>
      <div className='field py-3 '>
        <div className='control'>
          <input className='input' type='text' placeholder='Enter Your Name' />
        </div>
      </div>

      <div className='field pb-3 '>
        <div className='control '>
          <input
            className='input is-danger'
            type='email'
            placeholder='Enter your valid email address'
          />
        </div>
      </div>

      <div className='field pb-3'>
        <div className='control'>
          <textarea
            className='textarea'
            placeholder='Enter your message'></textarea>
        </div>
      </div>
      <button
        className='button  is-white is-light is-outlined is-size-6'
        style={{ width: "8rem", letterSpacing: 3 }}>
        SUBMIT
      </button>
    </div>
  );
};

export default Form;
