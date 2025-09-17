# SignalSage - Trading Intelligence Platform

Trade Smarter, Faster, Confidently with your All-in-One Trading Intelligence Platform.

## Features

- **Live Market Signals**: Real-time alerts for high-probability trading opportunities
- **AI Predictive Analysis**: Leverage AI models to predict market trends and identify patterns
- **Community Insights**: Share and discover trading insights from verified traders
- **Base Mini App**: Seamlessly integrated with Base ecosystem and Farcaster

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Blockchain**: Base network integration via MiniKit
- **AI**: OpenAI API for predictive analysis
- **Data**: CoinGecko API for market data
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/signalsage.git
   cd signalsage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your API keys in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `NEXT_PUBLIC_MINIKIT_API_KEY`: Your MiniKit API key for Base integration
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
- `OPENAI_API_KEY`: OpenAI API key for AI features
- `COINGECKO_API_KEY`: CoinGecko API key for market data

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── providers.tsx     # App providers
├── components/            # React components
│   ├── AppShell.tsx      # Main app layout
│   ├── SignalCard.tsx    # Signal display component
│   ├── AIChatInterface.tsx # AI chat component
│   └── ...
├── lib/                   # Utilities and types
│   ├── types.ts          # TypeScript types
│   ├── utils.ts          # Utility functions
│   └── constants.ts      # App constants
└── public/               # Static assets
```

## Features Overview

### Live Market Signals
- Real-time trading signals with confidence scores
- Support for major cryptocurrencies
- Technical indicator-based alerts
- Historical signal performance tracking

### AI Predictive Analysis
- Natural language queries about market conditions
- Pattern recognition and trend analysis
- Personalized trading insights
- Market sentiment analysis

### Community Features
- Share trading insights and analysis
- Follow verified expert traders
- Like, comment, and share posts
- Community-driven signal validation

### Subscription Tiers
- **Free**: Limited signals and basic features
- **Trader ($19/mo)**: Full signals, AI analysis, community access
- **Pro ($49/mo)**: Priority support, advanced AI, expert insights

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@signalsage.app or join our community on Farcaster.
