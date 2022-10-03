import React, { useState, useEffect } from "react";

export default function Main() {
  let [form, setForm] = useState({
    top: "",
    bottom: "",
    url: "https://i.imgflip.com/9vct.jpg",
  });
  let [memes, setMemes] = useState({});
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemes(data);
      });
  }, []);
  function getMemes() {
    const meme = memes.data.memes;
    const url = meme[Math.floor(Math.random() * 100)].url;

    setForm((pre) => {
      return { ...pre, url: url };
    });
  }
  function change(event) {
    let { value, name, type } = event.target;
    setForm((pre) => {
      return { ...pre, [name]: value };
    });
  }
  return (
    <>
      <main className="main">
        <input
          type="text"
          placeholder="topline"
          value={form.top}
          name="top"
          onChange={change}
        />
        <input
          type="text"
          placeholder="bottomline"
          value={form.bottom}
          name="bottom"
          onChange={change}
        />
        <button onClick={getMemes}>Get a new meme image 🤣​😥​🤣​</button>
        <div>
          <img src={form.url} />
          <h1>{form.top}</h1>
          <h1>{form.bottom}</h1>
        </div>
      </main>
    </>
  );
}
