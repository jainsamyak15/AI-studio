import { NextApiRequest, NextApiResponse } from 'next';
import Together from 'together-ai';
import enhancePrompt from '../../utils/enhancePrompt';

const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { prompt } = req.body;
    const enhancedPrompt = enhancePrompt(prompt);

    const response = await together.images.create({
      model: "black-forest-labs/FLUX.1-schnell-Free",
      prompt: enhancedPrompt,
      width: 1440,
      height: 576,
      n: 1,
    });

    // Assuming the response structure contains the image URL
    const imageUrl = response.data[0].url;
    console.log('Generated Twitter banner:', imageUrl);

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error('Error generating Twitter banner:', error);
    res.status(500).json({ message: 'Error generating Twitter banner' });
  }
}
