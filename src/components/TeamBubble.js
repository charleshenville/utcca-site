import React, { useState, useEffect, useRef } from 'react';
import styles from './home.module.css';

const TeamBubble = (props) => {

    // const [start, setStart] = useState(props.start);
    // const [end, setEnd] = useState(props.end);

    const userAgent = navigator.userAgent;
    const chromiumBrowsers = ['Chrome', 'Chromium', 'Edge', 'Opera', 'Brave', 'Arc'];

    const isChromium = chromiumBrowsers.some(browser => userAgent.includes(browser));
    const isFirefox = userAgent.includes('Firefox');
    const isSafari = userAgent.includes('Safari') && !userAgent.includes('Chrome');

    const start = props.start;
    const end = props.end;
    const suf = props.suf;
    const isLeft = props.isLeft;

    let hash = 0;
    for (let i = 0; i < suf.length; i++) {
        hash = (hash << 5) - hash + suf.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }

    const seed = Math.abs(hash);
    const num1 = 1.5 + seed / 10000;
    const num2 = 5 * (num1 - 11.3533);

    // console.log(num1, num2);

    const bubbleClass = suf == "ban" ? styles.teambubble : (isLeft ? styles.teambubbleL : styles.teambubbleR);
    const svgRef = useRef(null);
    const firstRef = useRef(true);

    useEffect(() => {

        const svg = svgRef.current;
        const paths = svg.querySelectorAll(`.${styles.circleIdentify.split(' ')[0]}`);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting || firstRef.current) {
                    let touch = false;
                    if (firstRef.current) {
                        touch = true;
                    }
                    firstRef.current = false;
                    const observerInterval = setInterval(() => {

                        const now = performance.now() / 1000
                        const xparam = 1.9 * Math.sin(now)
                        const yparam = 2.1 * Math.cos(now / num1)
                        let dfs = 0;
                        paths.forEach((path) => {

                            dfs = Math.sqrt((parseInt(path.getAttribute('cx')) - 63) ** 2 + (parseInt(path.getAttribute('cy')) - 63) ** 2);
                            if (dfs <= 63) {
                                path.setAttribute('r', (((xparam + yparam) * Math.cos(dfs / num2))) / 1.8 + 3.0);
                            } else {
                                path.setAttribute('r', 0);
                            }

                        });
                    }, 100);

                    return () => {
                        clearInterval(observerInterval); // Clear the interval when the observer is disconnected
                    };

                }
            });
        });

        observer.observe(svg);

        return () => {
            observer.unobserve(svg);
        };
    }, [svgRef]);

    return (
        <svg ref={svgRef} className={bubbleClass} viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* <g filter="url(#filter0_f_262_332)"> */}
            <g>
                <circle className={styles.circleIdentify} cx="3" cy="3" r="2" fill={"url(#paint0_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="3" r="2" fill={"url(#paint1_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="11" r="2" fill={"url(#paint2_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="3" r="2" fill={"url(#paint3_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="3" r="2" fill={"url(#paint4_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="19" r="2" fill={"url(#paint5_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="27" r="2" fill={"url(#paint6_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="3" r="2" fill={"url(#paint7_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="3" r="2" fill={"url(#paint8_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="3" r="2" fill={"url(#paint9_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="3" r="2" fill={"url(#paint10_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="35" r="2" fill={"url(#paint11_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="43" r="2" fill={"url(#paint12_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="51" r="2" fill={"url(#paint13_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="59" r="2" fill={"url(#paint14_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="3" r="2" fill={"url(#paint15_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="3" r="2" fill={"url(#paint16_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="3" r="2" fill={"url(#paint17_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="3" r="2" fill={"url(#paint18_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="3" r="2" fill={"url(#paint19_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="3" r="2" fill={"url(#paint20_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="3" r="2" fill={"url(#paint21_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="3" r="2" fill={"url(#paint22_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="11" r="2" fill={"url(#paint23_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="19" r="2" fill={"url(#paint24_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="27" r="2" fill={"url(#paint25_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="35" r="2" fill={"url(#paint26_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="43" r="2" fill={"url(#paint27_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="51" r="2" fill={"url(#paint28_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="59" r="2" fill={"url(#paint29_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="67" r="2" fill={"url(#paint30_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="75" r="2" fill={"url(#paint31_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="83" r="2" fill={"url(#paint32_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="91" r="2" fill={"url(#paint33_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="99" r="2" fill={"url(#paint34_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="107" r="2" fill={"url(#paint35_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="115" r="2" fill={"url(#paint36_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="3" cy="123" r="2" fill={"url(#paint37_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="123" r="2" fill={"url(#paint38_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="123" r="2" fill={"url(#paint39_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="123" r="2" fill={"url(#paint40_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="123" r="2" fill={"url(#paint41_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="123" r="2" fill={"url(#paint42_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="123" r="2" fill={"url(#paint43_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="123" r="2" fill={"url(#paint44_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="67" r="2" fill={"url(#paint45_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="75" r="2" fill={"url(#paint46_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="83" r="2" fill={"url(#paint47_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="91" r="2" fill={"url(#paint48_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="123" r="2" fill={"url(#paint49_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="123" r="2" fill={"url(#paint50_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="123" r="2" fill={"url(#paint51_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="123" r="2" fill={"url(#paint52_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="99" r="2" fill={"url(#paint53_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="107" r="2" fill={"url(#paint54_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="123" r="2" fill={"url(#paint55_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="123" r="2" fill={"url(#paint56_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="11" r="2" fill={"url(#paint57_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="11" r="2" fill={"url(#paint58_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="11" r="2" fill={"url(#paint59_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="19" r="2" fill={"url(#paint60_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="27" r="2" fill={"url(#paint61_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="19" r="2" fill={"url(#paint62_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="19" r="2" fill={"url(#paint63_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="27" r="2" fill={"url(#paint64_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="27" r="2" fill={"url(#paint65_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="11" r="2" fill={"url(#paint66_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="11" r="2" fill={"url(#paint67_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="11" r="2" fill={"url(#paint68_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="11" r="2" fill={"url(#paint69_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="19" r="2" fill={"url(#paint70_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="19" r="2" fill={"url(#paint71_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="27" r="2" fill={"url(#paint72_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="27" r="2" fill={"url(#paint73_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="19" r="2" fill={"url(#paint74_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="19" r="2" fill={"url(#paint75_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="27" r="2" fill={"url(#paint76_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="27" r="2" fill={"url(#paint77_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="35" r="2" fill={"url(#paint78_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="43" r="2" fill={"url(#paint79_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="35" r="2" fill={"url(#paint80_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="35" r="2" fill={"url(#paint81_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="43" r="2" fill={"url(#paint82_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="43" r="2" fill={"url(#paint83_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="51" r="2" fill={"url(#paint84_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="59" r="2" fill={"url(#paint85_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="51" r="2" fill={"url(#paint86_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="51" r="2" fill={"url(#paint87_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="59" r="2" fill={"url(#paint88_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="59" r="2" fill={"url(#paint89_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="35" r="2" fill={"url(#paint90_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="35" r="2" fill={"url(#paint91_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="43" r="2" fill={"url(#paint92_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="43" r="2" fill={"url(#paint93_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="35" r="2" fill={"url(#paint94_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="35" r="2" fill={"url(#paint95_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="43" r="2" fill={"url(#paint96_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="43" r="2" fill={"url(#paint97_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="51" r="2" fill={"url(#paint98_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="51" r="2" fill={"url(#paint99_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="59" r="2" fill={"url(#paint100_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="59" r="2" fill={"url(#paint101_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="51" r="2" fill={"url(#paint102_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="51" r="2" fill={"url(#paint103_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="59" r="2" fill={"url(#paint104_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="59" r="2" fill={"url(#paint105_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="11" r="2" fill={"url(#paint106_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="11" r="2" fill={"url(#paint107_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="11" r="2" fill={"url(#paint108_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="11" r="2" fill={"url(#paint109_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="19" r="2" fill={"url(#paint110_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="19" r="2" fill={"url(#paint111_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="27" r="2" fill={"url(#paint112_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="27" r="2" fill={"url(#paint113_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="19" r="2" fill={"url(#paint114_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="19" r="2" fill={"url(#paint115_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="27" r="2" fill={"url(#paint116_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="27" r="2" fill={"url(#paint117_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="11" r="2" fill={"url(#paint118_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="11" r="2" fill={"url(#paint119_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="11" r="2" fill={"url(#paint120_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="19" r="2" fill={"url(#paint121_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="19" r="2" fill={"url(#paint122_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="27" r="2" fill={"url(#paint123_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="27" r="2" fill={"url(#paint124_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="19" r="2" fill={"url(#paint125_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="27" r="2" fill={"url(#paint126_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="35" r="2" fill={"url(#paint127_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="35" r="2" fill={"url(#paint128_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="43" r="2" fill={"url(#paint129_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="43" r="2" fill={"url(#paint130_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="35" r="2" fill={"url(#paint131_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="35" r="2" fill={"url(#paint132_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="43" r="2" fill={"url(#paint133_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="43" r="2" fill={"url(#paint134_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="51" r="2" fill={"url(#paint135_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="51" r="2" fill={"url(#paint136_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="59" r="2" fill={"url(#paint137_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="59" r="2" fill={"url(#paint138_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="51" r="2" fill={"url(#paint139_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="51" r="2" fill={"url(#paint140_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="59" r="2" fill={"url(#paint141_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="59" r="2" fill={"url(#paint142_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="35" r="2" fill={"url(#paint143_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="35" r="2" fill={"url(#paint144_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="43" r="2" fill={"url(#paint145_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="43" r="2" fill={"url(#paint146_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="35" r="2" fill={"url(#paint147_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="43" r="2" fill={"url(#paint148_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="51" r="2" fill={"url(#paint149_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="51" r="2" fill={"url(#paint150_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="59" r="2" fill={"url(#paint151_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="59" r="2" fill={"url(#paint152_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="51" r="2" fill={"url(#paint153_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="59" r="2" fill={"url(#paint154_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="67" r="2" fill={"url(#paint155_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="75" r="2" fill={"url(#paint156_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="67" r="2" fill={"url(#paint157_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="67" r="2" fill={"url(#paint158_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="75" r="2" fill={"url(#paint159_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="75" r="2" fill={"url(#paint160_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="83" r="2" fill={"url(#paint161_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="91" r="2" fill={"url(#paint162_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="83" r="2" fill={"url(#paint163_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="83" r="2" fill={"url(#paint164_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="91" r="2" fill={"url(#paint165_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="91" r="2" fill={"url(#paint166_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="67" r="2" fill={"url(#paint167_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="67" r="2" fill={"url(#paint168_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="75" r="2" fill={"url(#paint169_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="75" r="2" fill={"url(#paint170_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="67" r="2" fill={"url(#paint171_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="67" r="2" fill={"url(#paint172_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="75" r="2" fill={"url(#paint173_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="75" r="2" fill={"url(#paint174_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="83" r="2" fill={"url(#paint175_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="83" r="2" fill={"url(#paint176_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="91" r="2" fill={"url(#paint177_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="91" r="2" fill={"url(#paint178_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="83" r="2" fill={"url(#paint179_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="83" r="2" fill={"url(#paint180_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="91" r="2" fill={"url(#paint181_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="91" r="2" fill={"url(#paint182_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="99" r="2" fill={"url(#paint183_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="107" r="2" fill={"url(#paint184_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="99" r="2" fill={"url(#paint185_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="99" r="2" fill={"url(#paint186_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="107" r="2" fill={"url(#paint187_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="107" r="2" fill={"url(#paint188_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="11" cy="115" r="2" fill={"url(#paint189_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="19" cy="115" r="2" fill={"url(#paint190_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="27" cy="115" r="2" fill={"url(#paint191_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="99" r="2" fill={"url(#paint192_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="99" r="2" fill={"url(#paint193_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="107" r="2" fill={"url(#paint194_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="107" r="2" fill={"url(#paint195_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="99" r="2" fill={"url(#paint196_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="99" r="2" fill={"url(#paint197_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="107" r="2" fill={"url(#paint198_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="107" r="2" fill={"url(#paint199_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="35" cy="115" r="2" fill={"url(#paint200_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="43" cy="115" r="2" fill={"url(#paint201_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="51" cy="115" r="2" fill={"url(#paint202_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="59" cy="115" r="2" fill={"url(#paint203_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="67" r="2" fill={"url(#paint204_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="67" r="2" fill={"url(#paint205_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="75" r="2" fill={"url(#paint206_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="75" r="2" fill={"url(#paint207_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="67" r="2" fill={"url(#paint208_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="67" r="2" fill={"url(#paint209_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="75" r="2" fill={"url(#paint210_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="75" r="2" fill={"url(#paint211_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="83" r="2" fill={"url(#paint212_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="83" r="2" fill={"url(#paint213_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="91" r="2" fill={"url(#paint214_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="91" r="2" fill={"url(#paint215_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="83" r="2" fill={"url(#paint216_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="83" r="2" fill={"url(#paint217_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="91" r="2" fill={"url(#paint218_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="91" r="2" fill={"url(#paint219_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="67" r="2" fill={"url(#paint220_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="67" r="2" fill={"url(#paint221_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="75" r="2" fill={"url(#paint222_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="75" r="2" fill={"url(#paint223_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="67" r="2" fill={"url(#paint224_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="75" r="2" fill={"url(#paint225_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="83" r="2" fill={"url(#paint226_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="83" r="2" fill={"url(#paint227_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="91" r="2" fill={"url(#paint228_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="91" r="2" fill={"url(#paint229_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="83" r="2" fill={"url(#paint230_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="91" r="2" fill={"url(#paint231_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="99" r="2" fill={"url(#paint232_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="99" r="2" fill={"url(#paint233_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="107" r="2" fill={"url(#paint234_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="107" r="2" fill={"url(#paint235_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="99" r="2" fill={"url(#paint236_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="99" r="2" fill={"url(#paint237_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="107" r="2" fill={"url(#paint238_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="107" r="2" fill={"url(#paint239_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="67" cy="115" r="2" fill={"url(#paint240_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="75" cy="115" r="2" fill={"url(#paint241_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="83" cy="115" r="2" fill={"url(#paint242_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="91" cy="115" r="2" fill={"url(#paint243_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="99" r="2" fill={"url(#paint244_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="99" r="2" fill={"url(#paint245_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="107" r="2" fill={"url(#paint246_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="107" r="2" fill={"url(#paint247_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="99" r="2" fill={"url(#paint248_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="107" r="2" fill={"url(#paint249_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="99" cy="115" r="2" fill={"url(#paint250_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="107" cy="115" r="2" fill={"url(#paint251_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="115" r="2" fill={"url(#paint252_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="115" r="2" fill={"url(#paint253_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="115" cy="123" r="2" fill={"url(#paint254_radial_262_335" + suf + ")"} />
                <circle className={styles.circleIdentify} cx="123" cy="123" r="2" fill={"url(#paint255_radial_262_335" + suf + ")"} />
            </g>
            <defs>
                <filter id="filter0_f_262_332" x="0" y="0" width="126" height="126" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur_262_332" />
                </filter>
                <radialGradient id={"paint0_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint1_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint2_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint3_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint4_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint5_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint6_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint7_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint8_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint9_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint10_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint11_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint12_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint13_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint14_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint15_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint16_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint17_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint18_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint19_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint20_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint21_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint22_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint23_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint24_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint25_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint26_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint27_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint28_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint29_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint30_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint31_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint32_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint33_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint34_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint35_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint36_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint37_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint38_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint39_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint40_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint41_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint42_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint43_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint44_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint45_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint46_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint47_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint48_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint49_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint50_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint51_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint52_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint53_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint54_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint55_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint56_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint57_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint58_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint59_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint60_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint61_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint62_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint63_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint64_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint65_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint66_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint67_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint68_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint69_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint70_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint71_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint72_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint73_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint74_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint75_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint76_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint77_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint78_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint79_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint80_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint81_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint82_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint83_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint84_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint85_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint86_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint87_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint88_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint89_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint90_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint91_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint92_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint93_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint94_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint95_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint96_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint97_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint98_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint99_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint100_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint101_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint102_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint103_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint104_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint105_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint106_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint107_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint108_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint109_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint110_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint111_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint112_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint113_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint114_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint115_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint116_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint117_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint118_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint119_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint120_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint121_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint122_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint123_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint124_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint125_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint126_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint127_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint128_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint129_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint130_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint131_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint132_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint133_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint134_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint135_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint136_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint137_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint138_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint139_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint140_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint141_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint142_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint143_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint144_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint145_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint146_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint147_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint148_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint149_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint150_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint151_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint152_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint153_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint154_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint155_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint156_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint157_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint158_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint159_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint160_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint161_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint162_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint163_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint164_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint165_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint166_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint167_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint168_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint169_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint170_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint171_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint172_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint173_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint174_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint175_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint176_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint177_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint178_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint179_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint180_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint181_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint182_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint183_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint184_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint185_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint186_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint187_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint188_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint189_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint190_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint191_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint192_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint193_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint194_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint195_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint196_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint197_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint198_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint199_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint200_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint201_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint202_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint203_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint204_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint205_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint206_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint207_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint208_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint209_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint210_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint211_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint212_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint213_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint214_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint215_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint216_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint217_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint218_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint219_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint220_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint221_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint222_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint223_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint224_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint225_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint226_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint227_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint228_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint229_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint230_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint231_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint232_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint233_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint234_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint235_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint236_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint237_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint238_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint239_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint240_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint241_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint242_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint243_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint244_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint245_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint246_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint247_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint248_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint249_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint250_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint251_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint252_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint253_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint254_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
                <radialGradient id={"paint255_radial_262_335" + suf} cx="0" cy="0" r="0.99" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(62)">
                    <stop stop-color={start} />
                    <stop offset="0.98999" stop-color={end} />
                    <stop offset="0.99" stop-color="var(--bkg)"  />
                </radialGradient>
            </defs>
        </svg>
    );
}

export default TeamBubble;