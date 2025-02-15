import { useEffect } from 'react';
import './App.css'

function Blob() {
    useEffect(() => {
        const elts = {
            text1: document.getElementById('text1'),
            text2: document.getElementById('text2'),
        };

        const texts = ['Love is patient,', 'love is kind.', 'It does not envy,', 'it does not boast,', 'it is not proud.', 'It does not dishonor others,', 'it is not self-seeking,', 'it is not easily angered,', 'it keeps no record of wrongs.', 'Love does not delight in evil', 'but rejoices with the truth.', 'It always protects,', 'always trusts,', 'always hopes,', 'always perseveres.', 'Love never fails.'];

        const morphTime = 1.25;
        const cooldownTime = 0.5;

        let textIndex = texts.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;

        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];

        function doMorph() {
            morph -= cooldown;
            cooldown = 0;

            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        }

        function setMorph(fraction) {
            elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            fraction = 1 - fraction;
            elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            elts.text1.textContent = texts[textIndex % texts.length];
            elts.text2.textContent = texts[(textIndex + 1) % texts.length];
        }

        function doCooldown() {
            morph = 0;

            elts.text2.style.filter = '';
            elts.text2.style.opacity = '100%';

            elts.text1.style.filter = '';
            elts.text1.style.opacity = '0%';
        }

        function animate() {
            requestAnimationFrame(animate);

            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = (newTime - time) / 1000;
            time = newTime;

            cooldown -= dt;

            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }

                doMorph();
            } else {
                doCooldown();
            }
        }

        animate();
    }, []);

    return (
        <div id="container">
            <span id="text1"></span>
            <span id="text2"></span>
            <svg id="filters">
                <defs>
                    <filter id="threshold">
                        <feColorMatrix
                            in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

export default Blob;
