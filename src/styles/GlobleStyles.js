import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

  --color-primary: #1258db;
  --color-secondary: #003493;
  --color-tertiary: #3771dd;

  --background-primary: #f7f7f7;
  --background-secondary: #fef9e5;

  --color-1: #ffefe2;
  --color-2: #f5974e;

  --text-span-color: #01b5d6;


  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;

  @media only screen and (max-width: 66.25em) {
    font-size: 50%;
    }
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-900);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  user-select: none;
-webkit-tap-highlight-color:rgba(255, 255, 255, 0);
}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

.notification{
  background-color: var(--background-secondary);
  text-align: center;
  color: var(--color-2);
  font-size: 1.8rem;
  padding: 1rem 2rem;
  font-weight: 500;
}

img {
  max-width: 100%;
}

`;

export default GlobalStyles;
