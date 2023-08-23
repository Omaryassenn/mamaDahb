
import './App.css'
import mama from "./assets/mama.svg"
import bg from './assets/1.png'
import Menu from './components/menu'
import Contact from './components/Contact'
function App() {
  return (
    <>
     <div className='cntnr'
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h1>ماما دهب</h1>
    <img src={mama} style={{
      position: 'fixed',
      bottom: '0',
      right: '0'
    }} alt="" />
    <div className='discription'>
      <p className='first'>
      هتاكل احلى سندوتشات بيتي من ايد ماما دهب ف وسط البلد  
      واللوكيشن ميتوههش
      </p>
      <a href="https://maps.app.goo.gl/fkAfTUJuZvN4VfiV6">🌍Location</a>
    </div>
    <p className='way'>
    تنزل التحرير ...خطوتين من هناك وتعدي الشارع هتلاقي نفسك عند تقاطع شارع شامبليون مع شارع محمود بسيوني
ع الشمال فيه البنك الأهلي القطري فرع شامبليون انا في الممر اللي جنبه علي طول..بنبدأ يومنا من بعد الضهر لحد المغرب
والخميس والجمعه اجازة.
    </p>
    <Menu></Menu>
    <Contact/>
    </div>
    </>
  )
}

export default App