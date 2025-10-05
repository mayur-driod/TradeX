# TradeX

TradeX is a modern web application for tracking, analyzing, and staying updated on your stock trades and market news. Built with Next.js, TypeScript, Tailwind CSS, and MongoDB, it provides a personalized dashboard, real-time alerts, and actionable insights for investors.

## Features

- **Personalized Dashboard:**  
    Track your favorite stocks, view advanced charts, and monitor your portfolio in one place.

- **Real-Time Alerts:**  
    Set up price and volume alerts for any stock. Get instant email notifications when your conditions are met.

- **Market News Summaries:**  
    Receive daily news digests tailored to your watchlist, with concise, actionable insights and direct links to full articles.

- **Advanced Charting:**  
    Integrated TradingView widgets for symbol info, candlestick charts, and baseline comparisons.

- **Watchlist Management:**  
    Add, remove, and organize stocks you care about. News and alerts are personalized to your selections.

- **Onboarding & Personalization:**  
    Custom onboarding flow to capture your investment goals, risk tolerance, and preferred industries for a tailored experience.

- **Authentication:**  
    Secure sign-up and login with session management.

- **Responsive UI:**  
    Clean, dark-themed interface optimized for desktop and mobile.

## Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS 4
- **Backend:** Node.js, MongoDB, Mongoose
- **Email:** Nodemailer for transactional and alert emails
- **Charts:** TradingView widget integration
- **Other:** TypeScript, ESLint, Framer Motion, dotenv

## Getting Started

1. **Install dependencies:**
     ```bash
     npm install
     ```
2. **Set up environment variables:**  
     Copy `.env.example` to `.env.local` and fill in your configuration.

3. **Run the development server:**
     ```bash
     npm run dev
     ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint

## Folder Structure

- `/app` — Next.js app directory (pages, layouts, API routes)
- `/lib` — Utilities, constants, email templates, prompts
- `/types` — Global TypeScript types
- `/public` — Static assets

## License

This project is for educational and demonstration purposes.

---

**Made with ❤️ by Mayur**