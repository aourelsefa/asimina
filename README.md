# Photographer Portfolio Website

A modern, responsive portfolio website for photographers built with Next.js and WordPress as a headless CMS.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📸 Image gallery with lightbox functionality
- 🖼️ Optimized image loading and lazy loading
- 📱 Mobile-first responsive design
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js 14
- 🔄 WordPress REST API integration for content management

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: WordPress (Headless)
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ installed
- WordPress installation (local or hosted)
- WordPress REST API enabled

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## WordPress Setup

### 1. Install Required Plugins

To enable custom fields for images and contact information, you'll need to install **Advanced Custom Fields (ACF)** plugin:

1. Go to WordPress Admin → Plugins → Add New
2. Search for "Advanced Custom Fields"
3. Install and activate the plugin

### 2. Create Custom Fields

#### For Hero Section

1. Go to **Custom Fields** → **Field Groups** → **Add New**
2. Create a new field group called "Hero Section"
3. Add a field:
   - **Field Label**: Background Image
   - **Field Name**: `background_image`
   - **Field Type**: Image
   - **Return Format**: Image ID
4. Set **Location Rules** to show this field group when:
   - **Page Template** is equal to **Default Template**
   - **Page Slug** is equal to **hero**

#### For About Section

1. Create a new field group called "About Section"
2. Add a field:
   - **Field Label**: Profile Image
   - **Field Name**: `profile_image`
   - **Field Type**: Image
   - **Return Format**: Image ID
3. Set **Location Rules** to show when:
   - **Page Slug** is equal to **about**

#### For Contact Section

1. Create a new field group called "Contact Section"
2. Add three fields:
   - **Email** (Field Name: `email`, Type: Email)
   - **Phone** (Field Name: `phone`, Type: Text)
   - **Address** (Field Name: `address`, Type: Textarea)
3. Set **Location Rules** to show when:
   - **Page Slug** is equal to **contact**

### 3. Create Required Pages

Create the following pages in WordPress with these exact slugs:

1. **Hero Page** (slug: `hero`)
   - Title: Your main heading
   - Content: Your subtitle/description
   - Set Background Image in ACF fields

2. **About Page** (slug: `about`)
   - Title: About Me (or similar)
   - Content: Your biography/description
   - Set Profile Image in ACF fields

3. **Contact Page** (slug: `contact`)
   - Title: Get In Touch (or similar)
   - Fill in Email, Phone, and Address in ACF fields

### 4. Upload Gallery Images

1. Go to **Media** → **Add New**
2. Upload your portfolio images
3. Add descriptive alt text for each image
4. All images in the Media Library will automatically appear in the Gallery section

### 5. Enable REST API

The WordPress REST API should be enabled by default. To verify:

1. Visit: `https://your-wordpress-site.com/wp-json/wp/v2`
2. You should see JSON data, not an error

### 6. Allow REST API Access (if needed)

If you're having CORS issues, you may need to add this to your WordPress theme's `functions.php`:

```php
function add_cors_headers() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}
add_action('init', 'add_cors_headers');
```

Or use a plugin like "WP REST API - Filter Fields" for more control.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with navigation
│   └── page.tsx             # Home page
├── components/
│   ├── About.tsx            # About section component
│   ├── Contact.tsx          # Contact section component
│   ├── Gallery.tsx          # Gallery with lightbox
│   ├── Hero.tsx             # Hero section component
│   └── Navigation.tsx       # Navigation bar
├── lib/
│   └── wordpress.ts         # WordPress API utilities
├── types/
│   └── wordpress.ts         # TypeScript types for WordPress data
└── public/                  # Static assets
```

## Customization

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Adding New Sections

1. Create a new component in `components/`
2. Add it to `app/page.tsx`
3. Create corresponding WordPress pages/fields if needed

### Modifying Layout

Edit the components in the `components/` directory to change the layout and styling.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your `NEXT_PUBLIC_WORDPRESS_API_URL` environment variable
4. Deploy!

### Other Platforms

The Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Your own server

## Notes

- **Images**: All images are optimized automatically using Next.js Image component
- **Content Updates**: Changes in WordPress will appear after the cache revalidates (60 seconds by default)
- **ACF Fields**: The site uses ACF (Advanced Custom Fields) for structured data. Make sure ACF is installed and configured correctly.
- **Fallbacks**: The site includes fallback content if WordPress data is not available, so it will work even before WordPress is fully configured.

## Support

For issues or questions, please check:
- [Next.js Documentation](https://nextjs.org/docs)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Advanced Custom Fields Documentation](https://www.advancedcustomfields.com/resources/)

## License

MIT


