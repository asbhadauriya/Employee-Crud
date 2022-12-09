import axios from "axios";

export const login = async ({ email,password }) => {

      try {
        const response = await axios.post("loginApi.in",{
            email:email,
            password:password
        })
       
        
        if (response.status === 200) {
        
          
          console.log("done");
        } else {
          console.log("error");
          
        
    
        }
        }
        catch (error) {
          console.log("error");
        
        
          console.log('Error', error);
      
        }
      }
      
    