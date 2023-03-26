export const goToHomePage = (navigate)=>{
    navigate('/')
}

export const goToContacts = (navigate)=>{
    navigate('/contatos')
}

export const goToSingupPage = (navigate)=>{
    navigate('/singup')
}

export const goToLogin = (navigate)=>{
    navigate('/login')
}

export const goToMapPage = (navigate) =>{
    navigate('/map')
}

export const goToCalendar = (navigate)=>{
    navigate('/calendar')
}

export const goToDetails = (navigate, id)=>{
    navigate(`/details/${id}`)
}