import './styles.css';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="container">
        <img src="../../404.jpg" alt="404" className="img-404" />
        <div className="wrapper-404">
          <p>Page not found</p>
          <h1 className="title-404">404</h1>
          <Link to="/">
            <button className="btn-404">Go Home</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
