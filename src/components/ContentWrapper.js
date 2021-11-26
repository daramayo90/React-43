import './app.css';
import Topbar from './Topbar';
import Rowtop from './Rowtop';
import Footer from './Footer';

function ContentWrapper() {
  return (
    <div className="ContentWrapper">
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <Topbar />
                <Rowtop />
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default ContentWrapper;