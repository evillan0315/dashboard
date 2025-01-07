declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
  const styles: { [key: string]: any };
  export default styles;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism' {
  const languages: { [key: string]: any };
  export default languages;
}


declare global {
  interface Console {
    log: (...args: any[]) => void;
  }
}

if (process.env.NODE_ENV === 'production') {
  console.log = () => { };
}
