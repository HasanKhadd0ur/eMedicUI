
import React from 'react'
export const Footer = () => {
  
  return (
    <>
    <footer className="footer text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Location</h4>
                    <p className="lead mb-0">

                       ####

                    </p>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Around the Web</h4>
                    <a className="btn btn-outline-light btn-social mx-1" href="#">
                        <i className="fab fa-fw fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="#">
                        <i className="fab fa-fw fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="#">
                        <i className="fab fa-fw fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="#">
                        <i className="fab fa-fw fa-dribbble"></i>
                    </a>
                </div>

                <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4">Admin Dashboard</h4>
                    <p className="lead mb-0">
                        here is the link to the Dashboard<br />
                        <a asp-action="Index" asp-controller="Medicine">Click me !.</a>
                    </p>
                </div>

            </div>
        </div>
    </footer>
    
    <section className="copyright py-4 text-center text-white">
    <div className="container">
        <small>Copyright &copy; Rawad & Hasan 2024</small>
    </div>
</section>

<div className="scroll-to-top d-lg-none position-fixed ">
    <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
        <i className="fa fa-chevron-up"></i>
    </a>
</div>
<script src="~/js/jquery.min.js"></script>
    <script src="~/js/bootstrap.bundle.min.js"></script>

    <script src="~/js/jquery.easing.min.js"></script>

    <script src="~/js/freelancer.min.js"></script>

</>

)
}
