'use client';
import "./Form.css";
export default function Form({}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Отправляемые данные:", data); 

    fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => {
          throw new Error(`Ошибка при создании поста: ${text}`);
        });
      }
      return response.json();
    })
  };

  
  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        <span>Заголовок:</span>
        <input type="text" name="name" required className="input" />
      </label>
      <label className="label">
        <span>Краткое описание:</span>
        <input type="text" name="short_desc" required className="input" />
      </label>
      <label className="label">
        <span>Полный текст:</span>
        <textarea name="description" required className="textarea" />
      </label>
      <button type="submit" className="button">Создать пост</button>
    </form>
    </div>
  );
}

