"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useConversation } from "@/hoooks/useConversation";
import { useNavigation } from "@/hoooks/useNavigation";
import { UserButton } from "@clerk/clerk-react";
import Link from "next/link";

const MobileNav = () => {
    const paths = useNavigation();
    const {isActive} = useConversation();

    if (isActive) {
        return null;
    }

    return (
        <>
            <Card className="fixed bottom-4 w-[calc(100vw-32px)] flex items-center h-16 p-2 lg:hidden">
                <nav className="w-full">
                    <ul className="flex justify-evenly items-center">
                        {
                            paths.map((path, id) => {
                                return <li key={id} className=" relative">
                                    <Link href={path.href}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button size="icon" variant={path.active ? "default" : "outline"}>
                                                    {path.icon}
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{path.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </Link>
                                </li>
                            })
                        }
                        <li>
                            <UserButton />
                        </li>
                    </ul>
                </nav>

            </Card>
        </>
    )
}

export default MobileNav