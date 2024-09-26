// actions.ts
'use server'

import prisma from "@/lib/db"

export async function createUser(formData: FormData) {
  await prisma.users.create({
    data: {
      name: formData.get("name") as string,
      slug: (formData.get("name") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      email: formData.get("email") as string
    }
  })
}

export async function createProduct(formData: FormData) {
  await prisma.products.create({
    data: {
      name: formData.get("name") as string,
      slug: (formData.get("name") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      price: parseFloat(formData.get("price") as string),
      quantity: parseInt(formData.get("quantity") as string, 10),
    }
  })
}
export async function trackSale(formData: FormData) {
  const productId = parseInt(formData.get("productId") as string, 10);
  const saleQuantity = parseInt(formData.get("quantity") as string, 10);
  const salePrice = parseFloat(formData.get("salePrice") as string);

  // Basic validation
  if (saleQuantity <= 0) {
    throw new Error("Sale quantity must be greater than 0.");
  }

  if (salePrice <= 0) {
    throw new Error("Sale price must be a positive number.");
  }

  // Find the product in the database
  const product = await prisma.products.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error("Product not found.");
  }

  if (product.quantity < saleQuantity) {
    throw new Error("Insufficient product stock.");
  }

  // Create a sale entry
  const sale = await prisma.sales.create({
    data: {
      productId: product.id,
      quantity: saleQuantity,
      salePrice: salePrice,
    },
  });

  // Update product quantity
  await prisma.products.update({
    where: { id: product.id },
    data: { quantity: product.quantity - saleQuantity },
  });

  return sale;
}


// Existing functions: createUser, createProduct, trackSale

export async function trackPurchase(formData: FormData) {
  const productId = parseInt(formData.get("productId") as string, 10);
  const purchaseQuantity = parseInt(formData.get("quantity") as string, 10);
  const purchasePrice = parseFloat(formData.get("purchasePrice") as string);
  const supplier = formData.get("supplier") as string;

  // Basic validation
  if (purchaseQuantity <= 0) {
    throw new Error("Purchase quantity must be greater than 0.");
  }

  if (purchasePrice <= 0) {
    throw new Error("Purchase price must be a positive number.");
  }

  // Find the product in the database
  const product = await prisma.products.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error("Product not found.");
  }

  // Create a purchase record
  const purchase = await prisma.purchases.create({
    data: {
      productId: product.id,
      quantity: purchaseQuantity,
      purchasePrice: purchasePrice,
      supplier: supplier,
    },
  });

  // Update product stock
  await prisma.products.update({
    where: { id: product.id },
    data: { quantity: product.quantity + purchaseQuantity },
  });

  return purchase;
}
