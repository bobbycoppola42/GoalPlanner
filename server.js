import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// OpenAI chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, goalsContext } = req.body;

    console.log('📨 Received chat request');
    console.log('🔑 API Key present:', !!process.env.VITE_OPENAI_API_KEY);
    console.log('📝 Messages count:', messages?.length);

    if (!process.env.VITE_OPENAI_API_KEY) {
      console.error('❌ OpenAI API key not found in environment');
      return res.status(500).json({ 
        error: 'OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your .env.local file' 
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a helpful goal planning assistant. The user has the following goals:\n\n${goalsContext}\n\nHelp them create actionable plans, break down complex goals, suggest strategies, and provide motivation. Be concise, practical, and encouraging.`
          },
          ...messages
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('❌ OpenAI API Error:', error);
      return res.status(response.status).json({ 
        error: error.error?.message || 'OpenAI API error' 
      });
    }

    const data = await response.json();
    console.log('✅ OpenAI response received');
    res.json(data);
  } catch (error) {
    console.error('❌ Server error:', error.message);
    console.error('Stack:', error.stack);
    res.status(500).json({ error: 'Internal server error: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/chat`);
});
