import ProductsTable from "@/components/ProductsTabel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
interface DashboardCardProps {
  title: string;
  description?: string;
  content: string;
  footer?: string;
  icon: React.ReactElement<LucideIcon>
}

const DashboardCard = ({ title, description, content, footer, icon }: DashboardCardProps) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <Card className="p-4">
          <CardHeader className="border-b pb-2">
            <CardTitle className="text-lg font-semibold">
              <div className="flex justify-center items-center gap-3">
                <div>
                  {icon}
                </div>
                <div>
                  {title}

                </div>

              </div>

            </CardTitle>
            {description && <CardDescription className="text-sm text-gray-500">{description}</CardDescription>}
          </CardHeader>
          <CardContent className="py-4">
            <p className="text-gray-700">{content}</p>
          </CardContent>
          {footer && (
            <CardFooter className="border-t pt-2 text-sm text-gray-500">
              {footer}
            </CardFooter>
          )}
        </Card>

      </div>
    </>

  );
};

export default DashboardCard;