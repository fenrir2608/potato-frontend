import { useAuth0 } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/MyUserApi";
import { useNavigate } from "react-router-dom";
import { useEffect,useRef } from "react";


const AuthCallbackPage = () => {
    const navigate = useNavigate();
  const {user} = useAuth0();
  const {createUser} = useCreateMyUser();
    const hasCreatedUser = useRef(false);
  useEffect(() => {
    console.log("user: ", user);
    if(user?.sub && user?.email && !hasCreatedUser.current){
        createUser({ auth0Id: user.sub, email: user.email });
        hasCreatedUser.current = true;
    }
    navigate("/")
  }, [createUser,navigate,user])
  return <>loading...</>
};

export default AuthCallbackPage;