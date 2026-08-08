# Personal Portfolio Website

A responsive personal portfolio website created to showcase my skills, projects, education, experience, and web development work.

## About the Project

This portfolio was developed as part of my Web Development Internship. It presents my professional profile, technical skills, academic background, projects, and contact information in a modern and responsive interface.

The website focuses on:

- Clean and modern UI design
- Responsive layout for different screen sizes
- Interactive animations and visual effects
- Project presentation
- Skills and experience sections
- Contact form integration
- Professional portfolio assets

## Features

### 1. Home / Hero Section
- Introduction and professional profile
- Web development-focused title
- Call-to-action buttons
- Animated visual elements

### 2. Branding
- Custom "MS" logo mark, used as both the browser favicon and the navbar brand icon next to the "Malaika.dev" wordmark

### 3. About Section
- Short professional introduction
- Academic and career information
- Personal profile details

### 4. Skills Section
- Technical skills
- Animated skill/progress bars
- Interactive card effects

### 5. Projects Section
The portfolio showcases development projects, including:
- Blood Donation System
- Virtual Classroom Platform
- Other web development work

Project images and related assets are stored in the `images` folder.

### 6. Education / Experience
- Academic background
- Internship and development experience
- Timeline-style presentation

### 7. Statistics
The website includes animated statistics such as:
- CGPA: 3.75 / 4.00
- Expected Graduation: 2026

### 8. Contact Section
A contact form allows visitors to send a message. The contact form uses **EmailJS** for sending messages without requiring a separate backend server. Both the contact info card and the contact form use a hover-highlight border/glow effect, consistent with the card styling used across the rest of the site (About, Skills, Projects).

### 9. Animations and Interactive Effects
The website includes:
- Scroll reveal animations
- Animated statistics
- Animated skill bars
- 3D card tilt effects
- Cursor effects
- Sticky navigation
- Timeline animations
- Smooth visual transitions

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- EmailJS
- Git & GitHub

## Project Structure

```
PORTFOLIO/
│
├── assets/
│   ├── Blood-Donation-System.mp4
│   ├── Malaika_Shabir.pdf
│   └── virtual-classroom.mp4
│
├── css/
│   ├── animations.css
│   ├── responsive.css
│   └── style.css
│
├── images/
│   ├── avatar.png
│   ├── blood-donation.png
│   ├── eduspace.png
│   └── favicon.svg
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

## File Description

**`index.html`**
Contains the main structure and content of the portfolio website.

**`css/style.css`**
Contains the main styling, layout, colors, typography, components, and overall visual design.

**Bootstrap 5**
Used for responsive layout and UI components where applicable. It helps with grid/layout utilities, responsive behavior, spacing, buttons, and other reusable interface elements.

**`css/animations.css`**
Contains animation and transition effects used throughout the website.

**`css/responsive.css`**
Contains responsive styling for different screen sizes such as desktop, tablet, and mobile.

**`js/script.js`**
Contains the website's interactive functionality, including:
- Sticky navigation
- Scroll reveal
- Animated skill bars
- 3D tilt effects
- Animated statistics
- Cursor interaction
- Contact form functionality
- Timeline animation

**`images/`**
Contains images used by the portfolio, including the profile avatar, project images, and the site favicon (`favicon.svg`), which also doubles as the navbar logo icon.

**`assets/`**
Contains supporting portfolio files such as project demo videos and the CV/resume.

## Installation and Setup

No server-side installation is required for the basic portfolio.

**Step 1: Download or Clone the Project**
Download the project source code or clone the repository.

**Step 2: Open the Project**
Open the project folder in Visual Studio Code.

**Step 3: Run the Website**
Open `index.html` using a local development server.

For Visual Studio Code, the **Live Server** extension can be used.

Example:
```
http://127.0.0.1:5500/
```
The exact address and port may be different depending on the local server configuration.

## EmailJS Configuration

The contact form uses EmailJS.

To configure the contact form:

1. Create an EmailJS account.
2. Create an Email Service.
3. Create an Email Template.
4. Add the EmailJS public key to `script.js`.
5. Add the service ID and template ID.
6. Update the form field names if necessary.

Example:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");

emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    {
        from_name: document.getElementById("cfName").value,
        from_email: document.getElementById("cfEmail").value,
        subject: document.getElementById("cfSubject").value,
        message: document.getElementById("cfMessage").value
    }
);
```
## Responsive Design

The portfolio is designed to work across:
- Desktop computers
- Laptops
- Tablets
- Mobile phones

The responsive styles are maintained in `css/responsive.css`.

## Testing

Before final deployment, the following areas were tested:

- Navigation links
- Responsive layout
- Buttons and links
- Scroll animations
- Skill bar animations
- Statistics counter
- 3D card effects
- Contact form
- Contact card hover highlight
- Project links
- Images and videos
- Favicon rendering across browsers
- CV/resume access
- Mobile layout
- Browser console errors

## Deployment

The portfolio can be deployed using static hosting platforms such as:

- GitHub Pages
- Netlify
- Vercel

After deployment, the live project URL can be added here:

- **Live Project:** YOUR_LIVE_PROJECT_URL
- **GitHub Repository:** YOUR_GITHUB_REPOSITORY_URL

## Project Assets

The project contains the following portfolio assets:

- CV/Resume PDF
- Blood Donation System demo video
- Virtual Classroom demo video
- Project images
- Profile/avatar image
- Site favicon / logo mark

## Recent Updates

- Removed the embedded map from the Contact section, as it added little value to a personal portfolio
- Added a custom SVG favicon (initials-based "MS" mark in the site's blue-to-cyan brand gradient), replacing the default browser icon
- Reused the favicon as the navbar logo icon next to the "Malaika.dev" wordmark
- Added a hover-highlight (border glow) to the contact info card and contact form, matching the existing card style used elsewhere on the site

## Future Improvements

Possible future improvements include:

- Adding a blog section
- Adding more projects
- Adding a dedicated project details page
- Improving accessibility
- Adding a backend for storing contact messages
- Adding more interactive UI components
- Adding analytics
- Further optimizing website performance

## Internship Deliverables

The final project submission includes:

- Complete source code
- Live project URL
- README documentation
- Portfolio assets
- Screenshots
- Demo video

## Author

**Malaika Shabir**
Student Web Developer — Capital University of Science and Technology, Islamabad

## License

This project is created for educational, internship, and portfolio purposes.