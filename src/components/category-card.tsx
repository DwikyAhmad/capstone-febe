import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  icon: React.ReactNode;
  name: string;
  count: number;
}

export function CategoryCard({ icon, name, count }: CategoryCardProps) {
  return (
    <Card className="hover:border-primary/50 transition-colors cursor-pointer">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{count} destinasi</p>
        </div>
      </CardContent>
    </Card>
  );
} 