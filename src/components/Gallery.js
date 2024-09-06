import React, { useState, useEffect, useRef } from 'react';
import styles from './gallery.module.css';
// import Gear from './Gear';

function Gallery() {
    function onHover(item, { offsetX, offsetY }) {
        const width = item.clientWidth;
        const height = item.clientHeight;
        const dx = offsetX - (width / 2);
        const dy = offsetY - (height / 2);
        
        item.style.transform = `rotateY(${-dx * 0.1}deg) rotateX(${dy * 0.1}deg)`;
    };

    useEffect(() => {
        const items = document.querySelectorAll(`.${styles.item}`);
        items.forEach(item => {
            item.addEventListener('mousemove', (e) => onHover(item, e));
            item.addEventListener('mouseleave', () => item.style.transform = 'rotateY(0deg) rotateX(0deg)');
        });
    });

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>Project</h1>
                <h1 className={styles.galleryTitle}>Gallery</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                    <h2>Example Item</h2>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
