import React from 'react';
import styles from './gallery.module.css';
import Gear from './Gear';

function Gallery() {
    return (
        <div className={styles.main}>
            <div className={styles.galleryTextContainer}>
                <div className={styles.headerAndGear}>
                    <div className={styles.galleryTextHeader}>Gallery</div>
                    <Gear />
                </div>
                <div className={styles.galleryTextBody}>
                    The project gallery is still currently under construction, but there are many exciting projects in the pipeline. Stay tuned for updates!
                </div>
            </div>
        </div>
    );
}

export default Gallery;
