# Frontend Base Project

Modern React application built with Vite, Tailwind CSS, and best practices for scalable development.

## 🚀 Features

- **React 19** - Latest React with modern hooks and features
- **Vite** - Lightning fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router** - Declarative routing for React applications
- **Axios** - HTTP client for API communication
- **ESLint** - Code linting for better code quality
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── common/         # Common components (Button, Input, Card, etc.)
├── pages/              # Page components
├── layouts/            # Layout components (Header, Footer, MainLayout)
├── hooks/              # Custom React hooks
├── services/           # API services and HTTP clients
├── routes/             # Routing configuration
├── utils/              # Utility functions and helpers
└── assets/             # Static assets (images, icons, CSS)
    ├── images/
    └── icons/
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository and navigate to the project directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Copy environment variables:**

   ```bash
   copy .env.example .env
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code linting

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=Frontend App
VITE_APP_VERSION=1.0.0
```

### Tailwind CSS

The project is pre-configured with Tailwind CSS. You can customize the theme in `tailwind.config.js`:

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          /* Custom primary colors */
        },
        secondary: {
          /* Custom secondary colors */
        },
      },
    },
  },
};
```

## 🔌 API Integration

The project includes a pre-configured API client using Axios. You can find the configuration in `src/services/api.js`.

### Example API Service

```javascript
// src/services/userService.js
import apiClient from "./api.js";

export const userService = {
  getUsers: async () => {
    const response = await apiClient.get("/users");
    return response.data;
  },

  createUser: async (userData) => {
    const response = await apiClient.post("/users", userData);
    return response.data;
  },
};
```

## 🎨 UI Components

The project includes a set of reusable UI components:

- **Button** - Customizable button with variants and sizes
- **Input** - Form input with validation support
- **Card** - Content container with consistent styling
- **Loading** - Loading spinner component

### Example Usage

```jsx
import { Button, Input, Card } from "../components/common";

function MyComponent() {
  return (
    <Card title="User Form">
      <Input label="Email" type="email" required />
      <Button variant="primary" size="lg">
        Submit
      </Button>
    </Card>
  );
}
```

## 🪝 Custom Hooks

The project includes useful custom hooks:

- **useApi** - Hook for handling API calls with loading states
- **useAuth** - Hook for authentication management

### Example Usage

```jsx
import { useApi } from "../hooks/useApi";
import { userService } from "../services/userService";

function UserList() {
  const { data: users, loading, error } = useApi(userService.getUsers);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

## 🔐 Authentication

The project includes authentication utilities:

```jsx
import { useAuth } from "../hooks/useAuth";

function App() {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <div>Welcome, {user.name}!</div>
      ) : (
        <LoginForm onLogin={login} />
      )}
    </div>
  );
}
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Best Practices

### Code Organization

- Keep components small and focused on a single responsibility
- Use custom hooks for reusable logic
- Organize files by feature rather than by file type
- Use absolute imports for better maintainability

### Styling

- Use Tailwind's utility classes for consistent design
- Create component-specific styles in the `@layer components` section
- Follow the mobile-first approach for responsive design

### State Management

- Use React's built-in state management for local state
- Consider adding Redux Toolkit or Zustand for complex global state
- Use React Query for server state management

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
