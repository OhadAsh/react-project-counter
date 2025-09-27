
# My Counter App

A simple React application demonstrating routing and a counter feature.

## Features
- Home page with welcome message
- Counter page with increment/decrement functionality
- Navigation using React Router
- Modular component structure
- TypeScript support

## Project Structure
```
my-counter-app/
├── package.json
├── prettier.config.js
├── README.md
├── tsconfig.json
├── public/
│   ├── favicon.ico
│   └── index.html
└── src/
	 ├── App.css
	 ├── App.tsx
	 ├── index.css
	 ├── index.tsx
	 ├── react-app-env.d.ts
	 ├── components/
	 │   └── Counter/
	 │       ├── Counter.css
	 │       └── Counter.tsx
	 └── pages/
		  └── Counter/
				├── CounterPage.css
				└── CounterPage.tsx
```

## Getting Started

1. **Install dependencies:**
	```zsh
	npm install
	```
2. **Start the development server:**
	```zsh
	npm start
	```
3. **Open your browser:**
	Visit `http://localhost:3000` to view the app.

## Usage
- Use the navigation links to switch between Home and Counter pages.
- On the Counter page, increment or decrement the counter value.

## Technologies Used
- React
- TypeScript
- React Router
- CSS Modules

## License
MIT

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
