const currentDate = () => {
    const now = new Date();
    return `${now.getFullYear()}-${("00" + (now.getMonth()+1)).slice(-2)}-${("00" + (now.getDate())).slice(-2)}`;
}
;


export default currentDate;