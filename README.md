# Above and Beyond - IoT Web Applications Collection

A collection of web-based projects demonstrating various IoT concepts, control interfaces, and data visualization techniques. This repository contains multiple mini-projects showcasing different aspects of Internet of Things applications and web development skills.

## 🎯 Overview

This repository contains a series of web applications developed to demonstrate understanding of IoT applications, smart building concepts, and control interfaces. The projects range from informational websites about IoT to interactive control panels and data visualization dashboards.

**Primary Purpose:** Educational demonstration of web development skills and IoT concept understanding for the SIT209 unit.

## 📦 Projects Included

### 1. **IoT Information Portal** (`Above and Beyond 1/`)
An informative website explaining IoT concepts, applications, and required skillsets. Features multiple pages with responsive navigation and educational content.

### 2. **Smart Lighting Control App** (`Above and Beyond 2/`)
An interactive web interface for controlling smart lighting systems with color selection and on/off switching capabilities.

### 3. **Temperature Data Visualization** (`Above and Beyond 5/`)
A data visualization dashboard displaying temperature trends across multiple cities using interactive charts.

## ✨ Features

### Common Features Across Projects
- 📱 **Responsive Design**: Bootstrap-based layouts that work on various screen sizes
- 🎨 **Modern UI**: Clean, professional interfaces with intuitive navigation
- 🔄 **Interactive Elements**: Dynamic components using JavaScript/jQuery
- 📊 **Visual Appeal**: Well-structured content with images and styling

### Project-Specific Features

**IoT Information Portal:**
- Multi-page navigation with fixed navbar
- Side navigation for quick page jumping
- Comprehensive content about IoT applications
- Contact form for visitor engagement
- Author biography section

**Smart Lighting App:**
- Toggle switches for light control
- Color picker for RGB color selection
- Multiple light management (3 lights)
- Real-time interface updates
- Sleek toggle switch design

**Temperature Dashboard:**
- Interactive line charts using Highcharts
- Multi-city temperature comparison
- Monthly average data visualization
- Responsive chart sizing
- Professional data presentation

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling and animations
- **Bootstrap 5.3**: Responsive grid system and components
- **JavaScript**: Client-side interactivity
- **jQuery 3.6**: DOM manipulation and event handling

### Libraries & Frameworks
- **Bootstrap** (`v5.3.0-alpha1`): UI framework
- **jQuery** (`v3.6.0`, `v2.1.3`): JavaScript library
- **Highcharts**: Data visualization library
- **Font Awesome**: Icon library (referenced in navbar)

### Development Tools
- **VS Code**: Code editor (settings included)
- Git version control

## 🚀 Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Local web server (optional, for testing)

### Basic Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd Above-and-Beyond
   ```

2. **No Build Process Required:**
   These are static HTML/CSS/JS projects that run directly in the browser.

3. **Open Projects:**
   
   **Option A: Direct File Opening**
   - Navigate to any project folder
   - Double-click the HTML file to open in your default browser

   **Option B: Local Server (Recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js http-server
   npx http-server
   ```
   Then navigate to `http://localhost:8000`

### CDN Dependencies

All external libraries are loaded via CDN, so an internet connection is required for full functionality:
- Bootstrap CSS/JS
- jQuery
- Highcharts
- Google Ajax APIs

## 📁 File Structure

```
Above-and-Beyond/
├── Above and Beyond 1/          # IoT Information Portal
│   ├── .vscode/
│   │   └── settings.json       # VS Code configuration
│   ├── index.html              # Home page
│   ├── Activity.html           # Activities/concepts page
│   ├── author.html             # About the author page
│   └── main.css                # Main stylesheet
│
├── Above and Beyond 2/          # Smart Lighting Control App
│   ├── main.html               # Main interface
│   ├── style.css               # Styling for lighting controls
│   └── java.js                 # Color picker functionality
│
└── Above and Beyond 5/          # Temperature Visualization
    ├── index.html              # Dashboard page
    └── server.js               # Chart configuration and data
```

## 📖 Project Details

### Above and Beyond 1: IoT Information Portal

**Purpose:** Educational website explaining IoT concepts, applications, and technologies.

**Pages:**
1. **Home (`index.html`)**: Introduction to IoT with visual examples
2. **Activities (`Activity.html`)**: Three detailed activities covering:
   - IoT Applications overview
   - Smart Building concepts
   - Control Interface explanations
3. **About (`author.html`)**: Author biography and contact form

**Navigation Features:**
- Fixed top navigation bar across all pages
- Side navigation for in-page section jumping
- Smooth scrolling and hover effects

**Content Highlights:**
- IoT application examples (Smart Homes, Healthcare, Industrial IoT, etc.)
- Required skillsets (Programming, Embedded Systems, Networking, etc.)
- Real-world usage scenarios
- Visual aids and images

### Above and Beyond 2: Smart Lighting Control App

**Purpose:** Demonstrate an IoT control interface for smart lighting systems.

**Features:**
- **Three Independent Light Controls**: Each with its own color and power state
- **Color Selection**: HTML5 color picker for RGB color choice
- **Toggle Switches**: Smooth animated switches for on/off control
- **Visual Feedback**: Blue active state, gray inactive state

**Components:**
```html
Each Light Unit Contains:
├── Header (Light 1/2/3)
├── Color Picker Input
└── Toggle Switch
```

**Interaction Flow:**
1. User selects a color using the color picker
2. User toggles the switch on/off
3. jQuery captures the change events
4. (Ready for backend integration to control actual devices)

**Styling:**
- Clean, card-based layout
- Professional toggle switch design
- Responsive container (max-width: 800px)
- Consistent spacing and borders

### Above and Beyond 5: Temperature Data Visualization

**Purpose:** Display multi-city temperature data using interactive charts.

**Data Visualization:**
- **Chart Type**: Line chart with multiple series
- **Cities Tracked**: Tokyo, New York, Berlin, London
- **Time Period**: Monthly averages (Jan-Dec)
- **Temperature Range**: Displayed in Celsius

**Chart Features:**
- Interactive tooltips showing exact values
- Legend for series identification
- Grid lines for easy reading
- Responsive sizing (100% width)
- Professional color scheme

**Data Structure:**
```javascript
Series: [
  Tokyo: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
  New York: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
  Berlin: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
  London: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
]
```

## 🎮 Usage Guide

### Navigating the IoT Information Portal

1. **Start at Home Page**: Learn about IoT basics and applications
2. **Explore Activities**: Click "Activities" in the navbar to learn concepts
3. **Use Side Navigation**: Jump to specific sections using the left sidebar
4. **Contact the Author**: Visit "About us" page to see profile and send messages

### Using the Smart Lighting App

1. **Open `main.html`** in your browser
2. **Select a Color**:
   - Click the color picker for any light
   - Choose your desired color from the palette
3. **Toggle Lights**:
   - Click the switch to turn lights on/off
   - Blue = On, Gray = Off
4. **Manage Multiple Lights**: Each light operates independently

### Viewing Temperature Data

1. **Open `index.html`** from the Above and Beyond 5 folder
2. **Interact with Chart**:
   - Hover over data points to see exact temperatures
   - Click legend items to show/hide city data
   - Zoom and pan (if enabled in Highcharts configuration)

## 🌐 Browser Compatibility

### Tested Browsers
- ✅ Google Chrome (90+)
- ✅ Mozilla Firefox (88+)
- ✅ Safari (14+)
- ✅ Microsoft Edge (90+)

### Requirements
- JavaScript enabled
- CSS3 support
- HTML5 support
- Internet connection (for CDN resources)

## 🙏 Acknowledgments

- **Bootstrap Team**: For the excellent responsive framework
- **jQuery Foundation**: For simplifying JavaScript operations
- **Highcharts**: For powerful data visualization capabilities
- **Chitkara University**: For providing the learning opportunity
- **SIT209 Course**: For the project requirements and guidance
- **Online Communities**: Stack Overflow, MDN Web Docs, and W3Schools for reference materials

---

**Note:** These projects are demonstration prototypes for educational purposes. They showcase frontend skills and IoT concepts but require backend integration for production use with actual IoT devices.
---
