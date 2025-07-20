

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
* 📝 Feedback form 
* 📬 Contact form 
* 📤 Export data to CSV 

---

## 📸 Screenshots
<img width="1916" height="974" alt="image" src="https://github.com/user-attachments/assets/108d410e-51f5-450b-a251-ad4c58f09a8f" />
<img width="1919" height="951" alt="image" src="https://github.com/user-attachments/assets/7eaa2d3c-b3c3-44af-8134-550931beba30" />
<img width="1919" height="971" alt="image" src="https://github.com/user-attachments/assets/887e266f-c732-4775-8a5c-cd5b0bb5625d" />
<img width="1911" height="956" alt="image" src="https://github.com/user-attachments/assets/114d6dbd-9338-41b2-880e-6ee0593ab368" />
<img width="1903" height="961" alt="image" src="https://github.com/user-attachments/assets/3f3ee3c0-fe58-41a2-92a9-97a0674e37bf" />
<img width="1909" height="970" alt="image" src="https://github.com/user-attachments/assets/b8f3873a-114d-4695-9d91-55e54e67b39c" />

<img width="1904" height="966" alt="image" src="https://github.com/user-attachments/assets/70fecb00-05d4-49bc-980b-a3171b658554" />
<img width="1904" height="968" alt="image" src="https://github.com/user-attachments/assets/f3f25d4c-d3e4-48bc-be64-6a530699114f" />

<img width="1918" height="965" alt="image" src="https://github.com/user-attachments/assets/4406d41e-6e95-424b-b0a5-d55c46bd5db8" />
<img width="1910" height="968" alt="image" src="https://github.com/user-attachments/assets/86e42a28-8267-47a9-a5e0-5110ac59df26" />
<img width="1890" height="960" alt="image" src="https://github.com/user-attachments/assets/25356348-c1c5-4130-80df-4b14a031ddd5" />
<img width="1910" height="967" alt="image" src="https://github.com/user-attachments/assets/21cc0d8d-8256-4281-9f8d-b0eb9f0db2d5" />
<img width="1915" height="973" alt="image" src="https://github.com/user-attachments/assets/ee39da7a-2e9d-4328-8731-d4141c678eb0" />

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
