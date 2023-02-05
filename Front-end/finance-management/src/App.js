import './App.css';
import { Button } from './Components/Button';
import Data_Chart from './Components/Data_Chart';
import Head from './Components/Head';
import HeaderCard from './Components/HeaderCard';
import Nav_button from './Components/Nav_button';
import User_bar from './Components/User_bar';

function Part1(){
  return(
    <div>
      <Head title={'Dashboard'} content={'Welcome to your financial organizer!'} bcontent={'Transactions'} blink={'/'}/>
      <div style={{"display": "flex", "flex-direction": "row"}}>
        <HeaderCard heading={'Income'} stats={'150000'} content={'Monthly Income'} />
        <HeaderCard heading={'Expenditure'} stats={'125000'} content={'Monthly Expenditure'} />
        <HeaderCard heading={'Balance'} stats={'569000'} content={'Total Account Balance'} />
      </div>
      {/* <div style={{"display": "flex", "flex-direction": "row"}}>
        <Data_Chart x_data={['Jan', 'Feb', 'March']} y_data={[50, 60, 89]} heading={'Monthly Income'} />
        <Data_Chart x_data={['Jan', 'Feb', 'March']} y_data={[63, 25, 50]} heading={'Monthly Expenditure'}/>
      </div> */}
    </div>
  );
}

function App() {
  return (
    // <div style={{"display": "flex", "flex-direction": "row"}}>
    //   <User_bar active={[true, false, false, false]} link={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb_u3GxKwckvcLfzYvfMx9ipAAtx5-Mz47Q&usqp=CAU'} user_name={'Ram Sharan'}/>
    //   <Part1/>
    // </div>
    <div>
      <Data_Chart x_data={['Jan', 'Feb', 'March']} y_data={[50, 60, 89]} heading={'Monthly Income'} />
    </div>
  );
}

export default App;
