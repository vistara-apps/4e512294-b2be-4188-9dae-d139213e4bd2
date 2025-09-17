# SignalSage - Trading Intelligence Platform

Trade Smarter, Faster, Confidently: Your All-in-One Trading Intelligence Platform

## 🚀 Features

### Live Market Signals
- Real-time alerts for high-probability trading opportunities
- Based on live market data and technical indicators
- Confidence scores and risk assessments

### AI Predictive Analysis
- Leverage AI models to predict market trends
- Natural language queries for market insights
- Data-driven forecasts and pattern recognition

### Community Insights & Verified Trades
- Share analyses, trade setups, and insights
- Verified trades from established traders
- Peer-to-peer learning and collaboration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Web3**: Wagmi + RainbowKit for Base network integration
- **Icons**: Lucide React
- **APIs**:
  - CoinGecko for market data
  - OpenAI for AI analysis
  - Farcaster for social features

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/vistara-apps/4e512294-b2be-4188-9dae-d139213e4bd2.git
cd 4e512294-b2be-4188-9dae-d139213e4bd2
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your API keys
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# WalletConnect Project ID for RainbowKit
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your-walletconnect-project-id

# OpenAI API Key for AI Analysis
NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key

# CoinGecko API (free tier, no key required)
NEXT_PUBLIC_COINGECKO_API_URL=https://api.coingecko.com/api/v3

# Base Network Configuration
NEXT_PUBLIC_BASE_RPC_URL=https://mainnet.base.org
NEXT_PUBLIC_BASE_CHAIN_ID=8453
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── providers.js       # Web3 providers
├── components/            # React components
│   ├── Dashboard.js       # Main dashboard
│   ├── Signals.js         # Signals page
│   ├── AIAnalysis.js      # AI analysis page
│   ├── Community.js       # Community page
│   ├── SignalCard.js      # Signal display component
│   ├── AICard.js          # AI analysis component
│   └── PostCard.js        # Community post component
├── lib/                   # Utility functions
│   └── api.js            # API integration functions
├── styles/               # Global styles
│   └── globals.css       # Tailwind CSS imports
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- **Background**: `hsl(225 3% 12%)`
- **Accent**: `hsl(170 70% 50%)`
- **Primary**: `hsl(220 90% 55%)`
- **Success**: `hsl(140 60% 50%)`
- **Danger**: `hsl(0 70% 50%)`
- **Warning**: `hsl(40 70% 50%)`

### Typography
- **Primary Text**: `hsl(0 0% 95%)`
- **Secondary Text**: `hsl(0 0% 70%)`
- **Headings**: Various weights and sizes

### Components
- Cards with subtle shadows
- Consistent border radius and spacing
- Hover effects and transitions

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 📊 Business Model

### Subscription Tiers
- **Free**: Limited signals/analysis, basic community access
- **Trader ($19/mo)**: Full signals, AI analysis, community access
- **Pro ($49/mo)**: Priority support, advanced AI features, expert insights

### Revenue Streams
- Monthly subscriptions
- Micro-transactions for specific signals
- Tokenized access for premium features
- Performance-based profit sharing

## 🔒 Security

- Environment variables for sensitive data
- API rate limiting
- Input validation and sanitization
- Secure wallet connections

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Join our community Discord
- Contact the development team

---

Built with ❤️ for the crypto trading community

