import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Image, Twitter, MessageSquare } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Design Studio - Home</title>
        <meta name="description" content="Generate logos, Twitter banners, and taglines with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl font-extrabold text-gray-800 mb-10">Welcome to AI Design Studio</h1>
      <p className="text-xl text-gray-600 mb-12">Create stunning designs with the power of AI</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo Generator Card */}
        <Link href="/logo" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 border border-gray-200 hover:border-transparent hover:bg-gradient-to-br from-indigo-500 to-purple-500 text-gray-800 hover:text-white">
          <Image size={48} className="mb-4" />
          <h2 className="text-3xl font-bold mb-2">Logo Generator</h2>
          <p>Create unique logos for your brand</p>
        </Link>

        {/* Twitter Banner Card */}
        <Link href="/banner" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 border border-gray-200 hover:border-transparent hover:bg-gradient-to-br from-indigo-500 to-purple-500 text-gray-800 hover:text-white">
          <Twitter size={48} className="mb-4" />
          <h2 className="text-3xl font-bold mb-2">Twitter Banner</h2>
          <p>Design eye-catching Twitter banners</p>
        </Link>

        {/* Tagline Generator Card */}
        <Link href="/tagline" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 border border-gray-200 hover:border-transparent hover:bg-gradient-to-br from-indigo-500 to-purple-500 text-gray-800 hover:text-white">
          <MessageSquare size={48} className="mb-4" />
          <h2 className="text-3xl font-bold mb-2">Tagline Generator</h2>
          <p>Generate catchy taglines for your brand</p>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
