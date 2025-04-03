
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              About AI Gaming Scribe
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Exploring the frontier where artificial intelligence meets gaming
            </p>
          </div>
          
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="prose prose-lg dark:prose-invert">
              <p>
                AI Gaming Scribe was founded in 2024 by a group of AI engineers, game developers, and tech journalists who recognized that the gaming industry was undergoing a profound transformation powered by artificial intelligence.
              </p>
              
              <p>
                Our mission is to bridge the gap between complex AI technologies and the gaming community, providing accessible insights, practical guides, and thoughtful analysis on how these technologies are shaping the future of interactive entertainment.
              </p>
              
              <h2>What We Cover</h2>
              
              <ul>
                <li>In-depth explorations of AI applications in modern games</li>
                <li>Tutorials for developers looking to implement AI in their projects</li>
                <li>Industry news and analysis of emerging trends</li>
                <li>Interviews with leading AI gaming researchers and developers</li>
                <li>Ethical discussions on the implications of AI in gaming</li>
              </ul>
              
              <h2>Our Team</h2>
              
              <p>
                Our writers and contributors include AI specialists, game designers, and technology journalists with a passion for exploring how these fields intersect and evolve together.
              </p>
              
              <h2>Join The Conversation</h2>
              
              <p>
                We believe that the AI gaming revolution is just beginning, and we invite you to join us on this journey. Subscribe to our newsletter, follow us on social media, and become part of a community that's exploring the frontiers of what's possible when artificial intelligence and gaming come together.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
