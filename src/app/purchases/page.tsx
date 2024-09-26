// /src/app/purchases/page.tsx
import PurchaseForm from '@/components/PurchaseForm';

export default function PurchasePage() {
  return (
    <div >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Track Purchases</h1>
      <PurchaseForm />
    </div>
  );
}
