import React, { useEffect } from "react";
import api from "../api/axios";
import getHeaders  from "../utils/getHeaders";

const Logout: React.FC<any> = ({setLoggedIn,setIsAdmin,setUserId}) => {
	useEffect(() => {
		async function logout() {
			try {

				const response = await api.delete("/auth/sign_out",{headers:getHeaders()});
				if(response.data.success){
					localStorage.removeItem("token");
					setLoggedIn(false);
					setIsAdmin(false);
					setUserId(0);
				}
			} catch (e) {
				console.error(e);
			}
		}
		logout();
	},[])
  return <></>
}
export default Logout;