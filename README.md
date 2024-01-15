
![App Logo](<URL_TO_YOUR_LOGO_IMAGE>)


# Meta Messenger 2.O

* __Overview__

Meta Messenger 2.0 is an advanced real-time messaging application that allows users to connect, chat, and communicate seamlessly. Built on cutting-edge technologies, this messenger offers a user-friendly interface and incorporates the ability to log in using Facebook for a streamlined experience.



* __Table of Contents__

| Section                |
|------------------------|
| [About the Project](#about-the-project)         |
| [Tech Stack](#tech-stack) |
| [Screenshots](#screenshots)                     |
| [Demo](#demo)                                   |
| [Live Demo](#live-demo)                         |
| [Getting Started](#getting-started)             |
| [Prerequisites](#prerequisites)                 |
| [Installation](#installation)                   |
| [Clone Project](#clone-project)                 |
| [Contact](#contact)                             |


# About the Project


- Real-Time Messaging
- Facebook Integration
- Cutting-Edge Tech Stack
- Optimized Performance
- User-Centric Design


## Tech Stack

| Technology / Library   |
|-----------------------|
| [Upstash](#upstach)             |
| [Redis](#redis)                 |
| [Facebook](#facebook)            |
| [Pusher ](#pusher)               |
| [UUID](#uuid)           |
| [Next.js 14](#nextjs)          |
| [SWR](#swr)                 |
| [Tailwind ](#tailwind)             |
| [React-Timeago ](#react-timeago)        |
| [NextAuth](#next-auth)           |
| [TypeScript](#typescript)           |

# Screenshots

![1 screenshots ](<URL_TO_YOUR_LOGO_IMAGE>)

![2 screenshots ](<URL_TO_YOUR_LOGO_IMAGE>)

# Demo 

![ video  ](<URL_TO_YOUR_LOGO_IMAGE>)

# Live demo 

 - Click here to see  [Vercel Live Demo ](https://mediastack.com/)


# Getting Started

### Prerequisites

- Sign up for Upstach Account  [here](https://upstash.com/)
- Install UUID Library  [here](https://www.npmjs.com/package/uuid)
- Install Redis from   [here](https://github.com/redis/ioredis)
- Create a Meta developer App [here](https://developers.facebook.com/)
- Sign up to Pusher [here](https://pusher.com/)
- Create a Nextjs App with  tailwind typescript included [here](https://nextjs.org/docs/pages/api-reference/create-next-app)
- Install React-Timeago[here](https://www.npmjs.com/package/react-timeago)
- Install Nextauth from [here](https://next-auth.js.org/getting-started/example)



## Installation

* __Nextjs__ 
To create a new Next.js project, you can use the following commands:

  - Open your terminal.
  - Run the following command:
      - With npx
      ```bash
      npx create-next-app@latest
      ```
  - Start the development server: 
    ```bash
    npm run dev
    ```

### Upstash

- Sign in to Upstash
- Create Database
- Connect to Database
   - Choose Node
   -  Obtain your password
   - Add to .env : 
   ```bash
    REDIS_URL=your-password
    ```

### Pusher 
- Sign up on Pusher
- Create a Channel
    - Obtain App Key:
        ```bash
         APP_ID= your-app-id
       ```
       ```bash
         PUSHER_SERVER_KEY= your-app-key
         ```
         ```bash
          PUSHER_SERVER_SECRET= your-app-secret
         ```
        ```bash
         cluster = add-cluster
        ```

### Facebook 
-  Sign in to Facebook for Developer
- Create an App
- From dashboard, go to App Settings.
- Navigate to Basic.
- Obtain Facebook 
   ```bash
    FACEBOOK_CLINET_ID=your-facebook-app_id
  ```
  ```bash
   FACEBOOK_CLINET_SECRET=your-facebook-app_secret
  ```

### Next Auth 
 - Open your terminal.
 - Run the following command:
    - With npm 
    ```bash 
    npm install next-auth
    ```
  - generate NEXTAUTH_SECRET
   - Add the generated secret to your environment      variable (env)
   ```bash
     NEXTAUTH_SECRET=your_nextauth_secret
   ```
     
### Clone Project
  - git clone  -   https://github.com/Riddhi-chavan/Meta-Messenger-2.O
  - npm install
  - npm run dev

Visit http://localhost:3000 in your browser to see the app.


# Contact

Email:riddhic164@gmail.com

Project Link: https://github.com/Riddhi-chavan/Meta-Messenger-2.O


Thank you
for checking out my project! If you have any suggestions or find issues, feel free to open an [issue](https://github.com/Riddhi-chavan/The-Live-News/issues) or submit a [pull request](https://github.com/Riddhi-chavan/The-Live-News/pulls). Your feedback is highly appreciated!

