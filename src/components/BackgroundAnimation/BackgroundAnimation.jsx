import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";

const BackgroundAnimation = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const { scrollYProgress } = useScroll();

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-primary">
            {/* Interactive Mouse Follower */}
            <motion.div
                className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Ambient Animated Blobs with Scroll Parallax */}
            <motion.div style={{ y: y1, rotate }} className="absolute top-0 left-0">
                <motion.div
                    animate={{
                        x: [0, 100, -100, 0],
                        y: [0, -100, 100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] opacity-50"
                />
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute top-1/2 right-0">
                <motion.div
                    animate={{
                        x: [0, -150, 150, 0],
                        y: [0, 150, -150, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[120px] opacity-50"
                />
            </motion.div>

            <motion.div style={{ y: y1 }} className="absolute bottom-0 left-1/4">
                <motion.div
                    animate={{
                        x: [0, 100, -100, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50"
                />
            </motion.div>

            {/* Optional: Grid or Noise Overlay for texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
};

export default BackgroundAnimation;
