import React, { useState } from 'react';
import Image from 'next/image';

const LogoGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedLogoUrl, setGeneratedLogoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/generate-logo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate logo');
      }

      const data = await response.json();
      setGeneratedLogoUrl(data.imageUrl);
    } catch (error) {
      console.error('Error generating logo:', error);
      alert('Failed to generate logo. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Logo Generator</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your logo idea..."
          className="w-full p-3 rounded-lg shadow-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
          required
        />
        <button
          type="submit"
          className={`btn btn-primary w-full p-3 rounded-full text-white text-lg font-semibold shadow-lg transition-transform transform ${
            isLoading ? 'bg-gray-400' : 'bg-indigo-500 hover:scale-105 hover:bg-indigo-600'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Logo'}
        </button>
      </form>

      {generatedLogoUrl && (
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <h3 className="text-2xl font-bold mb-4">Generated Logo</h3>
          <div className="flex justify-center mb-4">
            <Image
              src={generatedLogoUrl}
              alt="Generated Logo"
              width={320} // Reduced width
              height={320} // Reduced height
              className="rounded-lg shadow-lg"
            />
          </div>
          <a
            href={generatedLogoUrl}
            download="generated_logo.png"
            className="inline-block mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-md font-semibold hover:scale-105 transition-transform"
          >
            Download Logo
          </a>
        </div>
      )}
    </div>
  );
};

export default LogoGenerator;
