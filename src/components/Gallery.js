import React, { useState, useEffect, useRef } from 'react';
import styles from './gallery.module.css';
// import Gear from './Gear';

function Gallery() {
    let [modalVisible, setModalVisible] = useState(false);

    function onHover(item, { offsetX, offsetY }) {
        const width = item.clientWidth;
        const height = item.clientHeight;
        const dx = offsetX - (width / 2);
        const dy = offsetY - (height / 2);
        
        item.style.transform = `rotateY(${-dx * 0.1}deg) rotateX(${dy * 0.1}deg)`;
    };

    function closeModal() {
        if (!modalVisible) return;
        const main = document.querySelector(`.${styles.main}`);
        const modal = document.querySelector(`.${styles.modal}`);
        modal.classList.remove(styles.visible);
        main.style.filter = 'none';
        main.style.pointerEvents = 'auto';
        setModalVisible(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            const modal = document.querySelector(`.${styles.modal}`);
            if (modalVisible && !modal.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [modalVisible]);

    function onItemClicked() {
        const main = document.querySelector(`.${styles.main}`);
        const modal = document.querySelector(`.${styles.modal}`);
        modal.classList.toggle(styles.visible);

        if (modalVisible) {
            main.style.filter = 'none';
            main.style.pointerEvents = 'auto';
        } else {
            main.style.filter = 'blur(5px)';
            main.style.pointerEvents = 'none';
        }

        setTimeout(() => {
            setModalVisible((prev) => !prev);
        }, 10);
    }

    useEffect(() => {
        const items = document.querySelectorAll(`.${styles.item}`);
        items.forEach(item => {
            item.addEventListener('mousemove', (e) => onHover(item, e));
            item.addEventListener('mouseleave', () => item.style.transform = 'rotateY(0deg) rotateX(0deg)');
            item.addEventListener('click', onItemClicked);
        });
    }, []);

    return (
        <>
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
                <div className={styles.item}>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                    <h2>Example Item</h2>
                </div>
                <div className={styles.item}>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                    <h2>Example Item</h2>
                </div>
            </div>
        </div>
        <div className={styles.modal}>
            <h3>Example Project</h3>
            <p>Example description, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.</p>
            <div className={styles.modalImages}>
                <img src='https://via.placeholder.com/150' alt='placeholder' />
                <img src='https://via.placeholder.com/150' alt='placeholder' />
                <img src='https://via.placeholder.com/150' alt='placeholder' />
                <img src='https://via.placeholder.com/150' alt='placeholder' />
                <img src='https://via.placeholder.com/150' alt='placeholder' />
                <img src='https://via.placeholder.com/150' alt='placeholder' />
            </div>
        </div>
    </>
    );
}

export default Gallery;
