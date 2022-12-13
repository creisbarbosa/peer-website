<p align="center">
  <img src="./src/assets/peerdustry_badge.svg" width="350px"/>
</p>
<h3 align="center"> 
	Under construction...
</h3>

## 1. About

This is a project for the company’s website using Next.js, a framework that makes it easy to create ‘universal’ React apps that do both client and server side rendering.

##### 🖥️ [Preview](external.ink?to=https://peer-website-1d86a.web.app/)

## 2. Built With

##### Node v18.12.0
S
##### Npm 9.1.3

##### [Next.js](https://nextjs.org/)

##### [Typescript](https://nextjs.org/)

##### [Tailwind](https://tailwindcss.com/docs/guides/nextjs)

##### [Phosphor-react](https://github.com/phosphor-icons/phosphor-react)

##### [Keen-slider](https://keen-slider.io/)

##### Firebase

##### Figma

## 3. Design

You can find the website UI and the company's Design System for reference trough this [link](https://www.figma.com/file/LATwL1cRB3Zd1h5lbmzLFM/Website?node-id=196%3A2032&t=5LElUSftVaufJFJ0-1). You`ll need a Figma account to have access to the project.

## 4. Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`.
  
```sh
gh repo clone creisbarbosa/peer-website
npm install
npm run dev
```

## 5. Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

```sh
npm run build
npm start
```

You should run `npm run build` again any time you make changes to the site.

## 6. Deploying to the cloud with Firebase

  To deploy to production on [Firebase](https://firebase.google.com/) your will need to create an account with your google e-mail and request permission to become a member to the current project owner: cassio.reis@peerdustry.com.
  
  If you're the project owner, you can add new members following this steps:
  
  1. Sign in to Firebase.
  2. Click on **peer-website** (peer-website-1d86a) project.
  3. Click ⚙︎, then select **Users ans permissions**.
  4. On Users and permissions page click **Add member**.
  5. In the dialog, enter the user, domain, group, or service account you want to add as a member.
  6. Select a [role](https://firebase.google.com/docs/projects/iam/overview) for the new member, then click **Add**.

---

  If everything was done correctly you can access the project trhough this [link](https://console.firebase.google.com/project/peer-website-1d86a/overview). Then follow the steps bellow ↓
  
  1. **Login in** to your account on your terminal

  ```sh
  npx firebase login
  ```

  2.  Got to the project and **initiate firebase**

  ```sh
  npx firebase init
  ```

  3. Deploy using **build** and **firebase deploy**

  ```sh
  npm run build
  ```

  ```sh
  npx firebase deploy --only hosting
  ```

  ---

<p align="center">
  You're good to go
</p>