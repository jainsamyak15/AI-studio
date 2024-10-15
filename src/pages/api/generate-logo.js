import { NextApiRequest, NextApiResponse } from 'next';
import Together from 'together-ai';
import { enhanceLogoPrompt } from '../../utils/enhancePrompt';

const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { prompt } = req.body;
    const enhancedPrompt = enhanceLogoPrompt(prompt);
    
    const response = await together.images.create({
      model: "black-forest-labs/FLUX.1-schnell-Free",
      prompt: enhancedPrompt,
      width: 512,  // Increased for higher quality
      height: 512, // Increased for higher quality
      steps: 4,    // Increased for more detailed results
      n: 1,         // Generate multiple options
      negative_prompt: "existing logos, Apple logo, Starbucks logo, Nike swoosh, copyright infringement, text, words, letters, busy, cluttered, complex, low quality, blurry, amateurish",
      cfg_scale: 8.5, // Increased for stronger adherence to prompt
    });


    const imageUrl = response.data[0].url;
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error('Error generating logo:', error);
    res.status(500).json({ message: 'Error generating logo' });
  }
}
