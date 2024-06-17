from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.common.action_chains import ActionChains
import time

options = Options()  # Create an Options object

# Optional: Specify driver path if not in PATH
options.binary_location = "C:/Program Files/Google/Chrome/Application/chrome.exe"
options.add_argument("--disable-notifications")

driver = webdriver.Chrome(options=options)  # Pass the Options object

# Sign Up/ Account creation
driver.get("http://127.0.0.1:8004/auths/sign-up/")

time.sleep(4)
# target username
username = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='username']"))
)
email = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='email']"))
)
password = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='password']"))
)
password_confirm = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='password_confirm']"))
)

# enter username and password
username.clear()
username.send_keys("johndoe")
email.clear()
email.send_keys("johndoe@example.com")
password.clear()
password.send_keys("pa$$worD_")
password_confirm.clear()
password_confirm.send_keys("pa$$worD_")

# target the Signup button and click it
button = (
    WebDriverWait(driver, 10)
    .until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[type='submit']")))
    .click()
)

# Sign In/Login
time.sleep(3)
username = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='username']"))
)
password = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='password']"))
)
username.clear()
username.send_keys("johndoe")
password.clear()
password.send_keys("pa$$worD_")

# target the login button and click it
button = (
    WebDriverWait(driver, 10)
    .until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[type='submit']")))
    .click()
)

# Navigate to the main page and wait for it to load
time.sleep(3)
driver.get("http://127.0.0.1:8004/")
time.sleep(3)

# Ensure the button with id 'add_task' is visible and enabled before clicking
task_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "add_task"))
)

# Scroll the button into view
driver.execute_script("arguments[0].scrollIntoView(true);", task_button)
time.sleep(1)  # Wait for scrolling to finish
task_button.click()
time.sleep(3)
title = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='title']"))
)
description = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='description']"))
)
status = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "id_status"))
)

priority = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "id_priority"))
)

assigned_to = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "id_assigned_to"))
)

title.clear()
title.send_keys("share and manage dependencies in a Python project")
description.clear()
description.send_keys(
    """When collaborating with others, it helps ensure that everyone is using the same package versions, which can prevent compatibility issues"""
)
status_element = Select(status)
status_element.select_by_visible_text("Option 2")
#
priority_element = Select(priority)
priority_element.select_by_visible_text("Option 2")
#
assigned_to_element = Select(assigned_to)
assigned_to_element.select_by_visible_text("Option 2")

time.sleep(10)
