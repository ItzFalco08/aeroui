"use client";

import { useEffect, useRef, useCallback } from "react";

const variantClasses = {
  primary: "bg-zinc-800 text-white hover:bg-zinc-800/95 dark:bg-white dark:text-black dark:hover:bg-white/95",
  secondary: "bg-zinc-100 text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-900",
  ghost: "bg-transparent text-black hover:bg-zinc-100 dark:bg-transparent dark:text-white dark:hover:bg-zinc-900",
  outline:
    "bg-transparent border-2 border-zinc-200 text-black hover:bg-zinc-100 dark:bg-transparent dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800",
};

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-[8px] text-md",
  lg: "px-8 py-2 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}) {
  const buttonRef = useRef();
  const onClickRef = useRef(onClick);

  useEffect(() => {
    onClickRef.current = onClick;
  }, [onClick]);

  const getRippleColor = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    const colorMap = {
      primary: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
      secondary: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
      ghost: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
      outline: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
    };

    return colorMap[variant] || 'rgba(255, 255, 255, 0.2)';
  };

  const handleClick = useCallback((e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const rippleSize = Math.sqrt(rect.width ** 2 + rect.height ** 2) * 1.5;
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.width = `${rippleSize}px`;
    ripple.style.height = `${rippleSize}px`;
    ripple.style.background = getRippleColor();
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.transform = "translate(-50%, -50%) scale(0)";
    ripple.style.opacity = "1";
    ripple.style.transition = "transform 0.3s ease-out, opacity 0.5s ease-out";

    buttonRef.current.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.transform = "translate(-50%, -50%) scale(1)";
      ripple.style.opacity = "0";
    });

    setTimeout(() => {
      ripple.remove();
    }, 500);

    if (typeof onClickRef.current === "function") {
      onClickRef.current(e);
    }
  }, [variant]); // Added variant as dependency

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden rounded-lg ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}