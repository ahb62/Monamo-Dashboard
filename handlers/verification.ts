const handleVerification =  () => {
    try {
      const verifyToken = localStorage.getItem('token');
      return JSON.stringify(verifyToken);
    } catch (error) {
      console.error(error);
    }
  };
export default handleVerification;