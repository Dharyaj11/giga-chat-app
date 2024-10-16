# Giga Chat: Multilayer Chat and Video Application


[![Next.js](https://img.shields.io/badge/Next.js-Framework-blue)](https://nextjs.org/)  
[![Prisma](https://img.shields.io/badge/Prisma-ORM-green)](https://www.prisma.io/)

**Giga Chat** is a full-stack, scalable chat and video conferencing platform designed to enable real-time communication in both group and direct messaging. Built using modern web technologies, the application supports text, voice, and video interactions with a focus on seamless, low-latency performance. It also includes user authentication and authorization with role-based access control for efficient member management.

## 🚀 Features

- **Real-Time Messaging**: Chat with individuals or groups with real-time message synchronization using Socket.IO and polling.
- **Video and Audio Calls**: Conduct high-quality video and voice calls powered by Livekit.IO.
- **Group and Direct Messaging**: Supports both group chats and private conversations with member management.
- **Authentication**: Secure authentication using ClerkApi, with support for Google and GitHub sign-ins.
- **Role-Based Access Control**: Manage members with defined roles (admin, moderator, user) for controlled access and functionality.
- **Scalable Architecture**: Efficient backend setup using PostgreSQL and Prisma for database management.
- **Responsive UI**: Built with Next.js, TypeScript, and Tailwind CSS for a clean and responsive user experience.

## 🛠️ Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Prisma](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/), [Node.js](https://nodejs.org/), [Zustand](https://github.com/pmndrs/zustand)
- **Real-Time Communication**: [Socket.IO](https://socket.io/), [Livekit.IO](https://livekit.io/)
- **Authentication**: [ClerkApi](https://clerk.dev/)
- **Version Control**: [Git](https://git-scm.com/)
- **Deployment**: Vercel (for hosting)

## 📸 Screenshots

[![Giga Chat Dashboard](https://img.youtube.com/vi/9-e4kJ1uVPs)](https://www.youtube.com/watch?v=9-e4kJ1uVPs)
*Dashboard with ongoing group chat and active video call.*


## 💡 How It Works

1. **User Authentication**: Users sign in securely via Google or GitHub using ClerkApi for multi-factor authentication.
2. **Real-Time Messaging**: Once authenticated, users can engage in real-time chat via WebSockets with the option to create or join groups.
3. **Voice/Video Calls**: Users can initiate audio or video calls in real-time using Livekit.IO for low-latency communication.
4. **Role-Based Management**: Admins can assign roles to users, granting specific permissions such as moderating chat, kicking members, or creating new rooms.

## ⚙️ Future Improvements

- **Push Notifications**: Implement push notifications for new messages and missed calls.
- **File Sharing**: Add support for sharing files and images during conversations.
- **Advanced Role Management**: Implement customizable roles for better access control.
- **Mobile Application**: Develop native apps for iOS and Android to extend platform availability.

## 🧑‍💻 Author

- **Dharya Jasuja**  
 
