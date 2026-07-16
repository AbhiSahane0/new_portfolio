"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "../ui/theme";

/**
 * Deep-space backdrop: a single DPR-aware canvas painting a parallax starfield
 * with slow drift, twinkle and occasional shooting stars — layered over CSS
 * aurora blobs and an animated grid. Theme-aware (bright "daylight" variant in
 * light mode), pauses on tab-hidden, and respects prefers-reduced-motion.
 */
export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const theme = useTheme();
  const light = theme === "light";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = {
      x: number;
      y: number;
      z: number;
      r: number;
      tw: number;
      tws: number;
      vx: number;
      vy: number;
      hue: number;
    };
    let stars: Star[] = [];

    type Shoot = {
      x: number;
      y: number;
      len: number;
      vx: number;
      vy: number;
      life: number;
      max: number;
    };
    let shoots: Shoot[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const build = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(1, (width * height) / (1920 * 1080));
      const count = Math.floor((light ? 180 : 300) * density) + 90;
      stars = Array.from({ length: count }, () => {
        const z = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          r: rand(0.5, 2.1) * (0.65 + z),
          tw: Math.random() * Math.PI * 2,
          tws: rand(0.004, 0.02),
          vx: rand(-0.05, 0.05) * (0.4 + z),
          vy: rand(0.02, 0.09) * (0.4 + z),
          hue:
            Math.random() < 0.14
              ? Math.random() < 0.5
                ? 190
                : 265
              : -1,
        };
      });
    };

    const spawnShoot = () => {
      if (reduced) return;
      const edgeY = rand(0, height * 0.5);
      const fromLeft = Math.random() < 0.5;
      const speed = rand(6, 11);
      shoots.push({
        x: fromLeft ? rand(-100, width * 0.3) : rand(width * 0.7, width + 100),
        y: edgeY,
        len: rand(120, 240),
        vx: fromLeft ? speed : -speed,
        vy: speed * rand(0.35, 0.6),
        life: 0,
        max: rand(45, 80),
      });
    };

    let raf = 0;
    let last = performance.now();
    let shootTimer = rand(1600, 4200);

    const draw = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;

      ctx.clearRect(0, 0, width, height);

      mouse.current.tx += (mouse.current.x - mouse.current.tx) * 0.05;
      mouse.current.ty += (mouse.current.y - mouse.current.ty) * 0.05;

      for (const s of stars) {
        if (!reduced) {
          s.x += s.vx * (dt / 16);
          s.y += s.vy * (dt / 16);
          s.tw += s.tws * (dt / 16);
          if (s.y > height + 4) {
            s.y = -4;
            s.x = Math.random() * width;
          }
          if (s.x > width + 4) s.x = -4;
          else if (s.x < -4) s.x = width + 4;
        }

        const px = mouse.current.tx * (s.z * 30);
        const py = mouse.current.ty * (s.z * 30);
        const twinkle = reduced ? 0.9 : 0.65 + Math.sin(s.tw) * 0.35;

        ctx.beginPath();
        ctx.arc(s.x + px, s.y + py, s.r, 0, Math.PI * 2);
        if (light) {
          // subtle slate motes on a bright backdrop
          if (s.hue === 190) ctx.fillStyle = `rgba(14,116,144,${twinkle * 0.4})`;
          else if (s.hue === 265)
            ctx.fillStyle = `rgba(109,40,217,${twinkle * 0.4})`;
          else ctx.fillStyle = `rgba(51,64,94,${twinkle * 0.32})`;
        } else {
          if (s.hue === 190) ctx.fillStyle = `rgba(125,233,250,${twinkle})`;
          else if (s.hue === 265)
            ctx.fillStyle = `rgba(203,190,255,${twinkle})`;
          else ctx.fillStyle = `rgba(255,255,255,${twinkle})`;
        }
        ctx.fill();

        if (!light && s.z > 0.7 && s.r > 1.5) {
          ctx.beginPath();
          ctx.arc(s.x + px, s.y + py, s.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(190,205,255,${twinkle * 0.14})`;
          ctx.fill();
        }
      }

      if (!reduced) {
        shootTimer -= dt;
        if (shootTimer <= 0) {
          spawnShoot();
          shootTimer = rand(2600, 6500);
        }
      }
      shoots = shoots.filter((sh) => sh.life < sh.max);
      for (const sh of shoots) {
        sh.life += dt / 16;
        sh.x += sh.vx * (dt / 16);
        sh.y += sh.vy * (dt / 16);
        const p = sh.life / sh.max;
        const alpha = Math.sin(p * Math.PI);
        const tailX = sh.x - (sh.vx / Math.hypot(sh.vx, sh.vy)) * sh.len;
        const tailY = sh.y - (sh.vy / Math.hypot(sh.vx, sh.vy)) * sh.len;
        const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
        const head = light ? "rgba(124,58,237," : "rgba(255,255,255,";
        const mid = light ? "rgba(34,211,238," : "rgba(147,197,253,";
        grad.addColorStop(0, `${head}${alpha})`);
        grad.addColorStop(0.4, `${mid}${alpha * 0.5})`);
        grad.addColorStop(1, `${mid}0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(sh.x, sh.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `${head}${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => build();
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        last = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };

    build();
    if (reduced) {
      draw(performance.now());
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [light]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: light
            ? "radial-gradient(ellipse 120% 85% at 50% -8%, #e5e8ff 0%, #edeefc 34%, #f4f2fc 68%, #eff1fb 100%)"
            : "radial-gradient(ellipse 120% 85% at 50% -5%, #271a63 0%, #150f3a 30%, #0a0820 58%, #05050e 82%)",
        }}
      />

      {/* aurora blobs */}
      <div
        className="absolute -top-52 left-1/2 h-[54rem] w-[54rem] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          opacity: light ? 0.5 : 0.7,
          background: light
            ? "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.35), transparent 62%)"
            : "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.7), transparent 62%)",
          animation: "auroraDrift 16s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/4 -left-32 h-[42rem] w-[42rem] rounded-full blur-[110px]"
        style={{
          opacity: light ? 0.45 : 0.55,
          background: light
            ? "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.34), transparent 62%)"
            : "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.55), transparent 62%)",
          animation: "auroraDrift 20s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute bottom-0 -right-32 h-[46rem] w-[46rem] rounded-full blur-[120px]"
        style={{
          opacity: light ? 0.45 : 0.55,
          background: light
            ? "radial-gradient(circle at 50% 50%, rgba(232,121,249,0.3), transparent 62%)"
            : "radial-gradient(circle at 50% 50%, rgba(232,121,249,0.5), transparent 62%)",
          animation: "auroraDrift 24s ease-in-out infinite",
        }}
      />

      {/* animated grid */}
      <div
        className="grid-bg absolute inset-0"
        style={{
          opacity: light ? 0.4 : 0.6,
          animation: "gridScroll 8s linear infinite",
        }}
      />

      {/* starfield */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* vignette + grain for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: light
            ? "radial-gradient(ellipse at center, transparent 68%, rgba(210,214,238,0.5) 100%)"
            : "radial-gradient(ellipse at center, transparent 62%, rgba(3,3,10,0.6) 100%)",
        }}
      />
      <div
        className="grain absolute inset-0 mix-blend-overlay"
        style={{ opacity: light ? 0.02 : 0.035 }}
      />
    </div>
  );
}
