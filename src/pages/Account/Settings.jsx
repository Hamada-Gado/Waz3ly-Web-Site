import Account from './Account';

const Settings = () => {
  return (
    <Account
      title="Edit Profile"
      initFormData={JSON.parse(localStorage.getItem('userData'))}
    />
  );
};

export default Settings;
