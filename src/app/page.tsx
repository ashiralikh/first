// pages/index.tsx
import Card from '@/app/components/Card';
import Footer from './components/footer';

// Define types for the card data items
interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function Home() {
  const cardData: CardData[] = [
    {
      title: 'Amazing Service 1',
      description:
        'This is a brief description of the amazing service we provide. It helps solve problems efficiently.',
      imageUrl: 'https://via.placeholder.com/400x250',
      link: '/services/service1',
    },
    {
      title: 'Incredible Blog Post 2',
      description:
        'This is an excerpt from an incredible blog post. Learn more about this topic by reading the full post.',
      imageUrl: 'https://via.placeholder.com/400x250',
      link: '/blog/post2',
    },
    {
      title: 'Product Feature 3',
      description:
        'This is a short description of our new product feature. Find out how it can help your business grow.',
      imageUrl: 'https://via.placeholder.com/400x250',
      link: '/products/product3',
    },
  ];

  return (
    <>
     
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to Our Website
        </h1>
        <div className="container mx-auto p-1"><h2 className="text-2xl font-bold text-center text-gray-800 mb-8">This is the Home page. Add your information here!</h2></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              link={card.link}
            />
          ))}
        </div>
        
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}
