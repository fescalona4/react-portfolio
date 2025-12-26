# Portfolio Website

A modern, responsive portfolio website built with React and Chakra UI. This single-page application showcases my work, skills, and provides a contact form for potential collaborations.

## Features

- **Responsive Header** with social media links and smooth scroll navigation
- **Landing Section** with avatar, greeting, and professional bio
- **Projects Section** displaying featured projects in a grid layout with cards
- **Contact Form** with form validation using Formik and Yup
- **Scroll Animation** - Header hides/shows based on scroll direction
- **Alert System** for form submission feedback

## Technologies Used

- **React** - UI library
- **Chakra UI** - Component library for styling
- **Formik** - Form management
- **Yup** - Form validation schema
- **Font Awesome** - Icons
- **React Scripts** - Build tooling

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-lab
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## Project Structure

```
src/
├── components/
│   ├── Alert.js
│   ├── Card.js
│   ├── ContactMeSection.js
│   ├── Footer.js
│   ├── FullScreenSection.js
│   ├── Header.js
│   ├── LandingSection.js
│   └── ProjectsSection.js
├── context/
│   └── alertContext.js
├── hooks/
│   └── useSubmit.js
├── images/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   └── photo4.jpg
├── App.js
└── index.js
```

## Features Breakdown

### Header Component
- Fixed position header with smooth scroll navigation
- Social media links (GitHub, LinkedIn, Medium, Stack Overflow, Email)
- Internal navigation to Projects and Contact sections
- Scroll-based hide/show animation

### Landing Section
- Professional avatar display
- Personalized greeting and bio
- Centered layout with dark background

### Projects Section
- Grid layout showcasing featured projects
- Project cards with images, titles, descriptions
- Hover effects and visual indicators

### Contact Form
- Form validation with real-time error messages
- Required field validation
- Email format validation
- Minimum character count for messages
- Loading states during submission
- Success/error alerts
- Form reset on successful submission

## Customization

### Update Personal Information
Edit `src/components/LandingSection.js` to update:
- Greeting message
- Bio text
- Avatar image URL

### Update Projects
Edit `src/components/ProjectsSection.js` to modify the projects array with your own projects.

### Update Social Links
Edit `src/components/Header.js` to update the `socials` array with your social media profiles.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

**Francisco Escalona**
- Full stack developer
- Specialised in React and Node.js

---

Built with ❤️ using React and Chakra UI

