# Product Manager Portfolio - Bruno Sardinha

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.6-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Overview

This project is a professional portfolio specifically developed for my application to the Product Manager position at EZ-AD. It was created in less than 2 hours using Windsurf as an AI development assistant, demonstrating both technical competencies and the value of a hands-on approach to product management.

The site highlights my experience in Product Management with a focus on tangible metrics and measurable results. The portfolio is optimized to offer an excellent user experience and high performance on both desktop and mobile devices.

**🔗 [View live project](https://brunosardinha-tpm.com)** | **[GitHub Repository](https://github.com/brunosard/ezad-tpm-application/tree/master)**

## 🛠️ Technologies Used

### Framework & Libraries
- **Next.js 15.3.2**: Modern React framework with static export support, enhanced SEO, and performance optimizations
- **React 19.1.0**: JavaScript library for building declarative and component-based interfaces
- **TailwindCSS 4.1.6**: Utility-first CSS framework for responsive design and efficient customizations
- **Framer Motion 12.11.3**: Library for fluid animations and interactive transitions

### Development Tools
- **TypeScript 5.8.3**: Typed programming language for safer development
- **ESLint 9.26.0**: Static analysis tool for identifying problems in code
- **GitHub Actions**: CI/CD for automated deployment via SFTP

## 🚀 Features

- **Responsive Design**: Adaptive interface optimized for all screen sizes and devices
- **Dark/Light Mode**: Automatic theme switching based on user preferences
- **Optimized Animations**: Smooth transitions and interactive effects for better engagement
- **Static Export**: Site optimized for hosting on traditional servers without Node.js
- **Automatic Path Correction**: Custom script to ensure compatibility across different hosting environments

## 📱 Portfolio Sections

1. **Hero**: Introduction to my professional profile with a focus on hands-on experience in Product Management
2. **About Me**: Detailed description of my skills and approach as a product manager
3. **Technical PM Experience**: Section detailing my main areas of expertise:
   - Product Discovery & Strategy
   - Agile Product Ownership
   - Digital Marketing & Growth
   - UX Prototyping & Team Leadership
4. **Why Hire Me**: Specific arguments about the value I can bring to the position at EZ-AD

## 💻 Development

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/brunosard/ezad-tpm-application.git
cd ezad-tpm-application

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the project in development environment.

## 🏗️ Build Process

This project uses an optimized build process for static export, including a custom solution to solve common CSS and JavaScript relative path issues:

```bash
# Complete build with automatic path correction
npm run build
```

The above command generates the production version in the `out/` folder and automatically runs the `fix-paths.js` script to ensure compatibility with static hosting.

### Additional Commands

```bash
# Build only without path correction
npm run build:local

# Apply path correction separately
npm run fix-paths

# Serve the production version locally
npm run serve
```

## 🔄 CI/CD

The project includes GitHub Actions workflows configured to:

1. Build the project automatically when there is a push to the master branch
2. Run the path correction script
3. Deploy via SFTP to the hosting server

To configure deployment, you need to add the following secrets to the GitHub repository:
- `SFTP_SERVER`: SFTP server address
- `SFTP_USERNAME`: username
- `SFTP_PASSWORD`: password
- `SFTP_PORT`: port (usually 22)
- `SFTP_SERVER_DIR`: target directory on the server

## 🧠 Technical Solutions

### Static Export

The project was configured with `output: 'export'` in `next.config.ts` to generate static HTML, CSS, and JavaScript files that can be hosted on any server.

### Relative Path Correction

The custom `fix-paths.js` script automatically modifies absolute paths to relative paths in all generated HTML files, ensuring resources are loaded correctly in various hosting environments.

### Server Configuration

The project includes `.htaccess` and `.nojekyll` files to optimize compatibility with different hosting environments.

## 👤 Author

**Bruno Sardinha**

- [LinkedIn](https://www.linkedin.com/in/brunosardinha/)
- [GitHub](https://github.com/brunosard)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*This portfolio was created in May 2025, specifically to demonstrate Product Management skills for the position at EZ-AD.*

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
