
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/blog-data";

const Categories = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
            Categories
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} to={`/categories/${category.slug}`}>
                <Card className="gaming-card h-full transition-all duration-200 hover:shadow-md hover:border-primary/50">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <h2 className="mb-2 text-xl font-bold">{category.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {category.count} articles
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
