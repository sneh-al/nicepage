const Hero = () => {
  return (
    <section className='hero is-fullheight img-bg  '>
      <div className='mt-auto'>
        <div className='container is-max-widescreen '>
          <div className='section  m-auto-touch' style={{ maxWidth: 550 }}>
            <h1 className='title has-text-white has-text-bold is-size-2 m-0 has-text-left-desktop has-text-centered'>
              Just the right amount
            </h1>
            <h1 className='title has-text-white has-text-bold is-size-2 mt-0 has-text-left-desktop has-text-centered'>
              of everything.
            </h1>
            <div className=''>
              <div className=' columns'>
                <div className='column is-three-quarters'>
                  <input
                    className='input is-danger'
                    type='email'
                    placeholder='Enter a valid email address'
                  />
                </div>
                <div className='column'>
                  <button className=' button is-warning is-fullwidth has-text-weight-bold has-text-white'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
