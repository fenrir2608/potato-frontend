import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu from "./UserNameMenu";

const Nav = ()=>{
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        <span className="flex space-x-2-center">
            {isAuthenticated ? <UserNameMenu/>:     
    <Button 
    variant="ghost" 
    className="font-bold hover:text-amber-900 hover:bg-white" 
    onClick={async ()=> await loginWithRedirect()}
    >
        login
    </Button>
            }
        </span>

    )
}
export default Nav;