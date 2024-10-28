# Naruto Character API

This project is a React application that fetches and displays characters from the Naruto universe using the NarutoDB API. It showcases the use of React hooks for state management and Axios for API requests.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Fetches data from the [NarutoDB API](https://narutodb.xyz/).
- Displays a loading indicator while fetching data.
- Handles errors gracefully with an error message.
- Renders a list of character cards dynamically.

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for creating custom designs.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/saahiyo/naruto-universe.git
   ```
   ```
   cd naruto-universe
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

The application will open in your default browser at 


`http://localhost:5173`.

## Usage

1. Upon launching the application, you'll see a list of Naruto characters displayed as cards.
2. Each character card shows:
   - Character image
   - Name
   - Personal details
   - Ninja rank and status
3. The data is automatically fetched and updated from the NarutoDB API.
4. Scroll through the list to explore different characters from the Naruto universe.

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

Please make sure to:
- Follow the existing code style
- Update documentation as needed
- Test your changes thoroughly before submitting
