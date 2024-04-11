import { CircleUserRound } from "lucide-react";
import { DropdownMenu } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenuContent } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UserNameMenu = () => {
    const { user,logout } = useAuth0();
  return(
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-amber-600 gap-2">
            <CircleUserRound className="text-amber-600" />
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuItem>
                <Link to="/user" className="font-bold hover:text-amber-600">
                    profile
                </Link>
        </DropdownMenuItem>
        <Separator/>
        <DropdownMenuItem>
            <Button onClick={()=> logout()} className="flex flex-1 font-bold bg-amber-600">
                log out
            </Button>
        </DropdownMenuItem>
        </DropdownMenuContent>


    </DropdownMenu>
  )
}

export default UserNameMenu;