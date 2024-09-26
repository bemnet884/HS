import Link from "next/link";
import DashboardCard from "./dashboard/DashboardCard";
import { AlertCircle, BadgeDollarSign, Banknote, CircleDollarSign, DollarSignIcon, HandCoins, Package2, Wallet } from "lucide-react";
import ProductsTable from "@/components/ProductsTabel";

export default function Home() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Section 1: Product and Sales Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6">
        <DashboardCard icon={<Package2></Package2>} title="Total Products" content="hey" />
        <DashboardCard icon={<AlertCircle className="text-destructive"></AlertCircle>} title="Low Stock Alert" content="hey" />
        <DashboardCard icon={<CircleDollarSign></CircleDollarSign>} title="Today's Sales" content="hey" />
      </div>
      <hr className="h-4 mb-3" />
      {/* Section 2: Financial Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-5">
        <DashboardCard icon={<Wallet></Wallet>} title="Sales Summary" content="hey" />
        <DashboardCard icon={<HandCoins></HandCoins>} title="Purchase Summary" content="hey" />
        <DashboardCard icon={<Banknote></Banknote>} title="Expense Summary" content="hey" />
      </div>
      <ProductsTable />

    </div>
  );
}