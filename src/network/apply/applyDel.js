import service from "../index";

export const teacherexchange = (id)=>{
  return service.delete(`/endpoint/teacherexchange/delete`,{ids:id})
}

export const longtermexpert = (id)=>{
  return service.delete(`/endpoint/longtermexpert/delete`,{ids:id})
}

export const shorttermexpert = (id)=>{
  return service.delete(`/endpoint/shorttermexpert/delete`,{ids:id})
}

export const publicationjob = (id)=>{
  return service.delete(`/endpoint/publicationjob/delete`,{ids:id})
}

export const expertjob = (id)=>{
  return service.delete(`/endpoint/expertjob/delete`,{ids:id})
}

export const expertaward = (id)=>{
  return service.delete(`/endpoint/expertaward/delete`,{ids:id})
}

export const studentexchange = (id)=>{
  return service.delete(`/endpoint/studentexchange/delete`,{ids:id})
}

export const iternationalstudentedu = (id)=>{
  return service.delete(`/endpoint/iternationalstudentedu/delete`,{ids:id})
}

export const itcourse = (id)=>{
  return service.delete(`/endpoint/itcourse/delete`,{ids:id})
}

export const cooperativeeducation = (id)=>{
  return service.delete(`/endpoint/cooperativeeducation/delete`,{ids:id})
}

export const stuexchangeproject = (id)=>{
  return service.delete(`/endpoint/stuexchangeproject/delete`,{ids:id})
}

export const itresearchplatform = (id)=>{
  return service.delete(`/endpoint/itresearchplatform/delete`,{ids:id})
}

export const itachievementtrainingplatform = (id)=>{
  return service.delete(`/endpoint/itachievementtrainingplatform/delete`,{ids:id})
}

export const nationalregionalcenter = (id)=>{
  return service.delete(`/endpoint/nationalregionalcenter/delete`,{ids:id})
}

export const expertintroplan = (id)=>{
  return service.delete(`/endpoint/expertintroplan/delete`,{ids:id})
}

export const introwiseproject = (id)=>{
  return service.delete(`/endpoint/introwiseproject/delete`,{ids:id})
}

export const itmeeting = (id)=>{
  return service.delete(`/endpoint/itmeeting/delete`,{ids:id})
}

export const itguaranteefeature = (id)=>{
  return service.delete(`/endpoint/itguaranteefeature/delete`,{ids:id})
}

export const exchangecooperation = (id)=>{
  return service.delete(`/endpoint/exchangecooperation/delete`,{ids:id})
}

export const leaguenations = (id)=>{
  return service.delete(`/endpoint/leaguenations/delete`,{ids:id})
}