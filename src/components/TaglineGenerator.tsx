import React, { useState } from 'react';

const TaglineGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedTagline, setGeneratedTagline] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/generate-tagline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate tagline');
      }

      const data = await response.json();
      setGeneratedTagline(data.tagline);
    } catch (error) {
      console.error('Error generating tagline:', error);
      alert('Failed to generate tagline. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Tagline Generator
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-12">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your brand or product..."
          className="w-full md:w-3/4 p-4 rounded-lg shadow-lg mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
          required
        />
        <button
          type="submit"
          className={`btn btn-primary w-full md:w-3/4 p-4 rounded-full text-white text-lg font-semibold shadow-lg transition-transform transform ${
            isLoading ? 'bg-gray-400' : 'bg-purple-500 hover:scale-105 hover:bg-purple-600'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Tagline'}
        </button>
      </form>

      {generatedTagline && (
        <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Generated Tagline</h3>
          <p className="text-xl font-medium text-gray-700">{generatedTagline}</p>
        </div>
      )}
    </div>
  );
};

export default TaglineGenerator;
