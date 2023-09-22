const getHeaders = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
        const token = JSON.parse(atob(storedToken));
        const params = { 
            "uid": `${token["uid"]}`,
            "client": `${token["client"]}`,
            "access-token": `${token["access-token"]}`
        }
    
    return params
    }   
}

export default getHeaders;
