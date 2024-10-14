import { NextApiRequest, NextApiResponse } from 'next';
import Together from 'together-ai';
import enhancePrompt from '../../utils/enhancePrompt';

const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { prompt } = req.body;
    const enhancedPrompt = enhancePrompt(`Generate a catchy and memorable tagline for: ${prompt}`);

    const response = await together.chat.completions.create({
      messages: [{ role: 'user', content: enhancedPrompt }],
      model: "meta-llama/Llama-Vision-Free",
      max_tokens: 50,
      temperature: 0.7,
      top_p: 0.7,
      top_k: 50,
      repetition_penalty: 1,
      stop: ["<|eot_id|>", "<|eom_id|>"],
    });

    const tagline = response.choices?.[0]?.message?.content?.trim() ?? '';
    res.status(200).json({ tagline });
  } catch (error) {
    console.error('Error generating tagline:', error);
    res.status(500).json({ message: 'Error generating tagline' });
  }
}