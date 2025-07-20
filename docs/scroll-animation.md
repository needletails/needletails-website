# Scroll Animation Directive

A Nuxt-style Vue directive for creating smooth scroll-triggered animations using Intersection Observer API.

## Features

- ✅ **SSR Compatible** - Works with server-side rendering
- ✅ **Configurable** - Customizable threshold, rootMargin, and repeat behavior
- ✅ **TypeScript Support** - Full type safety and IntelliSense
- ✅ **Memory Efficient** - Proper cleanup and observer management
- ✅ **Composable Alternative** - Also available as a composable for programmatic use

## Installation

The directive is automatically available in your Nuxt application through the plugin system.

## Usage

### Basic Usage

```vue
<template>
  <div v-scrollanimation class="my-element">
    This element will animate when it comes into view
  </div>
</template>
```

### Advanced Usage with Options

```vue
<template>
  <div 
    v-scrollanimation="{ 
      threshold: 0.5, 
      rootMargin: '100px', 
      once: false 
    }" 
    class="my-element"
  >
    Custom animation settings
  </div>
</template>
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `threshold` | `number` | `0.1` | Percentage of element visibility required to trigger animation (0-1) |
| `rootMargin` | `string` | `'0px'` | Margin around the viewport to trigger animation early |
| `once` | `boolean` | `true` | Whether animation should only happen once or repeat |

## CSS Classes

The directive automatically adds these CSS classes:

- `.before-enter` - Initial state (hidden)
- `.enter` - Animated state (visible)

### Example CSS

```css
.before-enter {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
```

## Composable Usage

For programmatic control, you can also use the composable:

```vue
<template>
  <div ref="myElement" class="my-element">
    Programmatic animation
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

const myElement = ref<HTMLElement>()

const { observeElement } = useScrollAnimation({
  threshold: 0.2,
  rootMargin: '50px',
  onEnter: () => console.log('Element entered viewport'),
  onLeave: () => console.log('Element left viewport')
})

onMounted(() => {
  if (myElement.value) {
    observeElement(myElement.value)
  }
})
</script>
```

## Examples

### Different Animation Styles

```vue
<template>
  <!-- Fade in from bottom -->
  <div v-scrollanimation class="fade-up">
    Content
  </div>

  <!-- Slide in from left -->
  <div v-scrollanimation class="slide-left">
    Content
  </div>

  <!-- Scale in -->
  <div v-scrollanimation class="scale-in">
    Content
  </div>
</template>

<style scoped>
.fade-up.before-enter {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.fade-up.enter {
  opacity: 1;
  transform: translateY(0);
}

.slide-left.before-enter {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.6s ease-out;
}

.slide-left.enter {
  opacity: 1;
  transform: translateX(0);
}

.scale-in.before-enter {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.6s ease-out;
}

.scale-in.enter {
  opacity: 1;
  transform: scale(1);
}
</style>
```

### Staggered Animations

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      v-scrollanimation="{ threshold: 0.2 }"
      :style="{ transitionDelay: `${index * 0.1}s` }"
      class="card"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
</script>
```

## Browser Support

This directive uses the Intersection Observer API, which is supported in all modern browsers:

- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

For older browsers, consider using a polyfill like `intersection-observer`.

## Performance

The directive is optimized for performance:

- Uses Intersection Observer API for efficient scroll detection
- Automatically cleans up observers when components are unmounted
- Minimal DOM manipulation
- Configurable to prevent unnecessary re-renders

## Troubleshooting

### Animation not triggering

1. Ensure the element has the correct CSS classes (`.before-enter` and `.enter`)
2. Check that the element is actually scrollable (has sufficient height)
3. Verify the `threshold` and `rootMargin` settings
4. Check browser console for any JavaScript errors

### SSR Issues

The directive is designed to work with SSR. If you encounter issues:

1. Ensure the plugin files are properly named (`scroll-animation.client.ts` and `scroll-animation.server.ts`)
2. Check that the `getSSRProps()` method is implemented
3. Verify that client-side hydration is working correctly

## Contributing

To contribute to this directive:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This directive is part of the NeedleTails website project. 