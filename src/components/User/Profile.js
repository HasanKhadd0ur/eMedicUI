import React from 'react'

export const Profile = ({user}) => {
  return (
    
    <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">

        <img className="masthead-avatar mb-5"
         src={'/assets/img/'+user.user.avatar} style={{borderRadius:"50%"}}  alt=""/>

        <h1 className="masthead-heading text-uppercase mb-0">{user.user.firstName +" "+ user.user.lastName}</h1>

        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
        </div>

        <p className="masthead-subheading font-weight-light mb-0">user.bio</p>

    </div>
</header>

  )
 }

