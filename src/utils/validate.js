export const checkValideData = (email,password,name)=>{
 const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
 const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 const isName =/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
 if(!isEmailValid) return "Email Id is Not Valid";
 if(!isPasswordValid) return "Password is Not Valid";
 if(!isName) return "Please provide a Valid Name"
 return null;
};