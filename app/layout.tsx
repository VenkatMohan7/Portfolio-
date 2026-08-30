import type {Metadata, Viewport} from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0b132b',
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://venkat-mohan.dev')
  ),
  title: 'Venkat Mohan Atmakuru | Software Engineer & Full Stack Developer',
  description:
    'Official portfolio of Venkat Mohan Atmakuru — B.Tech Software Engineering graduate specializing in Python, Django, React.js, Node.js, and AWS Cloud architectures. View projects, case studies, and download ATS resume.',
  keywords: [
    'Venkat Mohan Atmakuru',
    'Software Engineer',
    'Full Stack Developer',
    'Python Developer',
    'Django',
    'React',
    'Node.js',
    'AWS Cloud',
    'Portfolio',
    'Software Engineer Resume',
  ],
  authors: [{ name: 'Venkat Mohan Atmakuru', url: 'https://github.com/venkey747' }],
  creator: 'Venkat Mohan Atmakuru',
  publisher: 'Venkat Mohan Atmakuru',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Venkat Mohan Atmakuru | Software Engineer & Full Stack Developer',
    description:
      'Passionate Software Engineer skilled in building scalable full-stack applications with Python, Django, React, Node.js, and AWS. Explore projects, engineering case studies, and CV.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Venkat Mohan Atmakuru Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venkat Mohan Atmakuru | Software Engineer & Full Stack Developer',
    description:
      'Passionate Software Engineer skilled in building scalable full-stack applications with Python, Django, React, Node.js, and AWS. Explore projects, engineering case studies, and CV.',
    creator: '@venkey747',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
