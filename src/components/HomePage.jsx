import Content from './Content'; // Giữ lại dòng import này
import Navigation from './Navigation';
import { Headers } from './Headers';
import Footer from './Footer';
export default function HomePage() {
  return (
    <div className='vh-100'>   
        <Headers/>
        <div className="row">
        <div className="col-5" style={{padding: 0}}><Navigation/></div>
        <div className="col-7" style={{padding: 0}}><Content/></div>
      </div>
        <Footer/>     
    </div>
      
  );
}
