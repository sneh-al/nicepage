import first from "../assets/1.jpg";

const Gallery = () => {
  return (
    <section className=' has-background-warning is-relative '>
      <div className='bg has-background-black ml-auto '></div>
      <div className='container is-max-widescreen section'>
        <div className='pt-6'>
          <div className='columns '>
            {[1, 2, 3].map((item) => (
              <div className='column' key={item}>
                <figure
                  className={`image is-square ${item === 3 && "is-hidden"}`}>
                  <img src='https://picsum.photos/400' alt='' />
                </figure>
              </div>
            ))}
          </div>
          <div className='columns'>
            {[4, 5, 6].map((item) => (
              <div className='column' key={item}>
                <figure className='image is-1by1 is-480x480'>
                  <img src='https://picsum.photos/480/480' alt='' />
                </figure>
              </div>
            ))}
          </div>
          <div className='columns '>
            <div className='column'>
              <div className='content  '>
                <h3 className='has-text-weight-bold  has-text-black title is-size-3'>
                  Digital Marketing
                </h3>
                <p
                  className='has-text-weight-bold has-text-black pr-5  py-3'
                  style={{ lineHeight: "2rem" }}>
                  Quickly incentivize impactful action items before tactical
                  collaboration and idea-sharing. Monotonically engage
                  market-driven intellectual capital through wireless
                  opportunities. Progressively network performance based
                  services for functionalized testing procedures.
                </p>
              </div>
            </div>
            <div className='column'>
              <figure className='image is-3by4  '>
                <img src='https://picsum.photos/480/700' alt='' />
              </figure>
            </div>
            <div
              className='column last  '
              style={{ overflow: "hidden", flex: 1 }}>
              <div className='line-bg '></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
