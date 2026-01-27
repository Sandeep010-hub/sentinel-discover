

# SentinelFlow - Academic Project Discovery Platform

A premium, professional UI mockup for discovering academic projects and detecting similarity.

---

## Design System

**Colors:**
- Primary Navy: #1e3a5f (navbar, buttons, accents)
- Light Gray Background: #f5f7fa
- White Cards with subtle shadows
- Accent Blue for CTAs and highlights

**Typography:** Clean sans-serif with strong hierarchy

---

## Layout Structure (Following Reference)

### 1. Sticky Navbar
- **Left:** SentinelFlow logo with geometric shield icon
- **Center:** Navigation links - Home, About, How to Use, Explore Projects (with active state)
- **Right:** User profile avatar, GitHub icon, LinkedIn icon
- Navy background with white text

### 2. Hero Section
- **Left:** Bold "Archive Discovery" H1 heading
- **Right:** Wide search bar with magnifying glass icon
- Clean white/light gray background

### 3. Filter Bar
- Three horizontal dropdown filters:
  - "Year: All"
  - "Branch: All" 
  - "Tech Stack: All"
- Light gray pill-style buttons with clean hover states

### 4. Main Content Area (Two-Column Layout)

**Left Side - Project Grid (2 columns):**
- 6+ project cards visible at once
- Each card contains:
  - Project title (bold)
  - Team/Year info (subtle gray text)
  - Hashtags (#NLP, #Logistics, etc.)
  - Brief description (2 lines)
  - "View Details" navy button
- Fade-in animation on load
- White cards with rounded corners and subtle shadow

**Right Side - AI Assistance Panel:**
- Fixed/sticky positioning
- Card with "Drag & Drop Your Research Paper Here (.pdf, .docx)"
- Dashed border drop zone
- "Highly Similar Projects" section below
- Results showing "Project X (92 Match)" with arrow indicators
- Simulated demo data

### 5. Floating Action Button
- Bottom-right corner
- Brain/chat bubble hybrid icon
- Cyan/teal gradient ring
- Subtle pulse animation
- Opens AI chat placeholder on click

### 6. Footer
- Minimalist centered links
- "Base Paper Fetching" | "Suggestions"
- Light separator from main content

---

## Sample Project Data

12 pre-populated academic projects:
1. Smart Traffic Management System (2023, CS) - #IoT #ML
2. Sentiment Analysis for Reviews (2022, CS) - #NLP #Python
3. Blockchain Voting System (2024, CS) - #Blockchain #Security
4. Autonomous Drone Navigation (2023, ECE) - #Robotics #ComputerVision
5. Healthcare Chatbot System (2024, CS) - #NLP #Healthcare
6. Solar Energy Prediction Model (2022, EE) - #ML #Renewable
7. Smart Warehouse Management (2023, CS) - #Logistics #IoT
8. Fraud Detection in Banking (2024, CS) - #ML #FinTech
9. AR-Based Learning Platform (2023, CS) - #AR #Education
10. Water Quality Monitoring IoT (2022, ECE) - #IoT #Environment
11. Resume Parsing with NLP (2024, CS) - #NLP #HR
12. Predictive Maintenance System (2023, ME) - #ML #Industry4.0

---

## Responsive Behavior

- **Desktop (>1024px):** 2-column grid + side panel
- **Tablet (768-1024px):** 2-column grid, collapsible side panel
- **Mobile (<768px):** Single column, bottom sheet for AI panel

---

## Interactions & Animations

- Smooth fade-in for project cards (staggered)
- Hover lift effect on cards
- Dropdown animations for filters
- Pulse animation on FAB
- Drag & drop visual feedback
- Simulated similarity results after "upload"

