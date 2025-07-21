"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    // Load wishlist from localStorage on component mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedWishlist = localStorage.getItem('carWishlist');
            if (savedWishlist) {
                setWishlist(JSON.parse(savedWishlist));
            }
        }
    }, []);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('carWishlist', JSON.stringify(wishlist));
        }
    }, [wishlist]);

    const toggleWishlist = (carId) => {
        setWishlist(prev => {
            if (prev.includes(carId)) {
                // Remove from wishlist
                return prev.filter(id => id !== carId);
            } else {
                // Add to wishlist
                return [...prev, carId];
            }
        });
    };

    const isInWishlist = (carId) => {
        return wishlist.includes(carId);
    };

    const getWishlistCount = () => {
        return wishlist.length;
    };

    return (
        <WishlistContext.Provider value={{
            wishlist,
            toggleWishlist,
            isInWishlist,
            getWishlistCount
        }}>
            {children}
        </WishlistContext.Provider>
    );
};