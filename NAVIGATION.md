# Navigation System Documentation

## Overview

The DataNova project now includes a modern, responsive navigation system with bilingual support, mega menus, and mobile-friendly design. The navigation is dynamically generated from a centralized menu configuration file.

## Features

✅ **Bilingual Support** - Finnish (FI) and English (EN) with toggle  
✅ **Mega Menu** - Multi-column layout for Services section  
✅ **Responsive Design** - Desktop hover menus, mobile accordion  
✅ **Utility Bar** - Contact information and language toggle  
✅ **CTA Buttons** - "Free Assessment" and "Download ISO Toolkit"  
✅ **Accessibility** - ARIA attributes and keyboard navigation  
✅ **Auto-highlighting** - Active page detection  

## File Structure

```
src/
├── data/
│   └── menu.js                    # Navigation menu configuration
├── components/
│   └── sections/
│       └── NavigationBar.astro    # Main navigation component
├── components/ui/icons/
│   └── icons.ts                   # Added phone, menu, x icons
└── layout/
    └── BaseLayout.astro           # Updated to use NavigationBar
```

## Menu Configuration

The navigation menu is defined in `src/data/menu.js`:

```javascript
export const menu = [
  {
    label_fi: "KOTI",
    label_en: "HOME", 
    href: "/",
    children: []
  },
  {
    label_fi: "PALVELUT",
    label_en: "SERVICES",
    href: "/services",
    children: [
      {
        label_fi: "Compliance Frameworks",
        label_en: "Compliance Frameworks",
        href: null,  // Category header, not clickable
        children: [
          {
            label_fi: "ISO 27001 Services",
            label_en: "ISO 27001 Services", 
            href: "/services/iso-27001-services",
            children: []
          }
          // ... more services
        ]
      }
      // ... more categories
    ]
  }
  // ... more menu items
];
```

### Menu Structure Rules

1. **Main Menu Items**: Have `label_fi`, `label_en`, `href`, and `children`
2. **Dropdowns**: Items with `children.length > 0` show dropdown menus
3. **Mega Menu**: Services section gets special multi-column treatment
4. **Category Headers**: Use `href: null` for non-clickable category labels
5. **Leaf Items**: Always have `children: []` (empty array)

## Navigation Component Features

### Utility Bar

```astro
const utilityBar = {
  phone: "+358 XX XXX XXXX",
  email: "info@cybersecurity.fi", 
  location: "Helsinki, Finland"
};
```

### CTA Configuration

```astro
const primaryCTA = { 
  text: "Free Assessment", 
  href: "/contact?assessment=true" 
};
const secondaryCTA = { 
  text: "Download ISO Toolkit", 
  href: "/resources/templates-toolkits" 
};
```

### Language Support

```astro
const currentLang = "en"; // or "fi"
// Usage in template:
{item[`label_${currentLang}`]}
```

## Styling and Responsiveness

### Desktop Navigation
- **Hover Menus**: Show on hover with 150ms delay
- **Mega Menu**: 4-column grid for Services
- **Regular Dropdowns**: Min-width 12rem for other sections

### Mobile Navigation  
- **Hamburger Menu**: Toggle with menu/close icons
- **Accordion Submenus**: Expandable categories
- **Touch-Friendly**: Proper spacing and targets

### Styling Classes

```css
/* Active states */
.text-teal-700.bg-teal-50    /* Active menu item */

/* Hover states */  
.hover:text-teal-700.hover:bg-slate-50  /* Menu item hover */

/* Transitions */
.transition-colors           /* Smooth color changes */
.transition-transform        /* Icon rotations */
```

## Accessibility Features

- **ARIA Labels**: `aria-label`, `aria-expanded`, `aria-current`
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper semantic structure
- **Focus Management**: Visible focus indicators

## Customization Guide

### Adding New Menu Items

1. Edit `src/data/menu.js`
2. Add new menu object with required structure
3. Create corresponding page in `src/pages/`

```javascript
{
  label_fi: "UUSI SIVU",
  label_en: "NEW PAGE",
  href: "/new-page", 
  children: []
}
```

### Modifying Services Mega Menu

1. Edit the Services children in `menu.js`
2. Add/remove categories or services
3. Update grid columns in `NavigationBar.astro` if needed

### Changing Contact Information

Update the `utilityBar` object in `NavigationBar.astro`:

```astro
const utilityBar = {
  phone: "Your Phone",
  email: "your@email.com",
  location: "Your Location"
};
```

### Customizing CTA Buttons

Modify the CTA configurations:

```astro
const primaryCTA = { 
  text: "Your Primary CTA", 
  href: "/your-link" 
};
```

## Icons Used

The following icons are used in the navigation:

- `phone` - Contact phone number
- `email` - Contact email  
- `mapPin` - Location
- `menu` - Mobile hamburger menu
- `x` - Mobile menu close
- `arrowDownRight` - Dropdown indicators

## Mobile Functionality

### JavaScript Features

```javascript
// Mobile menu toggle
document.getElementById('mobile-menu-button')

// Accordion functionality  
document.querySelectorAll('[data-accordion-trigger]')

// Language toggle
document.querySelectorAll('[aria-label*="Switch to"]')
```

### Mobile Menu Structure

```astro
<!-- Mobile menu with accordion -->
<div id="mobile-menu" class="lg:hidden hidden">
  <!-- Services show as categorized lists -->
  <!-- Other items show as simple dropdowns -->
</div>
```

## Language Toggle Implementation

Currently uses visual state management. For full implementation:

1. **Add State Management**: Use Astro's client-side state or a store
2. **URL Strategy**: Use `/fi/` and `/en/` paths  
3. **Content Management**: Separate content files per language
4. **SEO**: Add `hreflang` attributes

## Performance Considerations

- **CSS-only Animations**: No JavaScript for hover menus
- **Lazy Loading**: Icons loaded on demand
- **Minimal JS**: Only for mobile interactions
- **Optimized Rendering**: Conditional rendering for mobile/desktop

## Browser Support

- **Modern Browsers**: Full feature support
- **Mobile Browsers**: Touch-optimized interactions  
- **Accessibility**: Screen reader compatible
- **Progressive Enhancement**: Graceful degradation

## Troubleshooting

### Menu Not Showing
1. Check `menu.js` import path
2. Verify `@data/*` path mapping in `tsconfig.json`
3. Check console for JavaScript errors

### Icons Missing
1. Verify icon names in `icons.ts`
2. Check import path for Icon component
3. Add missing icons to `icons.ts`

### Mobile Menu Issues
1. Check JavaScript event listeners
2. Verify button IDs match script selectors
3. Test touch events on actual mobile devices

### Styling Issues
1. Check TailwindCSS classes
2. Verify responsive breakpoints
3. Test hover states on desktop
4. Check z-index layering for dropdowns

## Future Enhancements

1. **Multi-language Content**: Full i18n implementation
2. **Search Integration**: Add search functionality  
3. **Analytics**: Track menu interactions
4. **Animation Library**: Add smooth transitions
5. **Keyboard Shortcuts**: Power user features
