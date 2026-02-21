'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in");
    }
    const user = { name: 'John', email: 'aman@hero.com' };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="data:image/png;base64,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" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className='text-base font-medium text-gray-400'>
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/153423955?s=280&v=4" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className='text-base font-medium text-gray-400'>
                                {user.name}
                            </span>
                            <span className="text-sm text-gray-500">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600"/>
                <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>
                <nav className="sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown