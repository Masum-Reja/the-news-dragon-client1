import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {id && <h2>This category News: {categoryNews.length} </h2>}
      {categoryNews.map((news) => (
        <NewsCard key={news.news_id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
