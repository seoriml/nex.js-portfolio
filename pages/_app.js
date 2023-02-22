import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
