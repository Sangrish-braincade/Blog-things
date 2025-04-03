
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryListProps {
  categories: {
    id: string;
    name: string;
    slug: string;
    count: number;
  }[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">Categories</h3>
      <div className="grid gap-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.slug}`}
            className={cn(
              "flex justify-between rounded-lg border px-3 py-2 text-sm transition-colors hover:bg-muted"
            )}
          >
            <span>{category.name}</span>
            <span className="text-muted-foreground">{category.count}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
