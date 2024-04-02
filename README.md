# Using Firebase as Web Host

  ### By: Raf

  - Firebase can a bit confusing especially when it is your first time to use it. Here are some quick
  ways to get started!

  ## Steps
  - Go to firebase and create a project https://firebase.google.com/.
  - Click **console* on the top right of the screen (works only if you have account).
  - Create a new project!

  ## What's next?
  - Once new project is clicked, provide a project name.
  - Press continue.
  - Choose default account.
  
  ## You will be greeted with something like this!
  ![alt text](image.png)

  ## Lets go further!
  - Select the icon </> for web hosting/deployment.
  - Add an app nickname.
  - Tick the checkbox.
  - click Register the App.
  - Skip **Add Firebase SDK** (unless you need libraries from firebase of course!).
  - Run this following commands:
  `npm install -g firebase-tools`
  `firebase login`
  `firebase init`
  
  - Select hosting, **Spacebar** when selecting and once selected hit **Enter**:
  ![alt text](image-1.png)

  - When prompted **What do you want to use as your public directory?** just press **Enter**.
  - You will be then prompted again of overriding of index.html, always select **No**.

  ## We are only few steps in deploying out Firebase website!
  - Test you website run command this will generate a localhost path view of the website:
  `firebase serve`
  - In the public folder delete 404.html and index, replace it with your files.
  ![alt text](image-2.png)

  - Copy the localhost path to check your website.

  ## Deployment!
  - Run command:
  `firebase deploy`

  ### Congratulations! You have just launched your first Firebase Website!
 
  ## How does it look?
  ### Landing page
  ![image](https://github.com/raffiMartin069/pokemon/assets/125887013/3ba79f48-fca5-469f-bcc7-41fd1fd11b88)
  ![image](https://github.com/raffiMartin069/pokemon/assets/125887013/127db333-c618-4221-8c1d-1bf92f576171)
  ![image](https://github.com/raffiMartin069/pokemon/assets/125887013/95154243-827b-42de-82de-578d7c4b3df2)

  ### Characters Page
  ![image](https://github.com/raffiMartin069/pokemon/assets/125887013/6cba430a-c10a-410a-b0c2-350660ba3965)
  ![image](https://github.com/raffiMartin069/pokemon/assets/125887013/4ae5fc63-06eb-47cd-b217-ebe8c9e73150)
  ![image](https://github.com/raffiMartin069/pokemon/assets/125887013/4931cbcc-3589-45a6-a5d1-bd9cd2e3df24)
  ![image](https://github.com/raffiMartin069/pokemon/assets/125887013/da4527b0-a51b-49e7-b093-190bcc689277)

  ### Pokedex Page
  ![image](https://github.com/raffiMartin069/pokemon/assets/125887013/79cdd97b-6da1-42ba-a6f0-bfa45ab94791)
  ![image](https://github.com/raffiMartin069/pokemon/assets/125887013/99af5172-75bd-4935-bd34-8d0fb51adb15)

  ## My Deployments:
  - https://raffimartin069.github.io/pokemon/
  - https://glittery-jelly-008680.netlify.app/
  - https://pokemon-ten-dusky.vercel.app/
  - https://pokemonsters-10dee.firebaseapp.com/

  ## Connect with me!:
  - https://www.linkedin.com/feed/
  - https://medium.com/@raffimartin069
  - raffimartin069@gmail.com

