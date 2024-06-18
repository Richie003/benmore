# Tasky

Tasky is a task management and assignment web application built with Python, Django, JavaScript, jQuery, Ajax, HTML, and Tailwind CSS. It allows users to manage tasks efficiently with a user-friendly interface and real-time updates.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Running UI Tests](#running-ui-tests)
- [Contributing](#contributing)
- [License](#license)

## Features
- Task creation, editing, and deletion
- Task assignment to users
- Real-time task updates with Ajax
- User-friendly UI built with Tailwind CSS
- Responsive design for mobile and desktop

## Installation

### Prerequisites
- Python 3.8+
- pip
- virtualenv

### Steps

1. **Fork the Repository**
   - Navigate to the [Tasky repository](https://github.com/your-username/tasky) on GitHub.
   - Click the "Fork" button in the top-right corner of the page to create a copy of the repository under your GitHub account.

2. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/tasky.git
   cd tasky
   ```

3. **Create and Activate a Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

4. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

## Running the Server

1. **Apply Migrations**
   ```bash
   python manage.py migrate
   ```

2. **Run the Local Server**
   ```bash
   python manage.py runserver
   ```

3. **Access the Application**
   - Open your browser and navigate to `http://127.0.0.1:8000`.

## Running UI Tests

UI tests are stored in the `ui-test.py` file in the `tests` folder. To run the UI tests, follow these steps:

1. **Ensure the Server is Running**
   - Ensure the local server is running as described in the [Running the Server](#running-the-server) section.

2. **Run the UI Tests**
   ```bash
   python tests/ui-test.py
   ```

## Contributing

We welcome contributions to Tasky! To contribute, follow these steps:

1. **Fork the Repository**
   - Follow the steps under [Fork the Repository](#fork-the-repository).

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature-branch-name
   ```

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add a meaningful commit message"
   ```

4. **Push to Your Branch**
   ```bash
   git push origin feature-branch-name
   ```

5. **Create a Pull Request**
   - Navigate to the original repository you forked from.
   - Click the "New Pull Request" button and complete the necessary details.
