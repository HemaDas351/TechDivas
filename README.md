

# 🚀 Automated HR Management System

> A web dashboard that helps IT service companies efficiently manage clients, deadlines, deliverables, tickets, and internal communications in one place.
> 🌐 **Live Project**: [https://tech-divas.vercel.app/](https://tech-divas.vercel.app/)

---

## 🧠 Problem Statement

> HR departments in IT service companies face difficulties in managing multiple client projects, tracking deliverables, deadlines, and internal communication due to lack of centralized systems.

---

## 💡 Solution

> A centralized HR management system that streamlines core operations through a single web platform.

Key features include:

* 👥 Add, edit, and view client details
* 🎫 Ticket raising and resolution system
* 📆 Deadline tracking with countdowns
* ✅ Deliverables system
* 📈 Progress tracking using visual bars
* 💬 Discussion space for communication
* 📬 Contact module with mail support
* 📝 Feedback form integration
* 📤 CSV export functionality *(optional)*

---

## 📁 Project File Structure

```
├── hr-dashboard-backend/            # Backend (Node.js + Express)
│   └── ...                          # APIs, models, and server logic
├── Clients.html                     # Client management page
├── Deadlines.css                    # Styles for deadlines section
├── Deadlines.html                   # Set/view deadlines
├── Progress.html                    # Progress visualization
├── Tickets.css                      # Styles for ticket panel
├── Tickets.html                     # Ticket raising system
├── add-new-client.css               # Styles for add client form
├── add-new-client.html              # Add client form
├── admin.css                        # Admin dashboard styles
├── admin.html                       # Admin homepage
├── admin.js                         # Admin logic
├── contact.css                      # Contact page styles
├── contact.html                     # Contact module
├── deliverable.html                 # Add/view deliverables
├── deliverablesystem.html           # Deliverables system main page
├── discuss.css                      # Styles for discussion board
├── discuss.html                     # Discussion forum
├── edit-client.html                 # Edit client info
├── index.css                        # Landing page styles
├── index.html                       # Landing page
├── index.js                         # Base JavaScript logic
├── license.css                      # License page styling
├── license.html                     # License content page
├── license.txt                      # License text file
├── login.css                        # Login form styles
├── login.html                       # Login form
├── ticket.css                       # Styles for individual ticket
├── ticket.html                      # Ticket details page
├── view-deadlines.css               # Styles for deadline viewer
├── view-deadlines.html              # Deadline search & countdowns
└── README.md                        # Project documentation
```

---

## 🛠️ Tech Stack

| Frontend                      | Backend          | Database | Others                                        |
| ----------------------------- | ---------------- | -------- | --------------------------------------------- |
| HTML, CSS, JavaScript, Spline | Node.js, Express | MongoDB  | Vercel, GitHub, Figma, APIs, EmailJS/Typeform |

---

## 📱 Features

* 🧑‍💼 Admin dashboard with modular structure
* 👥 Client management system
* 🎫 Raise and track support tickets
* 📆 Deadline tracker with countdown
* ✅ Manage and view project deliverables
* 📈 Visual progress tracking
* 💬 Discussion board for internal communication
* 📝 Feedback form with Typeform/EmailJS
* 📬 Contact form with email integration
* 📤 Export data to CSV *(optional)*

---

## 📸 Screenshots

> *(Add your dashboard screenshots here)*

Example:
![Admin Panel](./assets/admin-dashboard.png)
![Deadlines Countdown](./assets/deadlines.png)

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/HemaDas351/hr-dashboard.git
```

### 2. Navigate to backend

```bash
cd hr-dashboard-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Add environment variables

Create a `.env` file with:

```env
MONGO_URI=your-mongodb-uri
PORT=5000
```

### 5. Start the backend server

```bash
node server.js
```

### 6. Access the Live Frontend

🌐 Open [https://tech-divas.vercel.app/](https://tech-divas.vercel.app/) in your browser.

---

## 📄 License

See [`license.txt`](./license.txt) for details.

---
