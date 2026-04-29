# Project Images Guide 🖼️

## Overview
The carousel has been updated to support **image thumbnails** for project cards instead of just icons. This guide explains how to add and manage images.

---

## Quick Start

### Method 1: Add Individual Images (Recommended)
Open the browser console and run:
```javascript
ProjectImageManager.setImage(0, 'images/pos-project.jpg');
ProjectImageManager.setImage(1, 'images/game-project.jpg');
ProjectImageManager.setImage(2, 'images/apk-pos.jpg');
```

### Method 2: Add Multiple Images at Once
```javascript
ProjectImageManager.setImages([
  { index: 0, path: 'images/pos-project.jpg' },
  { index: 1, path: 'images/game-project.jpg' },
  { index: 2, path: 'images/apk-pos.jpg' },
  { index: 3, path: 'images/datamex.jpg' },
  { index: 4, path: 'images/ramae-store.jpg' },
  { index: 5, path: 'images/student-system.jpg' }
]);
```

### Method 3: Initialize from Config (Best for Permanent Setup)
Add this code in the HTML `<script>` section after the image manager definition:
```javascript
// Initialize project images
document.addEventListener('DOMContentLoaded', function() {
  ProjectImageManager.setImages([
    { index: 0, path: 'images/pos-project.jpg' },
    { index: 1, path: 'images/game-project.jpg' },
    { index: 2, path: 'images/apk-pos.jpg' },
    { index: 3, path: 'images/datamex.jpg' },
    { index: 4, path: 'images/ramae-store.jpg' },
    { index: 5, path: 'images/student-system.jpg' }
  ]);
});
```

---

## Project Index Reference

| Index | Project Name | Current Icon |
|-------|--------------|--------------|
| 0 | POS System | 💰 (cash-register) |
| 1 | Website Game Project | 🎮 (gamepad) |
| 2 | APK POS Application | 📱 (mobile) |
| 3 | Frontend School Project | 🏫 (school) |
| 4 | E-commerce Website | 🧁 (cake) |
| 5 | Student Info System | 👨‍🎓 (graduate) |

---

## Image Setup Instructions

### Step 1: Prepare Your Images
- Place images in the `images/` folder in your project directory
- Recommended size: **600x400px** or wider (for good quality)
- Supported formats: JPG, PNG, WebP

### Step 2: Name Your Images
Use descriptive names like:
- `pos-project.jpg`
- `game-project.jpg`
- `apk-pos.jpg`
- `datamex.jpg`
- `ramae-store.jpg`
- `student-system.jpg`

### Step 3: Add to HTML (Permanent Solution)
In `index.html`, find this line (around line 2250):
```javascript
// Example usage (uncomment to use):
// ProjectImageManager.setImages([...]);
```

Replace it with your actual image paths:
```javascript
// Initialize project images on page load
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImages);
  } else {
    initImages();
  }
  
  function initImages() {
    ProjectImageManager.setImages([
      { index: 0, path: 'images/pos-project.jpg' },
      { index: 1, path: 'images/game-project.jpg' },
      { index: 2, path: 'images/apk-pos.jpg' },
      { index: 3, path: 'images/datamex.jpg' },
      { index: 4, path: 'images/ramae-store.jpg' },
      { index: 5, path: 'images/student-system.jpg' }
    ]);
  }
})();
```

---

## API Reference

### `ProjectImageManager.setImage(projectIndex, imagePath)`
Set a single image for a project.
```javascript
ProjectImageManager.setImage(0, 'images/my-image.jpg');
```

### `ProjectImageManager.setImages(images)`
Set multiple images at once.
```javascript
ProjectImageManager.setImages([
  { index: 0, path: 'images/img1.jpg' },
  { index: 1, path: 'images/img2.jpg' }
]);
```

### `ProjectImageManager.getImage(projectIndex)`
Get the current image path for a project.
```javascript
const imagePath = ProjectImageManager.getImage(0);
console.log(imagePath); // Output: 'images/pos-project.jpg'
```

---

## Features

✅ **Responsive Images** - Automatically scale on all devices
✅ **Smooth Hover Effect** - 1.08x scale on hover
✅ **Gradient Overlay** - Professional gradient over images
✅ **Icon Fallback** - Shows original icon if no image set
✅ **Easy to Update** - Change images anytime with one line
✅ **Mobile Optimized** - Perfect display on phones, tablets, and desktops

---

## Mobile Responsiveness Improvements

### Carousel Buttons
- Desktop: Positioned at `left: 8px` / `right: 8px`
- Tablet (768px): `left: 6px` / `right: 6px`
- Mobile (480px): `left: 4px` / `right: 4px`
- Small mobile (360px): `left: 4px` / `right: 4px`

### Project Cards
- **Desktop**: 33.33% width (3 columns)
- **Tablet**: 50% width (2 columns)
- **Mobile**: 100% width (1 column)

### Text Sizing
All text automatically scales using `clamp()` for perfect readability across all screens.

---

## CSS Classes Available

If you want to manually add images without JavaScript:
```html
<div class="project-thumb">
  <img class="image" src="images/project.jpg" alt="Project">
  <div class="icon"><!-- Optional fallback icon --></div>
</div>
```

The `.image` class has:
- `object-fit: cover` - Images scale proportionally
- Smooth 0.5s scale transition on hover
- Automatic z-index layering

---

## Troubleshooting

### Images not showing?
1. Check file paths are correct
2. Open browser DevTools (F12) → Console
3. Run: `ProjectImageManager.getImage(0)` - verify path is set
4. Check image file exists in the correct folder

### Images look distorted?
- Use images that are roughly 600x400px or similar aspect ratio
- The `.image` class uses `object-fit: cover` which maintains aspect ratio

### Want to remove an image?
```javascript
ProjectImageManager.setImage(0, ''); // Empty string removes image
```

---

## Browser Compatibility
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Need Help?
The image manager is built into the page automatically. No installation needed!

Just copy your images to the `images/` folder and run the setup code above.
