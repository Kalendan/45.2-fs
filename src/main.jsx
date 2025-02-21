import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Homework04 } from "./homeworks/Homework4/Homework04.jsx";
// импорт css из отдельного файла
import "./App.css";
// здесь происходит импорт компонента для дальнейшего использования
import App from "./App.jsx";

// в этом файле мы находим div с id root и добавляем в него код
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* здесь происходит вызов компонента App с версткой */}
    <Homework04 />
  </StrictMode>
);
