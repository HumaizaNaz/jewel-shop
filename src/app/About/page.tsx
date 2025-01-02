"use client";
import Image from "next/image";
import { useState } from "react";

const AboutUs = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleDeleteComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  return (
    <main className="font-sans bg-white text-gray-900">
      <header
        className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-5 bg-blue-900"
        style={{ backgroundImage: "url(gold-aura-background2.jpg)" }} // Adjust the image path to reflect your jewelry brand
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          About Gold Aura Jewelry
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-5 text-orange-200">
          At Gold Aura, we create exquisite jewelry that embodies luxury, elegance, and timeless beauty.
        </p>
      </header>

      <section className="py-20 px-5 md:px-20 bg-white text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-950">
          Who I Am - Humaiza
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gradient-to-br from-red-900 via-orange-950 to-orange-900 p-5 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
  Education
</h3>
<p className="text-orange-200">
  I am a homeopathic doctor and currently enhancing my skills in IT and Artificial Intelligence through the Governor IT Initiative in Karachi, Pakistan.
</p>

          </div>
          <div className="bg-gradient-to-br from-red-900 via-orange-950 to-orange-900 p-5 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Achievements
            </h3>
            <p className="text-orange-200">
              Empowered by the Governor IT Initiative, I continuously strive to learn and innovate in the field of technology.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-900 via-orange-950 to-orange-900 p-5 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Passion for Jewelry
            </h3>
            <p className="text-orange-200">
              As the founder of Gold Aura, I have a passion for creating jewelry pieces that capture elegance and grace in every detail.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-20 bg-gray-100 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-950">
          Meet My Team
        </h2>
        <div className="flex justify-center space-x-10">
          <div className="text-center">
            <Image
              src="/women2.jpg" // Replace with real images for your team members
              alt="Team Member"
              width={200}
              height={200}
              className="w-32 h-32 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-orange-800">Ayesha</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <Image
              src="/women.jpg"
              alt="Team Member"
              width={200}
              height={200}
              className="w-32 h-32 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-orange-800">Saniya</h3>
            <p className="text-gray-600">Head of Jewelry Design</p>
          </div>
          <div className="text-center">
            <Image
              src="/man.jpg"
              alt="Team Member"
              width={200}
              height={200}
              className="w-32 h-32 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-orange-800">Zayyan</h3>
            <p className="text-gray-600">Marketing Director</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-20 bg-white text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10 text-orange-950">
          Leave a Comment
        </h2>
        <div className="max-w-lg mx-auto">
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-orange-900 mb-5"
            placeholder="Write your comment here..."
            value={comment}
            onChange={handleCommentChange}
          />
          <button
            onClick={handleAddComment}
            className="bg-orange-950 text-orange-200 px-8 py-4 text-lg rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Add Comment
          </button>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-center mb-5 text-orange-800">
            Comments
          </h3>
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <p className="text-lg">{comment}</p>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-500 mt-2 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
