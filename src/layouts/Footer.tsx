export const Footer = () => {

    return (
      <div className="main-color">
      <div className="container">
  <footer className="py-5">
    <div className="row">
    
    <div className="col-6 col-md-6 mb-3">
        
        <ul className="nav flex-column">
        
          <li className="nav-item mb-2">
            <i className="bi bi-geo-alt text-white"> Rr. Petro Nini Luarasi, Tiranë 1001</i>
            </li>
            <li className="nav-item mb-2">
            <i className="bi bi-telephone text-white"> +355 69 751 6770</i>
            </li>
            <li className="nav-item mb-2">
            <i className="bi bi-clock text-white"> Monday- Saturday 09:00-23:00 </i>
            </li>
            <li className="nav-item mb-2">
            <i className="bi bi-envelope text-white"> jonibunguri@yahoo.com </i>
            </li>
        </ul>
      </div>
      
        <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5 className="text-white">Subscribe to our newsletter</h5>
          <p className="text-white">Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="button-main" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between border-top">
    <p className="text-white">&copy; 2024 The Spirit Room. All rights reserved.</p>
    
    <ul className="list-unstyled d-flex">
      <li className="nav-item "> <a className='nav-link' href='#'><i className="bi bi-twitter"></i></a></li>
      <li className="nav-item "> <a className='nav-link' href='#'><i className="bi bi-instagram"></i></a></li>
      <li className="nav-item "> <a className='nav-link' href='#'><i className="bi bi-facebook"></i></a></li>
    </ul>
    </div>
  </footer>
</div></div>
); 
}