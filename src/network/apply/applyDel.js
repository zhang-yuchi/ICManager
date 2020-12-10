import service from "../index";

export const teacherexchange = (id)=>{
  return service.delete(`/endpoint/teacherexchange/delete`,{data:id})
}

export const longtermexpert = (id)=>{
  return service.delete(`/endpoint/longtermexpert/delete`,{data:id})
}

export const shorttermexpert = (id)=>{
  return service.delete(`/endpoint/shorttermexpert/delete`,{data:id})
}

export const publicationjob = (id)=>{
  return service.delete(`/endpoint/publicationjob/delete`,{data:id})
}

export const expertjob = (id)=>{
  return service.delete(`/endpoint/expertjob/delete`,{data:id})
}

export const expertaward = (id)=>{
  return service.delete(`/endpoint/expertaward/delete`,{data:id})
}

export const studentexchange = (id)=>{
  return service.delete(`/endpoint/studentexchange/delete`,{data:id})
}

export const iternationalstudentedu = (id)=>{
  return service.delete(`/endpoint/iternationalstudentedu/delete`,{data:id})
}

export const itcourse = (id)=>{
  return service.delete(`/endpoint/itcourse/delete`,{data:id})
}

export const cooperativeeducation = (id)=>{
  return service.delete(`/endpoint/cooperativeeducation/delete`,{data:id})
}

export const stuexchangeproject = (id)=>{
  return service.delete(`/endpoint/stuexchangeproject/delete`,{data:id})
}

export const itresearchplatform = (id)=>{
  return service.delete(`/endpoint/itresearchplatform/delete`,{data:id})
}

export const itachievementtrainingplatform = (id)=>{
  return service.delete(`/endpoint/itachievementtrainingplatform/delete`,{data:id})
}

export const nationalregionalcenter = (id)=>{
  return service.delete(`/endpoint/nationalregionalcenter/delete`,{data:id})
}

export const expertintroplan = (id)=>{
  return service.delete(`/endpoint/expertintroplan/delete`,{data:id})
}

export const introwiseproject = (id)=>{
  return service.delete(`/endpoint/introwiseproject/delete`,{data:id})
}

export const itmeeting = (id)=>{
  return service.delete(`/endpoint/itmeeting/delete`,{data:id})
}

export const itguaranteefeature = (id)=>{
  return service.delete(`/endpoint/itguaranteefeature/delete`,{data:id})
}

export const exchangecooperation = (id)=>{
  return service.delete(`/endpoint/exchangecooperation/delete`,{data:id})
}

export const leaguenations = (id)=>{
  return service.delete(`/endpoint/leaguenations/delete`,{data:id})
}