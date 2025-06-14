# RealEstate - Premium Property Listings Platform

A modern, responsive real estate website built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive property listing platform with advanced search functionality, detailed property views, and a beautiful user interface.

## 🌟 Features

### Core Functionality
- **Property Listings**: Browse through a curated collection of properties
- **Advanced Search**: Filter properties by location, type, and keywords
- **Property Details**: Detailed modal views with comprehensive property information
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Hero Section**: Rotating property showcase with smooth transitions
- **Property Management**: Easy-to-manage property data structure

### User Experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Mobile-First Approach**: Responsive design that works on all devices
- **Fast Performance**: Optimized React components with efficient rendering
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd realestate-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with property showcase
│   ├── SearchFilters.tsx # Property search and filtering
│   ├── PropertyGrid.tsx  # Property listings grid
│   ├── PropertyCard.tsx  # Individual property cards
│   ├── PropertyModal.tsx # Property details modal
│   └── Footer.tsx      # Site footer
├── data/
│   └── properties.ts   # Property data and sample listings
├── types/
│   └── Property.ts     # TypeScript interfaces
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🏠 Property Data Structure

Each property includes the following fields:

```typescript
interface Property {
  id: number;
  name: string;
  location: string;
  type: 'Apartment' | 'House' | 'Commercial';
  price: number;
  image: string;
  description: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  featured?: boolean;
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Slate/Navy (#1e293b, #334155)
- **Secondary**: Emerald Green (#10b981, #059669)
- **Accent**: Blue (#2563eb)
- **Neutral**: Gray shades for text and backgrounds

### Typography
- **Headings**: Bold, hierarchical sizing
- **Body Text**: Clean, readable fonts with proper line spacing
- **Interactive Elements**: Clear, accessible button and link styles

### Components
- **Cards**: Elevated design with hover effects
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Clean input styling with focus states
- **Modals**: Overlay design with backdrop blur

## 🔧 Customization

### Adding New Properties

1. Open `src/data/properties.ts`
2. Add new property objects to the `properties` array
3. Ensure all required fields are included
4. Use high-quality images (minimum 1200x800px recommended)

### Modifying Styles

The project uses Tailwind CSS for styling. Key customization points:

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Spacing**: Adjust spacing scale in Tailwind configuration
- **Components**: Update component styles in individual `.tsx` files

### Adding New Features

1. Create new components in the `src/components/` directory
2. Add necessary TypeScript interfaces in `src/types/`
3. Update the main `App.tsx` to include new functionality
4. Follow the existing code patterns and naming conventions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are designed mobile-first and scale up appropriately.

## 🔍 Search Functionality

The search system includes:

- **Location Filter**: Dropdown with all available locations
- **Property Type Filter**: Filter by Apartment, House, or Commercial
- **Keyword Search**: Search in property names and descriptions
- **Real-time Filtering**: Instant results as you type or select filters

## 🧪 Testing

### Manual Testing Checklist

- [ ] All property cards display correctly
- [ ] Search filters work properly
- [ ] Property details modal opens and closes
- [ ] Responsive design works on mobile/tablet
- [ ] Navigation functions correctly
- [ ] Images load properly
- [ ] Contact forms are accessible

### Browser Compatibility

Tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development Tools

- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Type safety and better development experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **ESLint**: Code linting and formatting

## 📈 Performance Optimization

- **Image Optimization**: All images are served from Pexels CDN
- **Code Splitting**: Components are efficiently bundled
- **Lazy Loading**: Images load as needed
- **Minimal Bundle Size**: Only necessary dependencies included


Planned features for future releases:
- User authentication and saved properties
- Advanced filtering (price range, amenities)
- Property comparison tool
- Interactive maps integration
- Virtual tour functionality
- Agent profiles and contact system
- Property inquiry forms
- Email notifications
- Admin dashboard for property management

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**