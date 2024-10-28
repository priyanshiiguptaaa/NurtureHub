import { useState } from "react";

const articles = [
  {
    title: "Understanding Nutrition",
    description: "A deep dive into the essentials of nutrition.",
    link: "https://americanpregnancy.org/healthy-pregnancy/",
    image: "./article1.jpeg"
  },
  {
    title: "Mental Health Matters",
    description: "Exploring the importance of mental health.",
    link: "https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/s12884-018-2087-4",
    image: "./article2.jpeg"
  },
  {
    title: "Genetic Counseling Insights",
    description: "What you need to know about genetic counseling.",
    link: "https://www.ajog.org/article/S0002-9378(21)02728-9/fulltext",
    image: "./article3.jpeg"
  },
  {
    title: "Newborn health",
    description: "Key tips for supporting newborn health and early development.",
    link: "https://my.clevelandclinic.org/health/articles/7247-fetal-development-stages-of-growth",
    image: "./article4.jpeg"
  },
  {
    title: "Infant and toddler health",
    description: "Essential tips for keeping infants and toddlers healthy, from nutrition to sleep and safety.",
    link: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/basics/infant-and-toddler-health/hlv-20049400",
    image: "./article5.jpeg"
  },
  {
    title: "Babies rubbing eye",
    description: "Babies often rub their eyes when they're tired, soothing themselves as they prepare to rest.",
    link: "https://cdn.mos.cms.futurecdn.net/HD3ahKk6ZcZZhcmP7bfcaS-970-80.jpg.webp",
    image: "./article6.jpeg"
  }
];

const ArticlesSection = () => {
  const [copyMessage, setCopyMessage] = useState("");
  const [comments, setComments] = useState(
    articles.map(() => ({ showInput: false, comments: [] }))
  );
  const [likes, setLikes] = useState(Array(articles.length).fill(false));

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopyMessage("Link copied!");
        setTimeout(() => setCopyMessage(""), 2000);
      })
      .catch(() => {
        setCopyMessage("Failed to copy link");
        setTimeout(() => setCopyMessage(""), 2000);
      });
  };

  const toggleCommentInput = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) => ({
        ...comment,
        showInput: i === index ? !comment.showInput : comment.showInput,
      }))
    );
  };

  const handleAddComment = (index, commentText) => {
    if (!commentText) return;
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index
          ? { ...comment, comments: [...comment.comments, commentText] }
          : comment
      )
    );
  };

  const handleLike = (index) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) => (i === index ? !like : like))
    );
  };

  return (
    <section className="w-full py-12 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-rose-900">
          Helpful Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-rose-800 group-hover:text-rose-700">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {article.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 hover:text-rose-700 font-medium transition-colors duration-200"
                  >
                    Read more →
                  </a>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <button
                    className={`flex items-center space-x-1 ${
                      likes[index]
                        ? "text-rose-600"
                        : "text-gray-500 hover:text-rose-600"
                    } transition-colors duration-200`}
                    onClick={() => handleLike(index)}
                  >
                    {likes[index] ? "❤️" : "🤍"}{" "}
                    <span className="text-sm">{likes[index] ? "Liked" : "Like"}</span>
                  </button>
                  <button
                    className="flex items-center space-x-1 text-gray-500 hover:text-rose-600 transition-colors duration-200"
                    onClick={() => toggleCommentInput(index)}
                  >
                    💬 <span className="text-sm">Comment</span>
                  </button>
                  <button
                    className="flex items-center space-x-1 text-gray-500 hover:text-rose-600 transition-colors duration-200"
                    onClick={() => handleCopyLink(article.link)}
                  >
                    🔗 <span className="text-sm">Share</span>
                  </button>
                </div>
                {copyMessage && (
                  <p className="text-green-500 mt-2 text-sm text-center">
                    {copyMessage}
                  </p>
                )}
                {comments[index].showInput && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all duration-200"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAddComment(index, e.target.value);
                          e.target.value = "";
                        }
                      }}
                    />
                  </div>
                )}
                {comments[index].comments.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Comments:
                    </h4>
                    <ul className="space-y-2">
                      {comments[index].comments.map((comment, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 bg-gray-50 rounded-lg p-2"
                        >
                          {comment}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;