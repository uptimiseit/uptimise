import React from 'react';
import ArticleCard from '@/app/components/Knowledge/ArticleCard';
import { Article } from '@/app/knowledge/data'; 

// Define the Props this component expects
interface CategorySectionProps {
  articles: Article[]; // It expects an array of articles
}

const CategorySection = ({ articles }: CategorySectionProps) => {
  // Guard clause: if no articles exist, show a message
  if (!articles || articles.length === 0) {
    return <div className="text-gray-500">No articles found in this category.</div>;
  }

  return (
    <div>
      {articles.map((item, index) => (
        // We pass the data down to the card
        <ArticleCard 
            key={item.id} 
            article={item} 
            isFeatured={index === 0} // First item is always featured
        />
      ))}
    </div>
  );
};

export default CategorySection;