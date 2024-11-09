import React from 'react'
import Card from '../components/Card';
import Footer from '../components/footer';

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}
const page = () => {
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
    <div>
        <h1 className="text-4xl text-center mt-10">Services</h1>
        <p className="text-center mt-4">This is the Services page. Add your information here!</p>

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
        <div><Footer/></div>
    </div>
  )
}

export default page