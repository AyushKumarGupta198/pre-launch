import {
  landingPromo1,
  landingPromo2,
  landingPromo3,
  forYou1,
  forYou2,
  forYou3,
  landingCalendar,
  landingSupport,
} from '@/assets/webp';

import { top1, top2, top3, top4, top5, top6, top7, top8, top9, top10 ,landingGame1,landingGame2,landingGame3,landingGame4,landingGame5 } from '@/assets/png';

export const LandingPromo = [
  {
    title: 'Play for free',
    description: 'Enjoy real prizes without any purchase',
    image: landingPromo1,
    bg: '!bg-[linear-gradient(180deg,_#1D0D79_0%,_#521DEB_100%)]',
  },
  {
    title: 'Bonus system',
    description: 'Earn rewards every time you play!',
    image: landingPromo2,
    bg: '!bg-[linear-gradient(140.99deg,_#1B5361_14.98%,_#291194_91.32%)]',
  },
  {
    title: 'Instant payouts',
    description: 'Fast, secure and hassle free redemption',
    image: landingPromo3,
    bg: '!bg-[linear-gradient(180deg,_#1D0D79_0%,_#521DEB_100%)]',
  },
];

export const ForYou = [
  {
    title: 'No Download Required',
    description: 'Play Instantly on your Device',
    image: forYou1,
    bg: 'bg-[linear-gradient(177.01deg,_rgba(161,27,162,0)_2.48%,_#A11BA2_104.45%)]',
  },
  {
    title: 'Need a headstart?',
    description: 'Register and grab your Welcome Bonus',
    image: forYou2,
    bg: 'bg-[linear-gradient(179.9deg,_rgba(135,71,200,0)_0.09%,_#422362_99.91%)]',
  },
  {
    title: 'Daily Bonus',
    description: 'Earn rewards every time you play!',
    image: forYou3,
    bg: 'background: linear-gradient(177.01deg, rgba(198, 112, 6, 0) 2.48%, #C67006 104.45%)',
  },
];

export const SupportPromo = [
  {
    id:1,
    title: 'We’ve got you covered-24/7',
    CTA: 'Help Center',
    image: landingSupport,
  },
  {
    id:2,
    title: 'Discover new games every single week!',
    CTA: 'Notify Me',
    image: landingCalendar,
  },
];

export const STATIC_TRENDING_GAMES = [
  {
    id: 'landing-static-game-1',
    name: 'Top Game 1',
    thumbnailUrl: landingGame1,
  },
  {
    id: 'landing-static-game-2',
    name: 'Top Game 2',
    thumbnailUrl: landingGame2,
  },
  {
    id: 'landing-static-game-3',
    name: 'Top Game 3',
    thumbnailUrl: landingGame3,
  },
  {
    id: 'landing-static-game-4',
    name: 'Top Game 4',
    thumbnailUrl: landingGame4,
  },
  {
    id: 'landing-static-game-5',
    name: 'Top Game 5',
    thumbnailUrl: landingGame5,
  },
  {
    id: 'landing-static-game-6',
    name: 'Top Game 6',
    thumbnailUrl: top1,
  },
  
];
