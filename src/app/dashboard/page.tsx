import { createUser } from "@/actions/actions";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import UserForm from "../../components/UserForm";
import ProductForm from "../../components/ProductForm";
import { Button } from "@/components/ui/button";
import ProductsTable from "@/components/ProductsTabel";

export default async function Dashboard() {

  // const { isAuthenticated } = getKindeServerSession();
  // const isLoggedIn = await isAuthenticated();

  // if (!isLoggedIn) {
  //   redirect('/api/auth/login');
  // }

  const theUsers = await prisma.users.findMany();
  const theProducts = await prisma.products.findMany();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>

      <div className="flex justify-center items-center gap-3 mb-4">
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Link href="/users">Create User</Link>
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Link href="/products">Create Products</Link>
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Link href="/sales">Track Sales</Link>
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Link href="/purchases">Track Purchase</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* User List */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Users</h2>
          <ul className="space-y-4">
            {theUsers.map((data) => (
              <li key={data.userId} className="text-lg text-gray-600">
                <Link href={`/dashboard/${data.slug}`} className="text-blue-500 hover:underline font-medium">
                  {data.name}
                </Link>
                <span className="text-gray-500">, {data.email}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Product List */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Products</h2>
          <ul className="space-y-4">
            {theProducts.map((product) => (
              <li key={product.id} className="text-lg text-gray-600">
                <Link href={`/dashboard/${product.name}`} className="text-blue-500 hover:underline font-medium">
                  {product.name}
                </Link>
                <div className="text-gray-500">${product.price}</div>
              </li>
            ))}
          </ul>
        </section>

        <ProductsTable />

      </div>

    </main>
  );
}
