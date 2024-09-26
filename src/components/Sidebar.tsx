import { DashboardIcon } from '@radix-ui/react-icons';
import { ShoppingBagIcon, ShoppingCartIcon, PackageIcon, BarChartIcon, UserIcon, FileTextIcon, Settings, DollarSignIcon, CircleDollarSign } from 'lucide-react';
import Link from 'next/link';


import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export default function Sidebar() {
  return (
    <Command className="w-64 h-full bg-gray-200 p-4">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <DashboardIcon className="mr-2" />
            <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-300">
              Dashboard
            </Link></CommandItem>
          <CommandItem>
            <PackageIcon className="mr-2" />
            <Link href="/products" className="block p-2 rounded hover:bg-gray-300">
              Products
            </Link>
          </CommandItem>
          <CommandItem>
            <CircleDollarSign className="mr-2" />
            <Link href="/sales" className="block p-2 rounded hover:bg-gray-300">
              Sales
            </Link>
          </CommandItem>
          <CommandItem>
            <ShoppingBagIcon className="mr-2" />
            <Link href="/purchases" className="block p-2 rounded hover:bg-gray-300">
              Purchases
            </Link>
          </CommandItem>
          <CommandItem>
            <FileTextIcon className="mr-2" />
            <Link href="/expenses" className="block p-2 rounded hover:bg-gray-300">
              Expenses
            </Link>
          </CommandItem>


        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon className="mr-2" />
            <Link href="/users" className="block p-2 rounded hover:bg-gray-300">
              Users
            </Link>
          </CommandItem>
          <CommandItem>
            <BarChartIcon className="mr-2" />
            <Link href="/reports" className="block p-2 rounded hover:bg-gray-300">
              Reports
            </Link>
          </CommandItem>
          <CommandItem>
            <CommandItem>
              <Settings className="mr-2" />
              <Link href="/settings" className="block p-2 rounded hover:bg-gray-300">
                Settings
              </Link>
            </CommandItem>
          </CommandItem>

        </CommandGroup>
      </CommandList>
    </Command>

    // <aside className="w-64 h-full bg-gray-200 p-4">
    //   <ul className="space-y-2">
    //     <li className="flex items-center p-2">
    //       <DashboardIcon className="mr-2" />
    //       <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-300">
    //         Dashboard
    //       </Link>
    //     </li>
    //     <li className="flex items-center p-2">
    //       <PackageIcon className="mr-2" />
    //       <Link href="/products" className="block p-2 rounded hover:bg-gray-300">
    //         Products
    //       </Link>
    //     </li>
    //     <li className="flex items-center p-2">
    //       <ShoppingBagIcon className="mr-2" />
    //       <Link href="/purchases" className="block p-2 rounded hover:bg-gray-300">
    //         Purchases
    //       </Link>
    //     </li>
    //     <li className="flex items-center p-2">
    //       <ShoppingCartIcon className="mr-2" />
    //       <Link href="/sales" className="block p-2 rounded hover:bg-gray-300">
    //         Sales
    //       </Link>
    //     </li>
    //     <li className="flex items-center p-2">
    //       <FileTextIcon className="mr-2" />
    //       <Link href="/expenses" className="block p-2 rounded hover:bg-gray-300">
    //         Expenses
    //       </Link>
    //     </li>
    //     <li className="flex items-center p-2">
    //       <BarChartIcon className="mr-2" />
    //       <Link href="/reports" className="block p-2 rounded hover:bg-gray-300">
    //         Reports
    //       </Link>
    //     </li>
    //     <li className="flex items-center p-2">
    //       <UserIcon className="mr-2" />
    //       <Link href="/users" className="block p-2 rounded hover:bg-gray-300">
    //         Users
    //       </Link>
    //     </li>
    //   </ul>
    // </aside>
  );
}
