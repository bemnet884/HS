// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">
          <Link href='/dashboard'>
            <Image src='/assets/logo-no-background.png' alt='logo' width={40} height={40} />
          </Link>
        </div>

        <div className="flex space-x-4 justify-center items-center">
          <Link href="/" className="text-white hover:underline">Home</Link>
          {/* <Link href="/sales" className="text-white hover:underline">Sales</Link>
          <Link href="/purchases" className="text-white hover:underline">Purchases</Link>
          <Link href="/products" className="text-white hover:underline">Products</Link> */}

          <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className='text-blue-950'>HS</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/users'>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/subscriptions'>Subscription</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/settings'>Settings</Link>
              </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>



          {/* <Link href="/users" className="text-white hover:underline">Avatar</Link> */}
        </div>
      </div>
    </nav>
  );
}
