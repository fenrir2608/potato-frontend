import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
const MobileNavLinks = () => {
  const { logout } =useAuth0();
  return(
    <>
    <Link to="/user" className="flex bg-white items-center font-bold hover:text-amber-600">profile</Link>
    <Button onClick={ ()=> logout()} className="flex items-center px-3 font-bold hover:bg-gray-500">log out</Button>
    </>
  )
}

export default MobileNavLinks;