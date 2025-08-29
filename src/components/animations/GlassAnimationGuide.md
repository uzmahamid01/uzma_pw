# Glass Animation System Guide

This portfolio uses a sophisticated glass morphism animation system that triggers as sections scroll into view. Here's how to use it:

## Available Glass Animations

### 1. GlassFadeUp
Smooth glass-like fade from bottom with blur effects.
```jsx
import { GlassFadeUp } from './animations/GlassAnimations';

<GlassFadeUp delay={0.2} duration={1} threshold={0.15}>
  <div>Your content here</div>
</GlassFadeUp>
```

### 2. GlassScale
Glass morphing scale effect with brightness and blur.
```jsx
import { GlassScale } from './animations/GlassAnimations';

<GlassScale delay={0.3} duration={1.2}>
  <div>Content with glass scale effect</div>
</GlassScale>
```

### 3. GlassSlideLeft / GlassSlideRight
Slide in from sides with glass blur effects.
```jsx
import { GlassSlideLeft, GlassSlideRight } from './animations/GlassAnimations';

<GlassSlideLeft delay={0.2}>
  <div>Slides from left</div>
</GlassSlideLeft>

<GlassSlideRight delay={0.1}>
  <div>Slides from right</div>
</GlassSlideRight>
```

### 4. GlassReveal
Premium glass reveal with brightness and saturation effects.
```jsx
import { GlassReveal } from './animations/GlassAnimations';

<GlassReveal delay={0.4} duration={1.8}>
  <div>Premium glass reveal</div>
</GlassReveal>
```

### 5. GlassStagger & GlassStaggerItem
Staggered animations for multiple elements.
```jsx
import { GlassStagger, GlassStaggerItem } from './animations/GlassAnimations';

<GlassStagger delay={0.3} staggerDelay={0.2}>
  <GlassStaggerItem><div>Item 1</div></GlassStaggerItem>
  <GlassStaggerItem><div>Item 2</div></GlassStaggerItem>
  <GlassStaggerItem><div>Item 3</div></GlassStaggerItem>
</GlassStagger>
```

## Props

All glass animation components accept:
- `delay`: Animation delay in seconds (default: 0)
- `duration`: Animation duration in seconds (varies by component)
- `threshold`: Intersection Observer threshold (default: 0.15)
- `className`: Additional CSS classes
- `staggerDelay`: For GlassStagger, delay between children (default: 0.1)

## CSS Classes Available

### Glass Utilities
- `.glass-bg`: Semi-transparent background with heavy blur
- `.glass-card`: Card-like glass effect with border
- `.glass-surface`: High opacity glass for important elements
- `.frosted-glass`: Light frosted glass effect
- `.glass-section`: Section with subtle glass overlay

### Usage in Components
```jsx
// Apply glass styling directly
<div className="glass-card p-6">
  Glass card content
</div>

// Combine with animations
<GlassFadeUp>
  <div className="glass-surface rounded-lg p-4">
    Animated glass surface
  </div>
</GlassFadeUp>
```

## Implementation Examples

### Section-Level Animation (in App.tsx)
```jsx
<GlassScale delay={0.3} className="glass-section">
  <YourComponent />
</GlassScale>
```

### Component-Level Animation (inside components)
```jsx
export function MyComponent() {
  return (
    <section>
      <GlassStagger delay={0.2}>
        <GlassStaggerItem>
          <h2>Animated Header</h2>
        </GlassStaggerItem>
        <GlassStaggerItem>
          <p>Animated content</p>
        </GlassStaggerItem>
      </GlassStagger>
    </section>
  );
}
```

## Animation Timing Guidelines

1. **Hero Section**: Use GlassReveal with threshold 0.1 for immediate visibility
2. **Main Sections**: Use different animations (GlassFadeUp, GlassScale, GlassSlide) with 0.2-0.4s delays
3. **Internal Elements**: Use GlassStagger for lists, smaller delays (0.1-0.2s)
4. **Final Sections**: Use longer durations (1.5-1.8s) for dramatic effect

## Performance Notes

- Uses Intersection Observer for efficient scroll detection
- Animations trigger once by default (triggerOnce: true)
- Hardware-accelerated transforms and filters
- Optimized for 60fps performance
- Glass effects use backdrop-filter for native performance

## Current App Structure

The main App.tsx wraps each section with different glass animations:
- Hero: GlassReveal (premium entrance)
- About: GlassFadeUp (clean fade)
- Work: GlassScale (dynamic scale)
- Journey: GlassSlideLeft (directional)
- Footer: GlassSlideRight (opposite direction)
- Contact: GlassReveal (final impression)

## Customization

You can adjust the glass effects by modifying the CSS variables in globals.css or creating custom variants:

```css
.custom-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

The system is designed to be minimal, performant, and visually stunning while maintaining your existing functionality.