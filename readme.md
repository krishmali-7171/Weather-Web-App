# 🌤️ Weather App - Task 4 (Prodigy InfoTech Internship)
## Advanced Weather Web App with 3D Globe

A sophisticated, interactive weather application featuring a stunning 3D rotating Earth globe background and comprehensive weather data visualization. Built with modern web technologies and OpenWeatherMap API integration.

---

## ✨ Features

### 🌍 **3D Interactive Globe**
- Rotating 3D Earth with realistic textures and atmosphere
- Real-time globe pointing to searched cities
- Interactive markers showing city locations
- Smooth animations and transitions

### � **Smart Search & Suggestions**
- City search with real-time autocomplete
- Popular cities suggestion dropdown
- Real-time globe pointing as you type (desktop only)
- Enter key support for quick searches

### 📊 **Comprehensive Weather Display**
- Current temperature with °C/°F toggle
- Detailed weather cards showing:
  - Feels like temperature
  - Humidity percentage
  - Wind speed
  - Atmospheric pressure
  - Visibility distance
  - Sunrise & sunset times
- Weather icons and descriptions
- 5-day forecast with scrollable cards

### 🖥️ **Split-Screen Layout (Desktop)**
- Weather data slides to left (45% width)
- Globe moves to right with enhanced interactivity
- Location display panel with coordinates
- Globe pointing notifications

### 📱 **Mobile-Optimized Experience**
- Responsive design for all screen sizes
- Clean, centered layout on mobile
- Hidden location cards and notifications for better UX
- Touch-friendly interface elements
- Hamburger navigation menu

### 🎨 **Modern UI/UX**
- Glassmorphism design with backdrop blur effects
- Neon glow animations and shadows
- Smooth transitions and hover effects
- Professional typography (Orbitron + Inter fonts)
- Dark theme with vibrant accent colors

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **3D Graphics**: Globe.gl library with Three.js
- **API**: OpenWeatherMap API
- **Design**: Glassmorphism, CSS Grid, Flexbox
- **Responsive**: Mobile-first approach with breakpoints

---

## 🚀 Live Demo

Open `index.html` in your browser or serve with a local server for the best experience.

---

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (Full split-screen experience)
- **Tablet**: 768px (Responsive layout)
- **Mobile**: < 768px (Centered, touch-optimized)

---

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd weather-web-app
   ```

2. **Add your OpenWeatherMap API key**
   ```javascript
   // In script.js, line 2
   const apiKey = 'YOUR_API_KEY_HERE';
   ```

3. **Get your free API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

4. **Run the application**
   ```bash
   # Option 1: Simple file server
   python -m http.server 8000
   
   # Option 2: Node.js server
   npx serve .
   
   # Option 3: Open index.html directly in browser
   ```

---

## 🎯 Key Functionalities

### Desktop Features
- ✅ Split-screen weather display and globe interaction
- ✅ Real-time globe pointing as you type
- ✅ Location coordinate display panel
- ✅ Globe pointing notifications
- ✅ Full interactivity with globe controls

### Mobile Features
- ✅ Clean, centered weather display
- ✅ Touch-optimized interface
- ✅ Hamburger navigation menu
- ✅ Simplified UX without distracting elements
- ✅ Full weather data and forecast access

### Universal Features
- ✅ City search with autocomplete
- ✅ Temperature unit toggle (°C/°F)
- ✅ 5-day weather forecast
- ✅ Comprehensive weather data cards
- ✅ Reset functionality to return to default view
- ✅ About and Contact pages

---

## � Project Structure

```
weather-web-app/
├── index.html          # Main application page
├── about.html          # About page
├── contact.html        # Contact page
├── style.css           # All styles and responsive design
├── script.js           # Weather logic and globe interaction
└── readme.md           # This file
```

---

## 🌟 Highlights

- **Advanced 3D Integration**: Seamlessly blends weather data with interactive globe visualization
- **Responsive Excellence**: Optimized experience across all devices
- **Professional UI**: Modern glassmorphism design with attention to detail
- **Performance Optimized**: Smooth animations and efficient API calls
- **User-Centric**: Different experiences for desktop vs mobile users

---

## 🔮 Future Enhancements

- Weather radar overlay on globe
- Historical weather data visualization
- Multiple location comparison
- Weather alerts and notifications
- Social media sharing functionality

---

## 📄 License

This project is part of the Prodigy InfoTech Internship program.

---

## 👨‍💻 Developer

**Task 4** - Advanced Weather Web Application  
*Prodigy InfoTech Internship*

**GitHub**: [krishmali-7171](https://github.com/krishmali-7171)  
**Email**: [krishmali7171@gmail.com](mailto:krishmali7171@gmail.com)

---

*Made with ❤️ and lots of ☕*
