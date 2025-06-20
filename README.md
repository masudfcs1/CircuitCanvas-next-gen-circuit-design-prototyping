## Getting Started

First, run the development server:

```bash
npm run dev
```
![image](https://github.com/user-attachments/assets/f8afd88d-1355-4b0a-b99e-beefaef80776)
![image](https://github.com/user-attachments/assets/a0c5efd9-6daf-413e-9c2a-124827ebfb5c)
![image](https://github.com/user-attachments/assets/db877536-5d73-425b-9c69-ceb28757889b)
![image](https://github.com/user-attachments/assets/33989712-1cde-4272-8820-0ea9f4694af9)

# CircuitCanvas – Next-Gen Circuit Design & Prototyping  

![CircuitCanvas Demo](https://circuit-canvas.vercel.app/)  
*(Replace with actual screenshot/gif)*  

**Design, simulate, and visualize electronic circuits in the browser.**  
A modern, intuitive platform for engineers, hobbyists, and students to prototype ideas seamlessly.  

---

## 🚀 Features  
- **Drag-and-Drop Interface** – Build circuits visually with customizable components.  
- **Real-Time Simulation** – Test logic gates, analog circuits, or PCB layouts instantly.  
- **Export & Share** – Generate schematics (SVG/PDF) or collaborate via shareable links.  
- **Embeddable** – Integrate designs into docs with `CircuitCanvas.js` (example below).  

```javascript
// Example: Render a circuit in your app  
import { Circuit } from 'circuitcanvas';  

const myCircuit = new Circuit('#canvas', {  
  components: ['resistor', 'capacitor', 'LED'],  
  theme: 'dark'  
});  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
