import './globals.css';
import type { Metadata } from 'next';
import { Inter, Dancing_Script } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing-script'
});

export const metadata: Metadata = {
  title: 'Serendipity Academy - Academie de Dans pentru Copii | București',
  description: 'Academie de dans pentru copii în București. Cursuri de balet, dans contemporan și modern. Înscrie-te la o primă ședință gratuită!',
  keywords: 'academie dans copii, balet copii București, dans contemporan, dans modern, lecții dans individuale',
  authors: [{ name: 'Serendipity Academy' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Serendipity Academy',
    description: 'Never Miss A Chance To Dance!',
    type: 'website',
    locale: 'ro_RO',
    images: [
      {
        url: 'https://www.serendipity-academy.ro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Serendipity Academy',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VQ9BZYN5HD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VQ9BZYN5HD');
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${dancingScript.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
