
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="bg-gradient-to-r from-gaming-purple to-gaming-blue bg-clip-text text-xl font-bold text-transparent">
              Aicade
            </h3>
            <p className="text-sm text-muted-foreground">
              Insights, innovations, and inside looks at the evolving world of AI in gaming.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Content</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                  All Articles
                </Link>
              </li>
              <li>
                <Link to="/categories/ai-tutorials" className="text-muted-foreground hover:text-foreground">
                  AI Tutorials
                </Link>
              </li>
              <li>
                <Link to="/categories/gaming-news" className="text-muted-foreground hover:text-foreground">
                  Gaming News
                </Link>
              </li>
              <li>
                <Link to="/categories/tech-insights" className="text-muted-foreground hover:text-foreground">
                  Tech Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Subscribe</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Get the latest articles and news delivered to your inbox.
              </p>
              <form className="flex w-full max-w-sm flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Aicade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
