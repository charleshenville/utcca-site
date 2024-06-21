import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './gallery.module.css';

function Gallery() {
    return (
        <div className={styles.main}>
        {/* about section */}
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeader}>Gallery</div>
            <div className={styles.aboutBody}>
                The project gallery is still currently under construction, but there are many exciting projects in the pipeline. Stay tuned for updates!
            </div>
            
        </div>

    </div>
            

    );
}

export default Gallery;
