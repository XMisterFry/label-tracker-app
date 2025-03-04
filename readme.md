About :
The Food Label Tracker is a simple web application that allows users to enter and store nutritional information for various food products. It provides an easy way to track key nutritional metrics like sugars, carbohydrates, and proteins and gives a perspective on how much of these nutritions are present in common food items. Users can submit new products via a form, and the data is stored dynamically.

Structure at Initial commit :

label-tracker
├── 📄 index.html         # Main homepage displaying food labels
├── 📄 label-form.html    # Form page for adding new food labels
├── 📄 styles.css         # Contains all styles for the application
├── 📄 script.js          # Handles display and logic for the homepage
├── 📄 form-script.js     # Handles form submissions and data storage
└── 📄 README.md          # Project documentation

Dependencies at initial commit :
script.js depends on form-script.js, as it retrieves and displays the labels array from the form.

Both JavaScript files use ES Modules, so they must be included as:
<script type="module" src="script.js"></script>
<script type="module" src="form-script.js"></script>

Prospected improvements : 
SQL Databases
Backend with Node.js/ Django
Improved design with bootstrap/tailwind
SOLID OOP
