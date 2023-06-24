const handleVerification =  () => {
    try {
      const verifyToken = localStorage.getItem('token');
      console.log(verifyToken);
      return JSON.stringify(verifyToken);
    } catch (error) {
      console.error(error);
    }
  };
export default handleVerification;