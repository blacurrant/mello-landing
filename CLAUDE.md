# nishant.world — Portfolio

## Project
Not a portfolio. A world. You scroll through Nishant's realm like an RPG.
Dark → mysterious → colorful → triumphant. Frontend developer. World builder.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (scroll animations, parallax)
- React Three Fiber + drei (3D hero scene)
- shadcn/ui primitives

## Design System

### Colors
```
void:          #020205   background (near black)
void-text:     #CCDDEE   default text
accent:        #00D1FF   ice blue — primary glow
accent-warm:   #FF9500   amber — mid-scroll warmth
world-green:   #4AFF91   Workshop section
world-purple:  #BF5FFF   Gallery section
summit-gold:   #FFD700   Contact section
muted:         #1A1F2E
muted-text:    #888888
world-border:  #0D1117
```

### Fonts
- `font-heading` — EB Garamond (display, lore text)
- `font-mono`    — Space Mono (code, labels, UI)
- `font-sans`    — Inter (body)

### Motion
- Scroll = travel through a world
- `useScroll` + `useTransform` for parallax layers
- `whileInView` for section reveals
- Custom cursor: glowing ice blue orb

## World Map (sections)
```
[ THE VOID ]       Hero. R3F 3D scene. Dark. "NISHANT" emerges.
[ THE AWAKENING ]  About. Parallax landscape. Dark → color begins.
[ THE WORKSHOP ]   Skills. Amber warmth. Artifact clusters.
[ THE GALLERY ]    Work. Full color. Project portals.
[ THE SUMMIT ]     Contact. Gold. Bright. Victory.
```

## Structure
```
src/
  app/
    (landing)/
      layout.tsx       ← minimal navbar
      page.tsx         ← composes all sections
    layout.tsx
    globals.css
  components/
    cursor.tsx         ← glowing cursor orb
    marquee.tsx        ← infinite text strip
    parallax-layer.tsx ← scroll-driven depth wrapper
    navbar.tsx         ← ultra-minimal: "N." + contact
    sections/
      hero.tsx
      about.tsx
      skills.tsx
      work.tsx
      contact.tsx
    world/
      void-scene.tsx   ← R3F canvas (particles + geometry)
      landscape.tsx    ← SVG parallax terrain layers
      sprite.tsx       ← walking character
    ui/                ← shadcn primitives
  lib/
    utils.ts
public/
  sprite-walk.png      ← PLACEHOLDER: 4-frame walk spritesheet (64x64 each = 256x64)
                          Get from: https://itch.io (free RPG character sprites)
                          or generate at: https://sanderfrenken.github.io/Universal-LPC-Spritesheet-Character-Generator/
```

## Rules
- No commented-out code
- No placeholder copy left in prod
- Mobile-first responsive
- No unused dependencies
- Caveman keep code clean. no mess.
- cursor: none on everything (custom cursor handles it)
