import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

const BackgroundAnimation = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Varying sizes
                this.size = Math.random() * 10 + 2;
                this.speedX = (Math.random() - 0.5) * 1.5;
                this.speedY = (Math.random() - 0.5) * 1.5;

                let themeColors = [];
                let themeOpacityBase = 0.5;
                let themeShadowOpacity = 0.5;

                switch (theme) {
                    case 'elegant-light':
                        themeColors = ['124, 58, 237', '37, 99, 235', '219, 39, 119', '13, 148, 136', '234, 88, 12'];
                        themeOpacityBase = 0.6;
                        themeShadowOpacity = 0.4;
                        break;
                    case 'glass-morphism':
                        themeColors = ['255, 255, 255', '56, 189, 248', '168, 85, 247']; // White, Sky, Purple
                        themeOpacityBase = 0.3; // Subtle
                        themeShadowOpacity = 0.2;
                        break;
                    case 'pastel-pro':
                        themeColors = ['251, 113, 133', '244, 114, 182', '192, 132, 252', '96, 165, 250']; // Pastel tones
                        themeOpacityBase = 0.6;
                        themeShadowOpacity = 0.3;
                        break;
                    case 'cyber-midnight':
                        themeColors = ['0, 255, 157', '34, 211, 238', '232, 121, 249', '250, 204, 21']; // Neon
                        themeOpacityBase = 0.8;
                        themeShadowOpacity = 1.0;
                        break;
                    case 'deep-dark':
                    default:
                        themeColors = ['147, 51, 234', '59, 130, 246', '236, 72, 153', '52, 211, 153'];
                        themeOpacityBase = 0.75; // Increased for better visibility
                        themeShadowOpacity = 0.9;
                        break;
                }

                this.opacity = themeOpacityBase + Math.random() * 0.3;

                const randomColor = themeColors[Math.floor(Math.random() * themeColors.length)];
                this.color = `rgba(${randomColor}, ${this.opacity})`;
                this.shadowColor = `rgba(${randomColor}, ${themeShadowOpacity})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                // Extra glow for cyber theme
                ctx.shadowBlur = theme === 'cyber-midnight' ? 20 : 10;
                ctx.shadowColor = this.shadowColor;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden transition-colors duration-500 bg-[var(--primary-bg)]">
            {/* Overlay adjustments based on theme */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'deep-dark' ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90' :
                theme === 'cyber-midnight' ? 'bg-[#050510] opacity-80' :
                    'bg-transparent opacity-0'
                }`}></div>
            <canvas
                ref={canvasRef}
                className="block w-full h-full relative z-10"
            />
        </div>
    );
};

export default BackgroundAnimation;
