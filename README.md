# Link in Bio - Personal Portfolio Page

A modern, responsive "link in bio" page with glassmorphism design, dark mode support, and interactive blog carousel. Perfect for showcasing your social media presence and latest content.

## Live Demo

- **Primary Demo**: [https://socialportal.nayanchandradas.com](https://socialportal.nayanchandradas.com)
- **GitHub Pages**: [https://nayandas69.github.io/link-in-bio](https://nayandas69.github.io/link-in-bio)

## Features

### Core Features
- [x] Responsive glassmorphism design
- [x] Dark/Light mode toggle with persistence
- [x] Interactive blog carousel with autoplay
- [x] Social media links with hover effects
- [x] Modal popup for blog details
- [x] Touch/swipe support for mobile
- [x] Keyboard navigation support
- [x] SEO optimized with meta tags
- [x] Accessibility features (ARIA labels, focus states)
- [x] Cross-browser compatibility

### Design Features
- [x] Modern glassmorphism UI
- [x] Smooth animations and transitions
- [x] Hover tooltips for social links
- [x] Responsive design (mobile-first)
- [x] Custom scrollbar styling
- [x] Parallax background effect

### Technical Features
- [x] Vanilla JavaScript (no dependencies)
- [x] CSS3 with advanced features
- [x] LocalStorage for theme persistence
- [x] Touch gesture support
- [x] Performance optimized
- [x] Clean, maintainable code

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome 6.6.0
- **Fonts**: Google Fonts (Poppins, Roboto Slab)
- **Storage**: LocalStorage for theme persistence
- **Deployment**: GitHub Pages / Netlify compatible

## Quick Start

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nayandas69/link-in-bio.git
cd link-in-bio
```

2. Open `index.html` in your browser or serve with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` to view the page

## Customization Guide

### Personal Information

#### Profile Section (index.html)
```html
<!-- Update profile image and details -->
<img src="images/profile.jpg" alt="Your Name Profile Picture" class="profile-img">
<h1>Your Name</h1>
<p>Your tagline or description</p>
```

#### Social Links (index.html)
```html
<!-- Replace with your social media links -->
<a href="https://github.com/yourusername" class="social-link github">
<a href="https://youtube.com/@yourchannel" class="social-link youtube">
<a href="mailto:your.email@domain.com" class="social-link email">
```

### Blog Content

#### Update Blog Data (index.js)
```javascript
// Replace with your blog posts/videos
const blogs = [
    {
        title: 'Your Blog Post Title',
        description: 'Your blog post description...',
        video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        thumbnail: 'images/your-thumbnail.jpg'
    },
    // Add more blog posts...
];
```

### Color Customization

#### Social Link Colors (index.css)
```css
/* Customize social platform colors */
.social-link.github {
    background: linear-gradient(135deg, #your-color1, #your-color2);
}

.social-link.custom-platform {
    background: linear-gradient(135deg, #custom-color1, #custom-color2);
}
```

#### Theme Colors (index.css)
```css
/* Light mode container */
.container {
    background: rgba(255, 255, 255, 0.1); /* Adjust transparency */
}

/* Dark mode container */
body.dark-mode .container {
    background: rgba(0, 0, 0, 0.6); /* Adjust transparency */
}
```

### Background Customization

#### Change Background Image (index.css)
```css
body {
    background-image: url('images/your-background.jpg');
    background-size: cover;
    background-position: center;
}
```

### Configuration Options

#### Carousel Settings (index.js)
```javascript
// Adjust carousel autoplay timing
const autoplayInterval = 5000; // 5 seconds (change as needed)

// Modify swipe sensitivity
const swipeThreshold = 50; // pixels (adjust for touch sensitivity)
```

## Browser Support

- [x] Chrome 90+
- [x] Firefox 88+
- [x] Safari 14+
- [x] Edge 90+
- [x] Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- [x] Optimized images and assets
- [x] Minimal JavaScript bundle
- [x] CSS animations with GPU acceleration
- [x] Lazy loading for images
- [x] Efficient DOM manipulation

## Accessibility

- [x] ARIA labels and roles
- [x] Keyboard navigation support
- [x] Screen reader compatibility
- [x] High contrast mode support
- [x] Reduced motion preferences
- [x] Focus indicators

## SEO Features

- [x] Meta tags for search engines
- [x] Open Graph tags for social sharing
- [x] Semantic HTML structure
- [x] Alt text for images
- [x] Proper heading hierarchy

## Deployment

### GitHub Pages
1. Fork this repository
2. Go to Settings > Pages
3. Select source branch (main)
4. Your site will be available at `https://yourusername.github.io/link-in-bio`

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy automatically on push

### Custom Domain
Update the following files for custom domain:
- Add CNAME file with your domain
- Update meta tags in index.html
- Update README.md links

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## Troubleshooting

### Common Issues

#### Dark Mode Not Persisting
- [ ] Check browser localStorage support
- [ ] Clear browser cache and cookies
- [ ] Ensure JavaScript is enabled

#### Carousel Not Working
- [ ] Verify image paths are correct
- [ ] Check browser console for errors
- [ ] Ensure all blog data is properly formatted

#### Social Links Not Opening
- [ ] Verify URLs are correct and include https://
- [ ] Check for typos in href attributes
- [ ] Test links individually

## License and Usage

> [!IMPORTANT]
> This project is licensed under the MIT License. You are free to use, modify, and distribute this code for personal and commercial purposes.

> [!CAUTION]
> Do not remove the author credit comments from the code files (HTML, CSS, JS). These credits should remain intact when using or modifying the project.

### Usage Terms
- ✅ Free to use and modify
- ✅ Commercial use allowed
- ✅ Distribution allowed
- ❌ Do not remove author credits from code
- ❌ Do not claim original authorship

## Author

**Nayan Das**
- GitHub: [@nayandas69](https://github.com/nayandas69)
- Email: [nayanchandradas@hotmail.com](mailto:nayanchandradas@hotmail.com)
- YouTube: [@dasnayan69](https://youtube.com/@dasnayan69)

## Support

If you find this project helpful, consider:
- Starring the repository
- Following on GitHub
- Subscribing to the YouTube channel
- Supporting on Patreon: [@NayanDas69](https://patreon.com/NayanDas69)

## Changelog

### Version 2.0.0
- [x] Initial release with core features
- [x] Responsive design implementation
- [x] Dark mode functionality
- [x] Blog carousel with autoplay
- [x] Social media integration

---

Made with dedication by [Nayan Das](https://github.com/nayandas69) | Licensed under MIT