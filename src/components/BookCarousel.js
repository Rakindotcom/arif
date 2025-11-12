'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BookCarousel({ books }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, books.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {books.map((book, index) => (
            <div key={index} className="min-w-full">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 md:p-8 border-2 border-primary/20">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {/* Book Cover */}
                  <div className="w-48 h-64 md:w-56 md:h-80 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 shadow-2xl relative overflow-hidden">
                    {book.cover ? (
                      <Image 
                        src={book.cover} 
                        alt={book.title}
                        width={224}
                        height={320}
                        className="object-cover w-full h-full"
                        priority
                      />
                    ) : (
                      <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                      </svg>
                    )}
                  </div>

                  {/* Book Info */}
                  <div className="flex-1 text-center md:text-left">
                    {book.featured && (
                      <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold mb-3">
                        বেস্টসেলার
                      </div>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{book.title}</h3>
                    {book.titleEnglish && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{book.titleEnglish}</p>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                      {book.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center mb-4">
                      {book.rating && (
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          <span className="font-bold">{book.rating}/৫</span>
                          {book.reviews && (
                            <span className="text-sm text-gray-500">({book.reviews} রিভিউ)</span>
                          )}
                        </div>
                      )}
                      {book.pages && (
                        <span className="text-sm text-gray-600 dark:text-gray-400">{book.pages} পৃষ্ঠা</span>
                      )}
                      {book.year && (
                        <span className="text-sm text-gray-600 dark:text-gray-400">{book.year}</span>
                      )}
                    </div>

                    {book.price && (
                      <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                        <span className="text-2xl font-bold text-primary">{book.price}৳</span>
                        {book.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{book.originalPrice}৳</span>
                        )}
                      </div>
                    )}

                    <Link 
                      href="/books" 
                      className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg"
                    >
                      বিস্তারিত দেখুন
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {books.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
