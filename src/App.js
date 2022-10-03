import logo from './logo.svg';
import './App.css';
import Navigationcomponent from './components/navigation/navigation.component';
import Headercomponent from './components/header/header.component';
import Brandcomponent from './components/brand/brand.component';
import Service from './components/services/services.component';
import Aboutcomponent from './components/about/about.component';
import Managementcomponent from './components/management/management.component';
import Desireesteemcomponent from './components/desireesteem/desireesteem.component';
import Premium from './components/premium/premium.component';
import Testimonialcomponent from './components/testimonial/testimonial.component';
import Discovercomponent from './components/discover/discover.component';
import Footercomponent from './components/footer/footer.component';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <Navigationcomponent />
      <Headercomponent />
      <Brandcomponent />
      <Service />
      <Aboutcomponent />
      <Managementcomponent />
      <Desireesteemcomponent />
      <Premium />
      <Testimonialcomponent />
      <Discovercomponent />
      <Footercomponent />
      </Provider>
    </div>
  );
}

export default App;
