import Person from "../assets/person.png";
const About = () => {
  return (
    <div className='has-background-warning  m-0 pb-2'>
      <div className='container is-max-widescreen'>
        <div className='columns is-vcentered  '>
          <div className='column'>
            <div className='has-text-centered has-text-left-desktop section'>
              <h1 className='title has-text-black has-text-weight-bold'>
                About harness multimedia based collaboration.
              </h1>
              <p className='has-text-weight-bold has-text-black'>
                Quickly incentivize impactful action items before tactical
                collaboration and idea-sharing. Monotonically engage
                market-driven intellectual capital through wireless
                opportunities. Progressively network performance based services
                for functionalized testing procedures.
              </p>
            </div>
          </div>
          <div className='column pb-0'>
            <div className=''>
              <figure className='image section mb-0 pb-0'>
                <img src={Person} alt='' width={400} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
