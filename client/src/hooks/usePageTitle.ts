import { useEffect } from 'react';

interface PageTitleOptions {
  title: string;
  description?: string;
}

export function usePageTitle({ title, description }: PageTitleOptions) {
  useEffect(() => {
    // Update page title
    const fullTitle = title === 'Inicio' ? 'CR Alineaciones Lubricentro - Taller Mecánico en Bahía Blanca' : `${title} | CR Alineaciones Lubricentro`;
    document.title = fullTitle;

    // Update meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    // Update Open Graph description
    if (description) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
    }

    // Update Twitter title
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', fullTitle);
    }

    // Update Twitter description
    if (description) {
      let twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      }
    }

  }, [title, description]);
}
