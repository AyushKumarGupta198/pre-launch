'use client';

import { useEffect, useMemo } from 'react';

const CmsDetails = ({ cmsDetails = {}, isDialog = false }) => {
  const parsedHtml = useMemo(() => {
    const rawHTML = cmsDetails?.content?.EN || '';
    if (typeof window === 'undefined') return rawHTML;

    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHTML, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
      if (heading.textContent) {
        heading.id = heading.textContent
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)+/g, '');
      }
    });

    return doc.body.innerHTML;
  }, [cmsDetails?.content?.EN]);

  useEffect(() => {
    if (!isDialog && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offset = 100;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    } else if (!isDialog) {
      window.scrollTo(0, 0);
    }
  }, [parsedHtml, isDialog]);

  const innerContent = (
    <>

      <div
        className="prose prose-sm sm:prose-base lg:prose-lg max-w-none dark:prose-invert font-roboto prose-headings:font-semibold prose-headings:mb-2 prose-a:text-primary prose-a:underline prose-p:mb-4 prose-strong:text-inherit text-white prose-headings:text-white prose-p:text-white prose-li:text-white p-2"
        dangerouslySetInnerHTML={{ __html: parsedHtml }}
      />
    </>
  );

  if (isDialog) {
    return (
      <div className="w-full bg-[#233269] backdrop-blur-md backdrop-brightness-110 touch-auto sm:p-4 animate-fadeInUp rounded-md">
        {innerContent}
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-8 transition-all duration-300 bg-main text-white">
      <div className="w-full mx-auto bg-main backdrop-blur-md backdrop-brightness-110 overflow-y-auto touch-auto rounded-2xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.2)] border border-white/20 scrollbar-custom animate-fadeInUp hover:ring-2 hover:ring-blue-600 transition-all duration-300">
        {innerContent}
      </div>
    </div>
  );
};

export default CmsDetails;
