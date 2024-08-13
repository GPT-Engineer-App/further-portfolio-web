import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

const PortfolioCompany = ({ logo, name, description, url }) => (
  <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
    <CardContent className="flex flex-col items-center">
      <img src={logo} alt={name} className="h-12 mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-center text-gray-600">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
        Learn more
      </a>
    </CardContent>
  </Card>
);

const TeamMember = ({ name, linkedIn }) => (
  <div className="flex flex-col items-center">
    <h3 className="text-xl font-semibold">{name}</h3>
    <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="mt-2">
      <LinkedInLogoIcon className="w-6 h-6" />
    </a>
  </div>
);

const Index = () => {
  const [portfolioCompanies] = useState([
    { logo: "assets/images/wordmark-master-4054x768.webp", name: "Supermusic", description: "Music you won't hear anywhere else", url: "https://supermusic.ai/" },
    { logo: "assets/images/fulllogo-300x61.webp", name: "Motorica", description: "Generative AI for animation", url: "https://www.motorica.ai/" },
    { logo: "assets/images/intuicell-200x59.webp", name: "Intuicell", description: "AI like the human mind", url: "https://intuicell.com/" },
    { logo: "assets/images/terasi-596x157.webp", name: "Terasi", description: "Scalable hardware for 6G and beyond", url: "https://www.terasi.io/" },
    { logo: "assets/images/radtonics.svg", name: "Radtonics", description: "Private 5G made easy", url: "https://www.radtonics.com/" },
    { logo: "assets/images/cemvision-1200x628.webp", name: "CemVision", description: "Re-inventing the most important construction material", url: "https://cemvision.tech/" },
    { logo: "assets/images/gigapay-logo-2-596x159.webp", name: "Gigapay", description: "We know how to pay creators globally", url: "https://www.gigapay.co/" },
    { logo: "assets/images/songsay-logo-purple-170x46.webp", name: "Songsay", description: "Let the songs do the talking!", url: "https://songsay.com/home" },
    { logo: "assets/images/goalplan-logo-yellow-596x83.webp", name: "Goalplan", description: "The complete sales performance platform", url: "https://www.goalplan.com/en-us/" },
    { logo: "assets/images/treyd-1.webp", name: "Treyd", description: "Sell first. Pay suppliers later.", url: "https://www.treyd.io/" },
    { logo: "assets/images/divly-logo.svg", name: "Divly", description: "Crypto taxes made easy", url: "https://divly.com/" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <img src="assets/images/further-logo-black-1338x256.webp" alt="Further" className="h-8" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">With experience and commitment we take you further than capital!</h1>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Portfolio companies</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {portfolioCompanies.map((company, index) => (
              <PortfolioCompany key={index} {...company} />
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Joint investments</h2>
          <div className="flex justify-center">
            <PortfolioCompany
              logo="assets/images/01-botguard-logo-rgb-596x226.webp"
              name="BotGuard"
              description="Protect your website in minutes"
              url="https://botguard.net/"
            />
          </div>
        </section>

        <Separator className="my-16" />

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Who are we?</h2>
          <div className="flex justify-center gap-16">
            <TeamMember name="Stefan Lindeberg" linkedIn="https://www.linkedin.com/in/stefanlindeberg/" />
            <TeamMember name="Per Björklund" linkedIn="https://www.linkedin.com/in/perbjorklund/" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Further. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
