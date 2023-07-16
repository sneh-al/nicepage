import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { FaGooglePlusG } from "react-icons/fa";
import Form from "./FOrm";

const Last = () => {
  return (
    <div className='has-background-black  is-flex last-bg'>
      <div className='container is-max-widescreen'>
        <div className='columns content  '>
          <div className='column m-auto '>
            <Section title='Location '>
              <p className='mb-0 pb-0  subtitle has-text-white'>
                28 Jackson Blvd Ste 1020 Chicago{" "}
              </p>
              <p className='subtitle has-text-white'>IL 60604-2340</p>
            </Section>
            <Section title='Follow us'>
              <div className=' m-auto-touch'>
                {[
                  SlSocialFacebook,
                  SlSocialTwitter,
                  SlSocialInstagram,
                  FaGooglePlusG,
                ].map((Social, i) => (
                  <a
                    className='has-background-white is-rounded button p-1  '
                    key={i}
                    style={{ margin: "0.5rem", height: 40, width: 40 }}>
                    <Social
                      size={20}
                      className='has-text-dark has-text-weight-bold '
                    />
                  </a>
                ))}
              </div>
              <p className=' subtitle has-text-white pt-5'>
                ©2018 Privacy policy
              </p>
            </Section>
          </div>
          <div className='column section'>
            <Section title='Contact Form'>
              <Form />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;

const Section = ({ title, children }) => {
  return (
    <section className='section px-0 has-text-centered-touch'>
      <h2 className='has-text-white title has-text-weight-bold is-size-3'>
        {title}
      </h2>
      <div className=''>{children}</div>
    </section>
  );
};
