# Creating a new website

## 1. Create a new project in Firebase
> This is the backend of your website. It's used for:
> - Web Hosting
> - Database
> - Authentication
> - Cloud Functions

#### \> Go to [Firebase](https://firebase.google.com/) and click on `Go to console`

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/4a83a5a1-77ed-4d37-8eb1-45df2b7bc49d)

#### \> Create a new project

> [!IMPORTANT]
> The project identifier is used in the free website URL's:
> - [xxxxx.web.app](xxxxx.web.app)
> - [xxxxx.firebaseapp.com](xxxxx.firebaseapp.com)

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/1f79435d-53ba-4af1-a907-c8b00a3ba685)

---
## 2. Create a new repository on GitHub
> This is used to backup your code. It also keeps all changes, so you can go back if something breaks.

#### \> [Click here](https://github.com/new) to create a new repository

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/b2296c29-87b7-4e55-bebf-968a5f620ebb)


---
## 3. Copy your repository to VS Code
> This will "link" VS Code to your GitHub repository.

> [!TIP]
> Create a folder like 'React Projects' on your computer to keep all your projects.

#### \> Click on ´Code´
#### \> Copy the URL

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/cc4b797e-ed0c-4f64-91ee-8d01f9d17f0d)


#### \> Open Command Prompt (`Windows + R` > type 'cmd' > hit `enter`)
#### \> Run `cd <PATH>` to go to your projects folder
#### \> Run `git clone <URL>` to download your repository

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/6c2e2c7d-9408-4959-a6f2-f54ba48578c0)

#### \> Open VS Code > File > Open Folder... > Select the newly created folder

> [!NOTE]
> Changes to files in this folder can be seen in this menu.

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/a9971978-6121-47c5-bcce-8ffbfd5c5c2d)


---
## 4. Create a react website

#### \> Open a new terminal in VS Code (Terminal > New Terminal)
#### \> Run `npx create-react-app .` to create a new React website

> [!NOTE]
> This automatically creates the initial files for a React website.
> 
> The '.' at the end of the command makes sure it's created inside the folder where you execute the command.
>
> (You can see the current folder in the terminal in VS Code)

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/6dcadd10-c693-4024-8a6c-591bd884938e)

> [!NOTE]
> The src folder contains your website files.

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/96bc2d6d-1ed5-4bea-a617-3be0c5e65fe9)

#### #> Run `npm start` to start a development server on your computer

> [!NOTE]
> This will open your website in your browser at http://localhost:3000/
> 
> Any changes made are immediately visible.

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/c5c3f95f-8dd8-4112-8f11-edc22df6dbaf)

#### \> Remove these files

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/1318029a-2d2d-4c73-b7b0-b9957f7102ee)

#### \> Delete these lines in index.js

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/d8805881-636e-4ccb-a765-8251412f6f88)


---
## 5. Commit changes to GitHub

> [!NOTE]
> Once you changed a file, it will show up here.
> 
> You can see the differences by selecing the file.

#### \> Click on the plus icon to 'stage' all files.

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/24871053-6a5f-4c75-b4dd-f355dbbacaf8)

#### \> Enter a commit message and click `Commit` to save your changes.

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/cbc059a7-86fd-4463-b93b-116c06999c88)

> [!TIP]
> Committed changes can be seen here

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/b87990e0-faa7-42d7-80b2-11c5a8b9a3d5)

#### \> Click `Sync Changes` to push your changes to GitHub.

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/bbb1b9c5-3317-4ee7-a1ff-5656c37620e1)

> [!NOTE]
> Your changes are now synced and backed up to GitHub.

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/c74e798d-6740-4a87-bc78-1db4430f4a99)


----
## 6. Link your website to your Firebase project

#### \> Go to the firebase console to your project 
#### \> Click on `</>` to add your website to your Firebase project

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/db3e4ed7-084a-4500-b835-a544685bf9e4)

#### \> Give your website a nickname and check 'Also setup **Firebase Hosting** for this app.'

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/147d1277-7309-4750-a10f-4ec76b0b1aa4)

#### \> Copy the config file

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/d9e44d91-7414-4fa6-b31d-6b0554aec78a)

#### \> Open a terminal in VS Code
#### \> Run `npm install firebase`
#### \> Run `firebase login`

> [!NOTE]
> Press 'N' when it asks if you want to share usage data.
>
> You will be redirected to your browser to login to your google account, linked to your firebase project.

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/e84c6541-6838-402f-acc8-d04c820acf23)

#### \> Run `npm install -g firebase-tools`

#### \> Run `firebase init`

#### \> Press 'y' to continue

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/3c87b459-f26e-432a-94f3-244706ae2ee4)

#### \> Select 'Hosting'

> [!TIP]
> Use the `up`/`down` arrows and `space` to select 'Hosting'
>
> Press `enter` to confirm your selection

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/d3398d50-70c2-4f4f-9c02-9016b77ebf02)

#### \> Choose the following options
1. Use an existing project
2. Select your Firebase project
3. Enter 'build' as your public directory
4. Press 'y' to configure as a single-page app
5. Press 'n' to not setup automatic build and deploys with GitHub
6. Press 'n' to not overwrite your index.html file (if it asks)

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/c518ff89-3f80-48f6-97f5-64a3e463f11a)

#### \> Copy this code into the index.html file inside the public folder

> [!TIP]
> Replace [YOUR PROJECT NAME] with your project name.
>
> This will be used as the title for the browser tab.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Platform for sharing and monetizing your content"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>[YOUR PROJECT NAME]</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

#### \> Run `npm run build; firebase deploy --only hosting` to deploy your current website to the web

> [!NOTE]
> When you see the hosting URL, the website was deployed completely.

![image](https://github.com/vgs-7/React-Firebase-Guide/assets/93202304/a36a5067-f58f-4f6b-92d2-be8ddbb3d693)







