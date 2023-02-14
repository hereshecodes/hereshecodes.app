import React from "react";

const News = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="news">
     <iframe width="900" height="900" src="https://rss.app/embed/v1/wall/tm3LNMRkF4alxPxW" frameborder="0"></iframe>
     <div className="stack-carousel scrollbar-hide overflow-auto">
        <iframe width="500" height="400"  src="https://rss.app/embed/v1/carousel/2ytTHH88xrAVfOeI" frameborder="0"></iframe>
        </div>
    </section>
  );
};

export default News;