import React from 'react';
import { Article } from '@/app/knowledge/data'; // Adjust path to where your data.ts is
import Image from 'next/image';

interface ArticleCardProps {
  article: Article;
  isFeatured?: boolean;
}

const ArticleCard = ({ article, isFeatured = false }: ArticleCardProps) => {
  return (
    <div className={`flex flex-col ${isFeatured ? 'md:flex-row gap-8 mb-12' : 'md:flex-row gap-6 mb-8 items-center'}`}>
      <div className={`relative overflow-hidden rounded-lg ${isFeatured ? 'w-full md:w-1/2 aspect-video' : 'w-full md:w-1/4 aspect-4/3'}`}>
        <div className="bg-gray-200  w-full h-full flex items-center justify-center text-gray-400">
           <Image src={article.imageUrl} alt='image' height={500} width={700} />
           {/* Image Placeholder */}
        </div>
      </div>
      <div className={`flex flex-col justify-center ${isFeatured ? 'w-full md:w-1/2' : 'w-full md:w-3/4'}`}>
        <span className="text-gray-400 text-sm mb-2">{article.category}</span>
        <h3 className={`font-bold text-gray-900 mb-3 ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
          {article.title}
        </h3>
        {isFeatured && <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>}
        <div className="text-gray-400 text-xs mt-auto">
          {article.date} • {article.readTime}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;