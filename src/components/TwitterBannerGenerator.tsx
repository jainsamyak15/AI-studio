import React, { useState } from 'react';
import Image from 'next/image';

const TwitterBannerGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedBannerUrl, setGeneratedBannerUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/generate-banner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate Twitter banner');
      }

      const data = await response.json();
      setGeneratedBannerUrl(data.imageUrl);
    } catch (error) {
      console.error('Error generating Twitter banner:', error);
      alert('Failed to generate Twitter banner. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        Twitter Banner Generator
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your Twitter banner idea..."
          className="w-full md:w-3/4 lg:w-1/2 p-4 rounded-lg shadow-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg transition duration-300 ease-in-out transform focus:scale-105"
          required
        />
        <button
          type="submit"
          className={`w-full md:w-3/4 lg:w-1/2 py-4 rounded-full text-white font-semibold text-lg shadow-md transition-transform transform ${
            isLoading ? 'bg-gray-400' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Twitter Banner'}
        </button>
      </form>

      {generatedBannerUrl && (
        <div className="bg-white p-8 mt-10 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-center">Generated Twitter Banner</h3>
          <div className="overflow-hidden rounded-xl">
            <Image
              src={generatedBannerUrl}
              alt="Generated Twitter Banner"
              width={1500}
              height={500}
              className="w-full h-auto transition-transform transform hover:scale-105"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href={generatedBannerUrl}
              download="generated_twitter_banner.png"
              className="py-3 px-6 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              Download Twitter Banner
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TwitterBannerGenerator;
