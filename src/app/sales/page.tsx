// /src/app/sales/page.tsx
import SalesForm from '@/components/SalesForm';

export default function SalesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Track Sales</h1>
      <SalesForm />
    </div>
  );
}
