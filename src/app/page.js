import Image from "next/image";
import styles from "./page.module.css";
import SectionBlogs from "./SectionBlogs/SectionBlogs";
import Form from "./components/Form/Form";

export default function Home() {
  return (
    <main>
       <SectionBlogs/>
       <Form/>
    </main>
  );
}
