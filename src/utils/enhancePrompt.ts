const enhancePrompt = (prompt: string): string => {
    const keywords = [
      'professional',
      'modern',
      'sleek',
      'minimalist',
      'elegant',
      'creative',
      'innovative',
      'stylish',
      'trendy',
      'sophisticated',
      'high-quality',
      'premium',
      'unique',
      'eye-catching',
      'memorable',
    ];
  
    const randomKeywords = keywords
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .join(', ');
  
    return `${prompt}. Style: ${randomKeywords}. Create a humanized, designer-quality result that doesn't look AI-generated.`;
  };
  
  export default enhancePrompt;