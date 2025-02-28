const cardData = [
    {
      id: 1,
      title: "The Future of Web Development",
      description: "Exploring the latest trends and technologies shaping the future of web development, including JavaScript frameworks, web accessibility, and AI-driven tools.",
      category: "Web Development"
    },
    {
      id: 2,
      title: "How to Build Scalable Applications",
      description: "A comprehensive guide on building scalable web applications with best practices for architecture, performance optimization, and load balancing.",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Understanding React Hooks",
      description: "An in-depth look at React hooks, explaining useState, useEffect, and custom hooks, and how they improve code readability and functionality.",
      category: "Web Development"
    },
    {
      id: 4,
      title: "CSS Grid: A Game Changer for Layouts",
      description: "Learn how CSS Grid can revolutionize your approach to creating complex and responsive layouts with ease.",
      category: "Cloud"
    },
    {
      id: 5,
      title: "Mastering Asynchronous JavaScript",
      description: "A beginner's guide to understanding asynchronous programming in JavaScript, including callbacks, promises, and async/await.",
      category: "Web Development"
    },
    {
      id: 6,
      title: "Building APIs with Node.js",
      description: "Step-by-step tutorial on building RESTful APIs using Node.js and Express, including authentication, routing, and error handling.",
      category: "Web Development"
    },
    {
      id: 7,
      title: "UI/UX Design Principles for Developers",
      description: "A developer's guide to the fundamental principles of UI/UX design, with tips on improving user experience through visual and interaction design.",
      category: "AI/ML"
    },
    {
      id: 8,
      title: "The Importance of Testing in Software Development",
      description: "Understanding the different types of testing in software development, including unit testing, integration testing, and end-to-end testing.",
      category: "Automation"
    },
    {
      id: 9,
      title: "Optimizing Your JavaScript Code for Performance",
      description: "Techniques for improving the performance of your JavaScript code, from optimizing loops and DOM manipulation to reducing network requests.",
      category: "Web Development"
    },
    {
      id: 10,
      title: "A Beginner's Guide to Git and GitHub",
      description: "Learn how to use Git for version control and collaborate with others using GitHub, with essential commands and workflow tips.",
      category: "Web Development"
    },
    {
      id: 11,
      title: "The Future of Web Development",
      description: "Exploring the latest trends and technologies shaping the future of web development, including JavaScript frameworks, web accessibility, and AI-driven tools.",
      category: "Web Development"
    },
    {
      id: 12,
      title: "How to Build Scalable Applications",
      description: "A comprehensive guide on building scalable web applications with best practices for architecture, performance optimization, and load balancing.",
      category: "AI/ML"
    },
    {
      id: 13,
      title: "Understanding React Hooks",
      description: "An in-depth look at React hooks, explaining useState, useEffect, and custom hooks, and how they improve code readability and functionality.",
      category: "Web Development"
    },
    {
      id: 14,
      title: "CSS Grid: A Game Changer for Layouts",
      description: "Learn how CSS Grid can revolutionize your approach to creating complex and responsive layouts with ease.",
      category: "Cloud"
    },
    {
      id: 15,
      title: "Mastering Asynchronous JavaScript",
      description: "A beginner's guide to understanding asynchronous programming in JavaScript, including callbacks, promises, and async/await.",
      category: "Web Development"
    },
    {
      id: 16,
      title: "Building APIs with Node.js",
      description: "Step-by-step tutorial on building RESTful APIs using Node.js and Express, including authentication, routing, and error handling.",
      category: "Web Development"
    },
    {
      id: 17,
      title: "UI/UX Design Principles for Developers",
      description: "A developer's guide to the fundamental principles of UI/UX design, with tips on improving user experience through visual and interaction design.",
      category: "AI/ML"
    },
    {
      id: 18,
      title: "The Importance of Testing in Software Development",
      description: "Understanding the different types of testing in software development, including unit testing, integration testing, and end-to-end testing.",
      category: "Automation"
    },
    {
      id: 19,
      title: "Optimizing Your JavaScript Code for Performance",
      description: "Techniques for improving the performance of your JavaScript code, from optimizing loops and DOM manipulation to reducing network requests.",
      category: "Web Development"
    },
    {
      id: 20,
      title: "A Beginner's Guide to Git and GitHub",
      description: "Learn how to use Git for version control and collaborate with others using GitHub, with essential commands and workflow tips.",
      category: "Web Development"
    }
  ];
  

import React,{useState} from 'react';
import './App.css';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';


const App = () => {
    const[ttext,setTtext] = useState("");
    const[dtext,setTdext] = useState("");
    const[stext,setStext] = useState("");
    const[catpost,setCatpost] = useState("");
    const[btntxt,setBtntxt] = useState("Search");
    const[num,setNum] = useState(cardData.length);
    const[cdata,setCdata] = useState(cardData);
    function postbutt(){
        const titlepost = ttext;
        const descpost = dtext;
        const cpost = catpost;
        const newCard = { id:num+1, title:titlepost, description:descpost, category:cpost };
        if(newCard.title.trim() !== "" && newCard.description.trim()!==""){
          setCdata(c=>[...c,newCard]);
          setNum(newCard.id);
        }
        if(newCard.title.trim() === "" || newCard.description.trim()===""){
          alert("Type Something");
        }
        
        setTdext("");
        setTtext("");
        setCatpost("");

    }
    function delCard(index)
    {
      confirm("Deleted")
      if(confirm)
      {
      setCdata(c => c.filter((_,i) => i !== index));
      setNum(num => num-1);}
     
    }
    function showsearch(cat)
    {
      if(stext){
      setCdata(c => c.filter((item) => item.category === cat));
      setStext("");
      setBtntxt("Reload");
    }
      else{
        setCdata(cardData);
        setBtntxt("Search");
      }
     
    }
    function ttextshow(e){
        setTtext(e.target.value);
    }

    function dtextshow(e){
        setTdext(e.target.value);
    }

    function fcatpost(e){
      setCatpost(e.target.value);
      // ddl.selectedindex(0);
  }
  function searchshow(e){
    setStext(e.target.value);
}

  return (
    <div className="app">
      <Header name="Parth"></Header>
      <input type="text" className='search' id="search-blog" onChange={(e) => searchshow(e)} value={stext}></input>
      <button className='search-btn' onClick={() => showsearch(stext)}>{btntxt}</button>
      <div>
        <input type="text" className="postform-title" id="title" placeholder="Title" onChange={(e) => ttextshow(e)} value={ttext}></input><br />
        <input type="text" className="postform-desc" id="desc" placeholder="Description" onChange={(e) => dtextshow(e)} value={dtext}></input><br />
        <select name="ddl" className="postform-drop" id="cat" onChange={(e) => fcatpost(e)}>
        <option value="">Select a category</option>
        <option value="AI/ML">AI/ML</option>
        <option value="Web Development">Web Development</option>
        <option value="Automation">Automation</option>
        <option value="Cloud">Cloud</option>
        </select><br />
        <button onClick={postbutt} className="postbutton">Post</button><br />
        <p className="posttext"> Number of posts = {num}</p>
    </div>
      <div className="blog-list">
        {cdata.map((card,index) => (
          <Card
            category = {card.category}
            key = {index}
            title = {card.title}
            description={card.description}
            onDelete={() => delCard(index)}
            ></Card>
        ))}
      </div>
       <Footer name="Bloggers" ></Footer> 
    </div>
  );
};

export default App;


