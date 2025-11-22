import { Helmet } from 'react-helmet-async';
import { BUSINESS_URL } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
}

export function SEO({ title, description, keywords, path = '', image = '/logo.jpg' }: SEOProps) {
  const url = `${BUSINESS_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BUSINESS_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
