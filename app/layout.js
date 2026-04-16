import './global.scss';
import { inter, bebasNeue, geist, poppins, areaNormal } from './font';
import FirstPaintLoader from '@/common/components/first-paint-loader';

export const metadata = {
  title: 'Yayz | Free Sweepstakes Casino USA – Play Online & Win Cash',
  description:
    'Enjoy your favorite casino games for free at Yayz. As a 21+ sweepstakes casino in the USA, you can play online and win real cash prizes—no purchase necessary',
  metadataBase: new URL('https://yayz.us'),
  applicationName: 'Yayz',
  authors: [{ name: 'Yayz' }],
  manifest: '/manifest.json',
  openGraph: {
    title: 'Yayz | Free Sweepstakes Casino USA – Play Online & Win Cash',
    description:
      'Enjoy your favorite casino games for free at Yayz. As a 21+ sweepstakes casino in the USA, you can play online and win real cash prizes—no purchase necessary',
    url: 'https://yayz.us',
    siteName: 'Yayz',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Yayz | Free Sweepstakes Casino USA – Play Online & Win Cash',
    description:
      'Enjoy your favorite casino games for free at Yayz. As a 21+ sweepstakes casino in the USA, you can play online and win real cash prizes—no purchase necessary',
  },

  robots: {
    index: true,
    follow: true,
  },

  referrer: 'origin',
  icons: {
    icon: '/assets/favicon.ico',
  },
  other: {
    'Permissions-Policy':
      'geolocation=(self), bluetooth=(self), accelerometer=(self), gyroscope=(self)',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${geist.variable} ${poppins.variable} ${areaNormal.variable}`}
    >
      <body className="antialiased h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollable-Content-Home font-futura">
        <FirstPaintLoader/>
        {children}
        {/* </FirstPaintLoader>
        </CleverTapBootstrap> */}
      </body>
    </html>
  );
}
