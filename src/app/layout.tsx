import { ThemeProvider } from 'next-themes';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import { pageMetadata } from '@/config/metadata';
import '@/styles/globals.css';

export const metadata = pageMetadata.home;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="tracking-wider antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="px-[30px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
