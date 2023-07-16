import profile from "../assets/profile.jpeg";
const Profile = () => {
  return (
    <div className='has-background-dark section'>
      <div className='container is-max-desktop '>
        <div className=' ab p-4'>
          <div className='bg-img image'></div>
          <img src={profile} className=' img' />
        </div>
        <div className='section px-0'>
          <h1 className='title has-text-weight-bold is-size-2 has-text-centered has-text-white'>
            - Mike Norton
          </h1>
          <p className='itle has-text-weight-bold has-text-centered has-text-white'>
            "Success is not final; failure is not fatal: It is the courage to
            continue that counts."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
