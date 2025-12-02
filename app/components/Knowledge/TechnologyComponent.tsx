// import React from 'react'

// const TechnologyComponent = () => {
//   return (
//     <div>TechnologyComponent</div>
//   )
// }

// export default TechnologyComponent

import React from 'react';
// Make sure to import the Article type and your Card component
import { Article } from '@/app/knowledge/data'; 
import ArticleCard from './ArticleCard'; 

// 1. Define what data this component accepts
interface TechnologyComponentProps {
  articles: Article[];
}

// 2. Add the props to the function definition
// Change "()" to "({ articles }: GeneralComponentProps)"
const TechnologyComponent = ({ articles }: TechnologyComponentProps) => (
  <div>
    {/* 3. Use the 'articles' prop here instead of hardcoding CATEGORY_DATA['General'] */}
    {articles.map((item, index) => (
      <ArticleCard key={item.id} article={item} isFeatured={index === 0} />
    ))}
  </div>
);

export default TechnologyComponent;