// ============================================
// COPY THIS CODE TO SET UP PROJECT IMAGES
// ============================================

// Option 1: Quick Setup (Uncomment and modify paths)
/*
ProjectImageManager.setImages([
  { index: 0, path: 'images/pos-project.jpg' },
  { index: 1, path: 'images/game-project.jpg' },
  { index: 2, path: 'images/apk-pos.jpg' },
  { index: 3, path: 'images/datamex.jpg' },
  { index: 4, path: 'images/ramae-store.jpg' },
  { index: 5, path: 'images/student-system.jpg' }
]);
*/

// Option 2: Permanent Setup (Add this to index.html before closing </body> tag)
/*
<script>
  // Initialize project images on page load
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      ProjectImageManager.setImages([
        { index: 0, path: 'images/pos-project.jpg' },
        { index: 1, path: 'images/game-project.jpg' },
        { index: 2, path: 'images/apk-pos.jpg' },
        { index: 3, path: 'images/datamex.jpg' },
        { index: 4, path: 'images/ramae-store.jpg' },
        { index: 5, path: 'images/student-system.jpg' }
      ]);
    }, 500);
  });
</script>
*/

// Option 3: One by One Setup
/*
ProjectImageManager.setImage(0, 'images/pos-project.jpg');
ProjectImageManager.setImage(1, 'images/game-project.jpg');
ProjectImageManager.setImage(2, 'images/apk-pos.jpg');
ProjectImageManager.setImage(3, 'images/datamex.jpg');
ProjectImageManager.setImage(4, 'images/ramae-store.jpg');
ProjectImageManager.setImage(5, 'images/student-system.jpg');
*/

// ============================================
// HOW TO USE IN BROWSER CONSOLE
// ============================================
// 1. Open your portfolio in browser
// 2. Press F12 to open DevTools
// 3. Go to Console tab
// 4. Paste and run any option above (uncomment first)
// 5. Your images will appear in the carousel!

// ============================================
// PROJECT INDEX REFERENCE
// ============================================
// Index 0: POS System
// Index 1: Website Game Project
// Index 2: APK POS Application
// Index 3: Frontend School Project
// Index 4: E-commerce Website
// Index 5: Student Info System

// ============================================
// HELPFUL FUNCTIONS
// ============================================

// Check if image is set for a project:
// console.log(ProjectImageManager.getImage(0));

// Remove an image (replace with icon):
// ProjectImageManager.setImage(0, '');

// Update just one project's image:
// ProjectImageManager.setImage(2, 'images/new-image.jpg');
