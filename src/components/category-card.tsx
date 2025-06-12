import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  icon: React.ReactNode;
  name: string;
  href?: string;
}

export function CategoryCard({ icon, name, href }: CategoryCardProps) {
  const categoryHref = href || `/category/${encodeURIComponent(name)}`;
  
  return (
    <Link href={categoryHref} className="block">
      <Card className="hover:border-primary/50 hover:shadow-md transition-all duration-200 cursor-pointer group">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <div>
            <h3 className="font-medium group-hover:text-primary transition-colors">{name}</h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 