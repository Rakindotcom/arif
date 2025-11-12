# Book Cover Images

Place book cover images in this folder with the following naming convention:

## File Names:
- `uttorshuri.jpg` - উত্তরসূরি
- `tara-jholmol.jpg` - তারা ঝলমল
- `kotipoti-sahabi.jpg` - কোটিপতি সাহাবি
- `char-tara.jpg` - চার তারা
- `oparete-shorboshukh.jpg` - ওপারেতে সর্বসুখ
- `prodipto-kutir.jpg` - প্রদীপ্ত কুটির
- `khopar-badhon.jpg` - খোঁপার বাঁধন
- `punyabati.jpg` - পুণ্যবতী
- `arguments-of-arju.jpg` - আর্গুমেন্টস অব আরজু

## Image Specifications:
- **Format**: JPG or PNG
- **Aspect Ratio**: 3:4 (portrait)
- **Recommended Size**: 600x800 pixels minimum
- **Max File Size**: 500KB for optimal loading

## How to Add:
1. Save your book cover image with the correct filename
2. Place it in this folder (`public/books/`)
3. The carousel will automatically display the image
4. If no image is found, a default book icon will be shown

## Example:
```
public/
  books/
    uttorshuri.jpg
    tara-jholmol.jpg
    kotipoti-sahabi.jpg
    ...
```

## Update Book Data:
After adding images, update the `cover` field in `src/data/books.js`:

```javascript
{
  id: 1,
  title: 'উত্তরসূরি',
  cover: '/books/uttorshuri.jpg',  // Add this line
  ...
}
```
