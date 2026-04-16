"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { logo } from "@/assets/png";
import styles from "./style.module.css";

const MIN_VISIBLE_MS = 500;

const waitForNextPaint = () =>
  new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });

const waitForWindowLoad = () =>
  new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }

    const onLoad = () => {
      window.removeEventListener("load", onLoad);
      resolve();
    };

    window.addEventListener("load", onLoad);
  });

export default function FirstPaintLoader() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    let mounted = true;
    const startedAt = performance.now();

    const hideLoader = async () => {
      await waitForWindowLoad();
      await waitForNextPaint();

      const elapsed = performance.now() - startedAt;
      if (elapsed < MIN_VISIBLE_MS) {
        await new Promise((resolve) =>
          setTimeout(resolve, MIN_VISIBLE_MS - elapsed),
        );
      }

      if (!mounted) {
        return;
      }

      setClosing(true);
      setTimeout(() => {
        if (mounted) {
          setVisible(false);
        }
      }, 300);
    };

    hideLoader();

    return () => {
      mounted = false;
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`${styles.overlay} ${closing ? styles.fadeOut : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <Image
        src="/assets/gif/Yayz-Logo-Animated.gif"
        alt="Animated Logo"
        width={244} 
        height={100}
        className={styles.logo}
        priority
        unoptimized
      />
    </div>
  );
}
