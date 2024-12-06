// Make sure to add your Gemini API key to .env.local
if (typeof window !== 'undefined') {
  window.GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
} 