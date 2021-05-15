import "./App.css";
import React from "react";
import TimeTable from "./components/TimeTable.js";
import SouvenirsTable from "./components/SouvenirsTable.js";
import PhotoTable from "./components/PhotoTable.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";




function App() {
  return (
    <Router>
       <header class="header">
        <div class="container">
            <div class="header_inner">
                <div class="header_logo">PEACH</div>
                
                <nav class="nav">
                <Link to="/" class="nav_link">Главная</Link> 
                <Link to="/souvenirs" class="nav_link">Сувиниры</Link>
                <Link to="/timetable" class="nav_link">Экскурсии</Link>
                <Link to="/photo" class="nav_link">Фото</Link>   
                    
                </nav>
            </div> 
        
        </div>
    </header>
      <div>

        <div className="App">
          <section>
            <Switch>

             
            <Route path="/timetable">
                <h1>TimeTable</h1>
                <TimeTable />
              </Route>

              
              <Route path="/souvenirs">
                <SouvenirsTable />
              </Route>

              <Route path="/photo">
                <PhotoTable />
              </Route>

             

              <Route path="/">
              <section class="section">
       <div class="container"> 
            <div class="section_header">
    
                <h1 class="section_title">О Музее</h1>
                <div class="section_text">
                    <p>Добро пожаловать в Галерею Ван Гога Онлайн. Здесть
                        вы можете посмотреть на картины данного художника, прочитать историю
                        их создания, узнать о самом авторе и просто хорошо провести время
                    </p>
                </div>
            </div>


            <div class="about">
                <div class="about_item">
                    <div class="about_img">
                        <a href="#"><img src="assets/images/Ukraina-lvov-muzey_apteka-flickr.com-Vaddik.jpg" width="380" height="290" alt=""/></a> 
                    </div>
                    <div class="about_text">Экскурсии</div>
                </div>
                <div class="about_item">
                    <div class="about_img">
                        <a href="#"><img src="assets/images/muzey-starogo-monpele.jpg" width="380" height="290" alt=""/></a> 
                     </div>
                     <div class="about_text">Сувиниры</div>
                </div>
                <div class="about_item">
                    <div class="about_img">
                        <a href="#"><img src="assets/images/mapplethorpemunch_05.jpg" width="380" height="290" alt=""/></a> 
                    </div>
                    <div class="about_text">Фото</div>
                </div>
            </div>
       </div> 
         
     </section>

     <div class="statistics">
         <div class="container">
             <div class="stat">
                 <div class="stat__item">
                     <div class="stat__count">850</div>
                     <div class="stat__text">Картин</div>
                 </div>
                 <div class="stat__item">
                    <div class="stat__count">17</div>
                    <div class="stat__text">Городов, где он жил</div>
                 </div>
                 <div class="stat__item">
                    <div class="stat__count">14</div>
                    <div class="stat__text">Музеев</div>
                 </div>
                 <div class="stat__item">
                    <div class="stat__count">1300</div>
                    <div class="stat__text">Рисунков</div>
                 </div>
                 <div class="stat__item">
                    <div class="stat__count">1</div>
                    <div class="stat__text">Человек</div>
                 </div>
             </div>
        </div>
    </div>
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Map() {
  let location = useLocation();

  return (
    <div>
      <h2>Map</h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}




export default App;