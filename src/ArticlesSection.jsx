// ArticlesSection.jsx
import { useState } from "react";

const articles = [
  {
    title: "Understanding Nutrition",
    description: "A deep dive into the essentials of nutrition.",
    link: "https://americanpregnancy.org/healthy-pregnancy/",
    image: "https://example.com/image-nutrition.jpg", // Replace with actual image URLs
  },
  {
    title: "Mental Health Matters",
    description: "Exploring the importance of mental health.",
    link: "https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/s12884-018-2087-4",
    image: "https://example.com/image-mental-health.jpg",
  },
  {
    title: "Genetic Counseling Insights",
    description: "What you need to know about genetic counseling.",
    link: "https://www.ajog.org/article/S0002-9378(21)02728-9/fulltext",
    image: "https://example.com/image-genetic-counseling.jpg",
  },
  {
    title: "Stages of Fetal Development",
    description: "Understanding the stages of growth in fetal development.",
    link: "https://my.clevelandclinic.org/health/articles/7247-fetal-development-stages-of-growth",
    image: "https://example.com/image-fetal-development.jpg",
  },
];

const ArticlesSection = () => {
  const [copyMessage, setCopyMessage] = useState("");
  const [comments, setComments] = useState(
    articles.map(() => ({ showInput: false, comments: [] }))
  );
  const [likes, setLikes] = useState(Array(articles.length).fill(false)); // Track likes

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopyMessage("Link copied!");
        setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
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
    <section className="my-8">
      <h2 className="text-2xl text-aashira-brown font-bold mb-4">Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div 
            key={index} 
            className="border rounded-lg p-4 bg-white shadow-lg transition transform hover:scale-105 hover:shadow-xl block"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl text-aashira-green font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{article.description}</p>
            <a 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-4 inline-block"
            >
              Read more
            </a>
            <div className="flex justify-between items-center">
              <button 
                className={`text-gray-600 ${likes[index] ? 'text-red-500 font-bold' : 'hover:text-blue-500'} transition-colors duration-300`}
                onClick={() => handleLike(index)}
              >
                {likes[index] ? "❤️ Liked" : "👍 Like"}
              </button>
              <button 
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                onClick={() => toggleCommentInput(index)}
              >
                💬 Comment
              </button>
              <button 
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                onClick={() => handleCopyLink(article.link)}
              >
                🔗 Share
              </button>
            </div>
            {copyMessage && <p className="text-green-500 mt-2 text-sm">{copyMessage}</p>}
            
            {/* Comment Section */}
            {comments[index].showInput && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="border rounded w-full p-2 mt-2 focus:outline-none focus:ring focus:ring-blue-300"
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
                <h4 className="text-sm font-semibold mb-2">Comments:</h4>
                <ul className="list-disc list-inside">
                  {comments[index].comments.map((comment, i) => (
                    <li key={i} className="text-gray-700 text-sm mb-1">
                      {comment}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
