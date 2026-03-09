# TradeX

## Demo


### 🎥 Product Walkthrough

<p align="center"><b>See TradeX in action</b></p>

<div align="center">
  <video src="https://github.com/user-attachments/assets/5fa31172-d6de-4af0-ade5-47af52936846"
         controls
         width="800"
         style="border-radius:10px; box-shadow:0 10px 25px rgba(0,0,0,0.2);">
  </video>
</div>


### 💬 LinkedIn Post
Read the full LinkedIn post here:  
https://www.linkedin.com/posts/mayurksetty_feeling-stuck-in-the-loop-of-monotonous-linkedin-activity-7388915601773346817-x2G7

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
