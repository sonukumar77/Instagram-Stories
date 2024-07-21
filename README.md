# Instagram Stories

Welcome to the Instagram Stories App! This Next Js application allows users to view their story like Instagram App.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Hosted Link](#hosted-link)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Features

- `Interactive Story Viewing`: The app allows users to view their Instagram stories.Stories are displayed sequentially, mimicking the behavior of the Instagram platform.
- `Infinite Scrolling`: Implemented infinite scrolling ensuring a smooth user experience by dynamically loading additional stories as the user scrolls horizontally.
- `UI Enhancements`:The app includes custom components like modals and media cards (Videos,Images)
- `Automatic Story Advancement`: Stories automatically advance to the next one after a set duration (e.g., 5 seconds).
- `Manual Navigation Controls`: Users can manually navigate between stories using intuitive UI controls.
- `Left Tap Navigation`: Tapping on the left side of an open story takes the user to the previous story.
- `Right Tap Navigation`: Tapping on the right side of an open story takes the user to the next story.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sonukumar77/Instagram-Stories.git

   ```

2. Navigate to the project folder:

   ```bash
   cd Instagram-Stories

   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server::

   ```bash
   npm run dev

   ```

2. Open your browser and visit http://localhost:3000.

3. Explore the Instagram Stories App!

## Hosted Link

Visit the hosted application: [Instagram Stories App](https://my-ig-stories.vercel.app/)

## Screenshots

![image](https://github.com/sonukumar77/Instagram-Stories/blob/main/public/assets/images/sc1.png)

---

![image](https://github.com/sonukumar77/Instagram-Stories/blob/main/public/assets/images/sc2.png)

---

![image](https://github.com/sonukumar77/Instagram-Stories/blob/main/public/assets/images/sc3.png)

## Project Structure

- `/src`: Contains the source code for the Next Js application.
- `/src/components`: Reusable React components.
- `/src/components/icons`: Reusable React Icons components.
- `/src/components/reusable`: Reusable components.
- `/src/hooks`: Custom React hooks.
- `/public/models`: For Typescript Models.
- `/src/pages`: Top-level pages of the application.
- `/src/pages/api`: APIs for the application.
- `/src/styles`: CSS styles for the application.
- `/src/utils`: Utility functions and API-related functions.
- `/src/constants.js`: For constants.
- `/public/assets`: Images,Videos,icons and other assets.

## Dependencies

- Next Js
- React Js
- Jest
- Other dependencies based on your specific components and features

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Open a pull request.
