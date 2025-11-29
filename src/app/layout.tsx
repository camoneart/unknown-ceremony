import '@/styles/globals.css';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import { pageMetadata } from '@/config/metadata';

export const metadata = pageMetadata.home;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="tracking-wider antialiased">
        <Header />
        <main className="px-[30px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
