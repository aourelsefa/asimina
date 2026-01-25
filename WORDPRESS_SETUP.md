# WordPress Setup Guide

This guide will help you set up WordPress as a headless CMS for your photographer portfolio website.

## Option 1: Using Advanced Custom Fields (ACF) - Recommended

ACF provides an easy-to-use interface for managing custom fields in WordPress.

### Step 1: Install ACF Plugin

1. Go to WordPress Admin → Plugins → Add New
2. Search for "Advanced Custom Fields"
3. Install and activate the plugin

### Step 2: Create Field Groups

Follow the instructions in the main README.md for creating ACF field groups.

## Option 2: Using Standard WordPress Custom Fields

If you prefer not to use ACF, you can use WordPress's built-in custom fields feature.

### Step 1: Enable Custom Fields

1. Go to WordPress Admin → Pages
2. Edit a page
3. If you don't see "Custom Fields" meta box, click "Screen Options" at the top right
4. Check "Custom Fields" to enable it

### Step 2: Add Custom Fields to Pages

#### Hero Page (slug: `hero`)

1. Create or edit the page with slug `hero`
2. Scroll to "Custom Fields" section
3. Add these custom fields:
   - **Name**: `background_image` | **Value**: [Media ID number]
     - To find Media ID: Go to Media Library, click an image, look at the URL (e.g., `wp-admin/upload.php?item=123` - the number is the ID)

#### About Page (slug: `about`)

1. Create or edit the page with slug `about`
2. Add custom field:
   - **Name**: `profile_image` | **Value**: [Media ID number]

#### Contact Page (slug: `contact`)

1. Create or edit the page with slug `contact`
2. Add custom fields:
   - **Name**: `email` | **Value**: your@email.com
   - **Name**: `phone` | **Value**: +1 234 567 8900
   - **Name**: `address` | **Value**: Your address here

### Step 3: Expose Custom Fields via REST API

By default, WordPress doesn't expose custom fields in the REST API. Add this to your theme's `functions.php`:

```php
function expose_custom_fields_in_rest() {
    register_rest_field(
        'page',
        'meta',
        array(
            'get_callback' => function($object) {
                return get_post_meta($object['id']);
            },
            'schema' => null,
        )
    );
}
add_action('rest_api_init', 'expose_custom_fields_in_rest');
```

This will expose all custom fields under the `meta` key in the REST API response.

## Finding Media IDs

To find the Media ID for images:

1. Go to **Media** → **Library**
2. Click on an image
3. Look at the URL in your browser: `wp-admin/upload.php?item=123`
4. The number (123 in this example) is the Media ID
5. Use this number as the value for image custom fields

## Testing Your Setup

1. Visit: `https://your-wordpress-site.com/wp-json/wp/v2/pages?slug=hero`
2. You should see JSON data with your page content
3. Check if custom fields appear in the response (either under `acf` or `meta`)

## Troubleshooting

### Custom Fields Not Showing

- Make sure you've added the `functions.php` code to expose custom fields
- Clear any caching plugins
- Check that the field names match exactly (case-sensitive)

### Images Not Loading

- Verify the Media ID is correct
- Make sure the image exists in the Media Library
- Check that the REST API is accessible

### CORS Errors

If you see CORS errors in the browser console, add this to your theme's `functions.php`:

```php
function add_cors_headers() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}
add_action('init', 'add_cors_headers');
```

## Quick Start Checklist

- [ ] WordPress installed and running
- [ ] REST API accessible at `/wp-json/wp/v2`
- [ ] Created pages with slugs: `hero`, `about`, `contact`
- [ ] Added custom fields (via ACF or standard method)
- [ ] Exposed custom fields in REST API (if using standard method)
- [ ] Uploaded images to Media Library
- [ ] Set `NEXT_PUBLIC_WORDPRESS_API_URL` in `.env.local`
- [ ] Tested API endpoints in browser

