import { Sheet, SheetTrigger,SheetContent,SheetTitle,SheetDescription } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = ()=>{
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-amber-700"/>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    { isAuthenticated? (
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className="text-amber-600"/>
                            {user?.email}
                        </span>
                    ):(
                <span>
                    potato
                </span>
                    )}

                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex flex-col gap-4">
                    { isAuthenticated? (<MobileNavLinks/>):(
                    <Button onClick={()=>loginWithRedirect()} className="flex-1 font-bold bg-amber-700">
                    login
                    </Button>
                    )}

                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;