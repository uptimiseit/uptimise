// import React from 'react'

// const Resources = () => {
//   return (
//     <div>Resources</div>
//   )
// }

// export default Resources


// import React from 'react';
// Make sure to import the Article type and your Card component
import { Article } from '@/app/knowledge/data'; 
import ArticleCard from './ArticleCard'; 

// 1. Define what data this component accepts
interface ResourcesComponentsProps {
  articles: Article[];
}

// 2. Add the props to the function definition
// Change "()" to "({ articles }: GeneralComponentProps)"
const ResourcesComponent = ({ articles }: ResourcesComponentsProps) => (
  <div>
    {/* 3. Use the 'articles' prop here instead of hardcoding CATEGORY_DATA['General'] */}
    {articles.map((item, index) => (
      <ArticleCard key={item.id} article={item} isFeatured={index === 0} />
    ))}
  </div>
);

export default ResourcesComponent;