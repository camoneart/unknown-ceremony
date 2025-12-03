import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import { pageMetadata } from '@/config/metadata';
import { zenOldMincho } from '@/config/fonts';
import Background from '@/components/layout/background/Background';
import '@/styles/globals.css';

export const metadata = pageMetadata.home;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenOldMincho.variable} antialiased`} suppressHydrationWarning>
        <Background />
        <Header />
        <main className="px-[30px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
