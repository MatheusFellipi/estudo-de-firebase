import { Contacts } from "../components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Contacts />
      </div>
    </div>
  );
}
