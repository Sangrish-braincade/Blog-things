
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would typically connect to a newsletter service
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail("");
  };

  return (
    <div className="rounded-xl border bg-card p-6 md:p-8">
      <div className="mb-4 space-y-2">
        <h3 className="text-xl font-bold tracking-tight">Stay Updated</h3>
        <p className="text-sm text-muted-foreground">
          Subscribe to our newsletter for the latest articles and updates on AI gaming.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-full border bg-background px-4 py-2 text-sm"
          required
        />
        <Button type="submit" className="w-full rounded-full">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
