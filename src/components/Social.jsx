import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialPintarest,
  SlSocialTwitter,
} from "react-icons/sl";

const Social = () => {
  return (
    <div className='has-background-danger is-flex-direction-column section'>
      <h2 className='has-text-white title has-text-weight-bold is-size-3  has-text-centered'>
        Follow Us!
      </h2>
      <div className='has-text-centered'>
        {[
          SlSocialFacebook,
          SlSocialTwitter,
          SlSocialInstagram,
          SlSocialLinkedin,
          SlSocialPintarest,
        ].map((Social, i) => (
          <Social size={30} key={i} className='has-text-white m-4' />
        ))}
      </div>
    </div>
  );
};

export default Social;
