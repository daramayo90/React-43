import './app.css';
import Sidebar from './Sidebar';
import ContentWrapper from './ContentWrapper';

function Wrapper() {
  return (
    <div className="Wrapper" id="wrapper">
        <Sidebar />
        <ContentWrapper />
    </div>
  );
}

export default Wrapper;