import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'OmniBot Builder',
  description: 'Visual drag-and-drop platform for creating and deploying cross-platform AI agents.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark`}>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
