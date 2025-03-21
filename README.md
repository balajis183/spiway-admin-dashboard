# Spiway Admin Dashboard

## Description
Spiway Admin Dashboard is a modern and interactive dashboard designed for the **Spiway application**, displaying its key statistics and insights. It provides efficient user data management and analytics. The dashboard features a visually appealing UI with a collapsible sidebar for easy navigation. The website is mostly responsive and provides a seamless user experience.

## Features

### 🌟 Signup & Login Page (UI-Only)
- The homepage consists of a **signup and login page**, which is currently a UI layout without functionality.
- Once users log in, they will access the dashboard.

### 📌 Interactive Sidebar
- The **collapsible sidebar** enhances user navigation.
- It contains navigation links to the following sections:
  - **📊 Dashboard** – Displays key app statistics.
  - **👥 Users** – Lists user details such as name, email, role, status, and last seen.
  - **📈 Analytics** – Provides visual insights through line charts, bar charts, and pie charts.
  - **⚙️ Settings** – Currently UI-only, with future enhancements planned.

### 📊 Dashboard
- Shows essential statistics about the **Spiway application**, such as **total installs, daily installs, and active users**.
- Clean and structured layout for better readability.

## 👥 Users Section  

### 📌 Features  
- Displays user details such as:  
  - **ID**  
  - **User ID**  
  - **Name**  
  - **Phone**  
  - **Status** (Active, Inactive, or Deleted)  
  - **Last Login** (Displays **actual date & time**)  
  - **Created Date**  
  - **App Version**  

### 🔎 Search & Filters  
- Users can **search by name** using the search bar at the top.  
- Sort users by **ID (ascending/descending)** (default is descending).  

### 📊 Table View  
- Displays user data in a structured **table format**.  
- **Status column** includes an indicator (🟢 Active, 🔴 Deleted, ⚫ Inactive).  
- Uses **pagination** with `Home`, `Previous`, `Next` buttons (`FaHome`, `FaArrowLeft`, `FaArrowRight` icons).  
- Table has **horizontal scrolling** on mobile for better readability.  

### 🚀 Error Handling  
- If data fetching fails:  
  - A **styled error message** appears inside the main content (not overlapping the sidebar).  
  - Possible causes: **Network issue or CORS restriction**.  
  - Provides a **retry button** and a link to a **CORS extension** for troubleshooting.  

### 🎭 Loading State  
- Uses a **skeleton loader** with a shimmer effect for a smoother experience while data loads.  

### 📈 Analytics Section
- Provides key performance metrics, including:
  - **Total Users**
  - **Active Users**
  - **New Users**
  - **Retention Rate**
- Includes **multiple charts for better insights**:
  - 📉 **Line Chart** – Shows user growth over time.
  - 📊 **Bar Chart** – Displays engagement metrics in a rectangular container.
  - 🥧 **Pie Chart** – Represents device usage distribution.

### 🔝 Header
- Displays the **title**: "Spiway Dashboard".
- Includes interactive **icons**:
  - 🔔 Notifications
  - ✉️ Messages
  - ❓ Help & Support
  - ⚙️ Settings (Linked to the settings page)

### 🖥️ Main Content Area
- Dynamically updates based on the selected section from the sidebar (Dashboard, Users, Analytics, or Settings).

### 🌍 Browser Tab Customization
- Includes a **custom tab title and icon** for better identification.

## 🚀 Deployment
**Live Demo:** [Spiway Admin Dashboard](https://balajis183.github.io/spiway-admin-dashboard/)

**Note:** For a better experience on mobile, **enable Desktop Site mode** for better responsiveness.

## 📥 Installation & Setup

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/balajis183/spiway-admin-dashboard.git
   ```
2. Navigate into the project directory:
   ```bash
   cd spiway-admin-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## 🌐 Tech Stack
- **React.js** – Core framework for building the dashboard.
- **HTML, CSS, JSX** – UI structure and styling.
- **Media Queries** – Ensuring responsiveness across devices.
- **Chart.js** – For visualizing analytics with line, bar, and pie charts.
- **React Router** – For navigation between pages.
- **GitHub Pages** – Used for deployment.

## 📌 Additional Notes
- The dashboard currently **uses mock data**, and some features are not yet functional.
- The **signup and login pages** are UI-only, with backend integration planned for future updates.
- A `deployment.md` file is available in the repository, detailing the deployment process.
- If the direct link does not work, copy and paste the following into your browser:
  ```bash
  https://balajis183.github.io/spiway-admin-dashboard/
  ```

## 🔮 Future Enhancements
- **API Integration** – Connect real-time user data.
- **Authentication System** – Implement user login/signup functionality.
- **Role-based Access Control** – Different dashboards based on user roles.
- **Enhanced Mobile Responsiveness** – Optimize UI for better mobile experience.

## 🤝 Contributing
Contributions are welcome! If you'd like to contribute:
- Fork the repository.
- Submit a pull request with your changes.
- For major changes, open an issue to discuss improvements.

## 📬 Contact
If you have any questions or feedback, feel free to reach out:

- **GitHub**: [balajis183](https://github.com/balajis183)
- **Email**: sbalaji2000s@gmail.com

---
Thank you for exploring **Spiway Admin Dashboard**! 😊
```bash
https://github.com/balajis183
```

