const admin = require("firebase-admin");

const serviceAccount = require("./path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com",
});

const adminDb = admin.firestore();

admin
  .auth()
  .listUsers()
  .then((listUsersResult) => {
    listUsersResult.users.forEach((userRecord) => {
      // getUserByEmail
      admin
        .auth()
        .getUserByEmail(userRecord.email)
        .then(() => {
          // User found
          const createAt = new Date(userRecord.metadata.creationTime).toJSON();
          const lastLogin = new Date(
            userRecord.metadata.lastSignInTime
          ).toJSON();
          // docRef docId = userRecord.email
          const docRef = adminDb.collection("users").doc(userRecord.email);
          const updateData = {
            createAt,
            lastLogin,
          };

          docRef
            .update(updateData)
            .then(() => {
              console.log(`Document ${userRecord.email} updated successfully`);
            })
            .catch((error) => {
              console.error("Error updating document: ", error);
            });
        })
        .catch((error) => {
          // User not found
          console.log("Error fetching user data:", error);
        });
    });
  })
  .catch((error) => {
    console.log("Error listing users:", error);
  });
