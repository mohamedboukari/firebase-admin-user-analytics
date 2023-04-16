# Firebase Admin User Analytics

This Node.js script uses Firebase Admin SDK to retrieve user emails from Firebase Authentication and adds their creation date and last login timestamp to a Firestore database, where the document ID is the user's email. This information can be used for analytics, tracking user engagement, or generating reports.

## Prerequisites

### Before running this script, you need to:

1. Have a Firebase project with Firebase Authentication enabled.

2. Create a service account for your Firebase project and download the service account key file.

3. Install the Firebase Admin SDK for Node.js by running the following command:

npm install firebase-admin

## Usage

### To use this script, you need to:

1. Clone this repository and navigate to the project directory.

2. Copy your service account key file to the project directory.

3. Rename your service account key file to serviceAccountKey.json.

4. Run the script using the following command:

node index.js

The output of the script will be an object containing each user's email address, creation date, and last login timestamp. This object can be used to generate reports, visualize user activity, or integrate with other analytics tools.

Note that this script retrieves all user records, including deleted or disabled users. If you only want to retrieve active users, you can modify the listUsers() method as explained earlier.

## Author:
[@Mohamedboukari](https://github.com/Mohamedboukari)





