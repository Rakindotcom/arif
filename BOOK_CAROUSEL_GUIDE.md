# Book Carousel Implementation Guide

## ✅ What's Been Done

### 1. Created Book Carousel Component
- **File**: `src/components/BookCarousel.js`
- **Features**:
  - Auto-sliding carousel (4 seconds per slide)
  - Manual navigation with left/right arrows
  - Dot indicators for each slide
  - Click on dots to jump to specific slide
  - Pause auto-play when manually navigating
  - Smooth slide transitions
  - Responsive design (mobile & desktop)
  - Support for book cover images
  - Fallback to icon if no image

### 2. Updated Home Page
- **File**: `src/app/page.js`
- Added carousel showing featured books
- Removed "১০০টি বই" from the list
- Cleaner book grid layout (2x4 instead of 3x5)
- Imported `BookCarousel` and `getFeaturedBooks()`

### 3. Updated Books Page
- **File**: `src/app/books/page.js`
- Added carousel section before "All Books"
- Shows only featured books in carousel
- Imported `BookCarousel` component

### 4. Removed "১০০টি বই" Book
- **File**: `src/data/books.js`
- Removed book entry with id: 11
- Updated book list to 10 books

### 5. Created Image Folder
- **Folder**: `public/books/`
- Added README with instructions
- Ready for book cover images

## 🎨 Carousel Features

### Visual Design
- Gradient background (primary/secondary colors)
- Large book cover display area
- Book information on the side
- Rating stars with reviews
- Price display with discount
- "বিস্তারিত দেখুন" button
- Badge for bestsellers

### Navigation
- **Left/Right Arrows**: Navigate between books
- **Dot Indicators**: Show current position & jump to slide
- **Auto-play**: Automatically advances every 4 seconds
- **Pause on Interaction**: Stops auto-play when user clicks

### Responsive
- **Desktop**: Side-by-side layout (image + info)
- **Mobile**: Stacked layout (image on top, info below)
- **Touch-friendly**: Large buttons and indicators

## 📸 Adding Book Cover Images

### Step 1: Prepare Images
- Format: JPG or PNG
- Aspect ratio: 3:4 (portrait)
- Size: 600x800px minimum
- Max file size: 500KB

### Step 2: Save Images
Place images in `public/books/` with these names:
```
uttorshuri.jpg
tara-jholmol.jpg
kotipoti-sahabi.jpg
char-tara.jpg
oparete-shorboshukh.jpg
prodipto-kutir.jpg
khopar-badhon.jpg
punyabati.jpg
arguments-of-arju.jpg
```

### Step 3: Update Book Data
Edit `src/data/books.js` and add `cover` field:

```javascript
{
  id: 1,
  title: 'উত্তরসূরি',
  cover: '/books/uttorshuri.jpg',  // Add this
  // ... rest of the fields
}
```

### Example:
```javascript
{
  id: 1,
  title: 'উত্তরসূরি',
  titleEnglish: 'Uttorshuri',
  author: 'আরিফুল ইসলাম',
  cover: '/books/uttorshuri.jpg',  // ← Add this line
  publisher: 'ওয়াফি পাবলিকেশন',
  year: 2023,
  pages: 262,
  // ... rest
}
```

## 🔧 How It Works

### Home Page
1. Imports `getFeaturedBooks()` from data
2. Passes featured books to `BookCarousel`
3. Carousel displays books with `featured: true`
4. Auto-rotates through featured books

### Books Page
1. Filters books with `featured: true`
2. Shows them in carousel at top
3. All books displayed in grid below

### Carousel Component
1. Receives array of books as prop
2. Displays one book at a time
3. Transitions with CSS transform
4. Updates every 4 seconds (auto-play)
5. User can navigate manually

## 🎯 Featured Books

Currently featured books (shown in carousel):
1. উত্তরসূরি (Uttorshuri)
2. কোটিপতি সাহাবি (Kotipoti Sahabi)
3. ওপারেতে সর্বসুখ (Oparete Shorboshukh)
4. তারা ঝলমল (Tara Jholmol)

To add more featured books, edit `src/data/books.js`:
```javascript
{
  id: X,
  title: 'Book Title',
  featured: true,  // ← Set this to true
  // ... rest
}
```

## 📱 Mobile Responsive

### Desktop View
- Book cover on left (240px wide)
- Book info on right
- Horizontal layout
- Large text and buttons

### Mobile View
- Book cover on top (160px wide)
- Book info below
- Vertical layout
- Centered content
- Touch-friendly buttons

## 🎨 Customization

### Change Auto-play Speed
Edit `src/components/BookCarousel.js`:
```javascript
const interval = setInterval(() => {
  setCurrentIndex((prev) => (prev + 1) % books.length);
}, 4000);  // ← Change this (milliseconds)
```

### Change Transition Speed
Edit the transition duration:
```javascript
className="flex transition-transform duration-500 ease-out"
//                                      ↑ Change this
```

### Change Colors
The carousel uses Tailwind classes:
- `from-primary/10 to-secondary/10` - Background gradient
- `border-primary/20` - Border color
- `from-primary to-secondary` - Book cover gradient
- `bg-primary` - Button color

## 🚀 Testing

### Test Carousel
1. Go to homepage: `http://localhost:3000`
2. Scroll to "প্রকাশিত বই" section
3. Watch carousel auto-advance
4. Click left/right arrows
5. Click dot indicators
6. Check on mobile device

### Test with Images
1. Add a book cover image to `public/books/`
2. Update book data with `cover` field
3. Refresh page
4. Image should display in carousel

### Test without Images
- If no `cover` field, shows book icon
- Gradient background with book icon
- Still looks good without images

## 📊 Performance

- Images lazy-loaded with Next.js Image
- Smooth CSS transitions (no JavaScript animation)
- Minimal re-renders
- Auto-play pauses when user interacts
- Optimized for mobile

## 🔄 Future Enhancements

Possible additions:
1. Swipe gestures for mobile
2. Keyboard navigation (arrow keys)
3. Pause on hover
4. Progress bar for auto-play
5. Thumbnail preview
6. Zoom on image click
7. Share buttons
8. Add to cart functionality

## 📝 Summary

✅ Book carousel created with auto-sliding
✅ Featured books displayed beautifully
✅ Removed "১০০টি বই" from everywhere
✅ Responsive design for all devices
✅ Ready for book cover images
✅ Smooth animations and transitions
✅ User-friendly navigation
✅ Works on home and books pages
