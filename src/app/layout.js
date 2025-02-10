import Header from "./components/Header/Header";
import Form from "./components/Form/Form.jsx"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Form/>
      </body>
    </html>
  );
}
