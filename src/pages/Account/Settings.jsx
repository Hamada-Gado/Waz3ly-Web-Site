import Account from './Account';
import AdminSettings from "../../pages/Account/AdminSettings";

const Settings = () => {

	return (
		<>
		{localStorage.getItem("defaultPath") === "/admin" ? <AdminSettings />: <Account title="Edit Profile" initFormData={JSON.parse(localStorage.getItem('userData'))} />}
		</>
	);
};

export default Settings;
