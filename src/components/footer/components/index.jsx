'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { name } from '@/assets/svg';
import {
  footerPng,
  googlePayLogo,
  mastercardLogo,
  applePay,
  visaLogo,
  instagramIcon,
  facebookIcon,
  telegramIcon,
  twitterIcon,
} from '@/assets/png';
import ImageHandler from '@/common/components/image-handler/ImageHandler';
import { cmsPages, getCmsBySlug } from '@/data/cms';
import CommonDialog from '@/common/components/common-dialog';
import CmsDetails from '@/components/cms-details/components';

const Footer = memo(() => {
  const [selectedCmsSlug, setSelectedCmsSlug] = React.useState(null);

  const selectedCmsContent = React.useMemo(() => {
    if (!selectedCmsSlug) return null;
    return getCmsBySlug(selectedCmsSlug);
  }, [selectedCmsSlug]);

  const handleLinkClick = (e, slug) => {
    if (slug) {
      e.preventDefault();
      setSelectedCmsSlug(slug);
    }
  };
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  const socialMediaData = {
    value: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      telegram: 'https://t.me',
      twitter: 'https://x.com',
    },
  };

  const socialIconsMap = {
    instagram: instagramIcon,
    facebook: facebookIcon,
    // telegram: telegramIcon,
    // twitter: twitterIcon,
  };


  const activeFooterPages = cmsPages.filter((page) => page.isFooter === true);
  const getDynamicLinks = (categoryKey) => {
    return activeFooterPages
      .filter((page) => page.category === categoryKey)
      .map((page) => ({
        name: page.title?.EN || page.title?.en || '',
        url: '/legal/' + page.slug,
        slug: page.slug,
      }));
  };

  const footerSections = [
    {
      title: 'About Yayz',
      links: getDynamicLinks('about_us'),
    },
    {
      title: 'Platform',
      links: getDynamicLinks('platform'),
    },
    {
      title: 'Support',
      links: [{ name: 'Help & FAQs', url: 'https://yayz.zendesk.com/hc/en-us' },{name: 'Email Us At : support@yayz.com', url: 'mailto:support@yayz.com' }].concat(getDynamicLinks('support')),
    },
  ];

  return (
    <footer
      style={{
        backgroundImage: 'url(' + footerPng + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex w-full py-4 max-sm:mb-[8rem] text-white h-[56rem] sm:h-[22rem] mt-auto overflow-x-clip"
    >
      <div className={isLandingPage ? 'w-full px-[1rem] lg:px-[13.5rem]' : 'w-full'}>
        <div className="flex flex-col p-[1rem] pr-[4rem] sm:flex-row gap-2.5 md:gap-4 justify-between">
          <div>
            <div className="font-normal text-xs leading-[1.3125rem] md:text-base">
              Enjoy lightning-fast deposits & withdrawals
            </div>
            <div className="font-normal text-lg md:text-[1.8125rem] leading-[2.1125rem]">
              Quick & Safe Payments{' '}
            </div>
          </div>
          <div className="flex items-center gap-2.5 md:gap-4 my-auto">
            <ImageHandler src={mastercardLogo} width={216} height={136} objectFit="contain" className="max-w-[3rem] h-[2.8125rem]" />
            <ImageHandler src={applePay} width={424} height={181} objectFit="contain" className="max-w-[4rem] h-[2.8125rem]" />
            <ImageHandler src={visaLogo} width={349} height={113} objectFit="contain" className="max-w-[4rem] h-[2.8125rem]" />
            <ImageHandler src={googlePayLogo} width={460} height={181} objectFit="contain" className="max-w-[4.5rem] h-[3rem]" />
          </div>
        </div>

        <div className="flex justify-start gap-12 lg:gap-32 py-[1rem] sm:p-[1rem] mx-[1rem] max-sm:flex-col xs:gap-3">
          <div className="space-y-4 flex flex-col sm:text-left mb-8 ">
            <Image src={name} alt="Yayz Logo" height={122} width={115} className="h-[7.42rem] " />
            <div className="font-light text-[1rem] text-white text-nowrap">© 2026 Yayz | All Rights Reserved.</div>
            <div className="font-light text-sm text-gray-400 mt-2">
              No purchase necessary • 21+ only • Void where prohibited
            </div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:justify-around md:gap-2 lg:gap-12 w-full min-w-0">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col w-full md:w-auto">
                <h3 className="font-semibold text-sm tracking-wider mb-3 text-white md:normal-case md:text-lg md:mb-4">
                  {section.title}
                </h3>

                <ul className="flex overflow-x-auto scrollbar-hide gap-3 pb-2 md:flex-col md:gap-0 md:space-y-2 md:pb-0 md:overflow-visible">
                  {section.links.map((link) => (
                    <li key={link.name} className="flex-shrink-0 md:flex-shrink">
                      <Link
                        href={link.url}
                        onClick={(e) => handleLinkClick(e, link.slug)}
                        className="whitespace-nowrap inline-flex items-center justify-center border border-[#FFFFFF29] px-[1rem] py-[0.5rem] rounded-[0.5rem] bg-coinToggleBg text-white text-sm font-semibold transition-colors md:whitespace-normal md:border-none md:p-0 md:bg-transparent md:text-gray-300 md:hover:text-brand-pink md:hover:underline md:font-normal md:justify-start"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="relative px-7 sm:px-3 lg:-top-[4rem] md:-left-[3rem] flex items-center sm:justify-end gap-2.5 md:gap-4 my-auto">
          {socialMediaData?.value &&
            Object.entries(socialMediaData.value).map(([platform, url]) => {
              if (!url || !socialIconsMap[platform]) return null;

              return (
                <Link
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <div className="h-10 w-10 max-w-11 max-h-11 rounded-full p-2.5 border border-white/10 hover:bg-white/10 transition-colors">
                    <ImageHandler
                      src={socialIconsMap[platform]}
                      width={20}
                      height={20}
                      objectFit="fit"
                      alt={platform + ' icon'}
                    />
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <CommonDialog
        isOpen={!!selectedCmsSlug}
        onClose={() => setSelectedCmsSlug(null)}
        contentClassName="max-h-[70vh] md:max-h-[75vh] overflow-y-auto scrollbar-custom md:min-w-[600px] !p-2"
      >
        {selectedCmsContent ? (
          <CmsDetails cmsDetails={selectedCmsContent} isDialog={true} />
        ) : null}
      </CommonDialog>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
