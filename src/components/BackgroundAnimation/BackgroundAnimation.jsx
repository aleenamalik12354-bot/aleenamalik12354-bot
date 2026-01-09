import React, { useEffect, useRef } from "react";

const BackgroundAnimation = () => {
    const canvasRef = useRef(null);

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
                this.size = Math.random() * 2 + 0.5; // Small glowing stars
                this.speedX = (Math.random() - 0.5) * 0.5; // Slow float horizontal
                this.speedY = (Math.random() - 0.5) * 0.5; // Slow float vertical
                this.opacity = Math.random() * 0.5 + 0.3; // Varying opacity
                this.color = `rgba(147, 51, 234, ${this.opacity})`; // Purple/Violet tint based on portfolio theme
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 8; // Glow effect
                ctx.shadowColor = "rgba(147, 51, 234, 0.8)";
                ctx.fill();
                ctx.shadowBlur = 0; // Reset for performance
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000); // Responsive particle count
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen

            // Draw deep space background
            // We use the CSS background usually, but here we just draw particles over it.
            // If we need a specific background color, we can set it in CSS.

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Connect particles with thin lines if they are close (Optional Constellation Effect)
            // Kept commented out to match "freely floating" request, can be enabled if desired.
            /*
            particles.forEach((a, index) => {
                particles.slice(index + 1).forEach(b => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance/100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });
            });
            */

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0a]">
            {/* Subtle Gradient Backdrop for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90"></div>
            <canvas
                ref={canvasRef}
                className="block w-full h-full relative z-10"
            />

        </div>
    );
};

export default BackgroundAnimation;
