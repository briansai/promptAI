import '@styles/globals.css';

export const metadata = {
  title: 'PromptAI',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
