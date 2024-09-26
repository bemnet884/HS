import prisma from "@/lib/db";

export default async function slug({ params }: any) {
  // Try fetching the user first based on the slug
  const theUser = await prisma.users.findUnique({
    where: {
      slug: params.slug,
    },
  });

  // If no user is found, try fetching the product instead
  const theProduct = !theUser
    ? await prisma.products.findUnique({
      where: {
        slug: params.slug,
      },
    })
    : null;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg text-center">
        {theUser ? (
          // Render user details
          <>
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              {theUser.name}
            </p>
            <p className="text-lg text-gray-700">
              Email: {theUser.email}
            </p>
          </>
        ) : theProduct ? (
          // Render product details
          <>
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              {theProduct.name}
            </p>
            <p className="text-lg text-gray-700">
              Price: ${theProduct.price}
            </p>
            <p className="text-lg text-gray-700">
              Stock Quantity: ${theProduct.quantity}
            </p>
            {/* <p className="text-lg text-yellow-500">
              Rating: {theProduct.rating} / 5
            </p> */}
          </>
        ) : (
          // Handle case where neither a user nor a product is found
          <p className="text-lg text-red-500">
            No user or product found for this slug.
          </p>
        )}
      </div>
    </main>
  );
}
