import service from "../index";

export const teacherexchange = (id)=>{
  return service.delete(`/endpoint/teacherexchange/delete`,{ids:id})
}

export const longtermexpert = (id)=>{
  return service.get(`/endpoint/longtermexpert/delete`,{ids:id})
}

export const shorttermexpert = (id)=>{
  return service.get(`/endpoint/shorttermexpert/delete`,{ids:id})
}

export const publicationjob = (id)=>{
  return service.get(`/endpoint/publicationjob/delete`,{ids:id})
}

export const expertjob = (id)=>{
  return service.get(`/endpoint/expertjob/delete`,{ids:id})
}

export const expertaward = (id)=>{
  return service.get(`/endpoint/expertaward/delete`,{ids:id})
}

export const studentexchange = (id)=>{
  return service.get(`/endpoint/studentexchange/delete`,{ids:id})
}

export const iternationalstudentedu = (id)=>{
  return service.get(`/endpoint/iternationalstudentedu/delete`,{ids:id})
}

export const itcourse = (id)=>{
  return service.get(`/endpoint/itcourse/delete`,{ids:id})
}

export const cooperativeeducation = (id)=>{
  return service.get(`/endpoint/cooperativeeducation/delete`,{data:id})
}

export const stuexchangeproject = (id)=>{
  return service.get(`/endpoint/stuexchangeproject/delete`,{data:id})
}

export const itresearchplatform = (id)=>{
  return service.get(`/endpoint/itresearchplatform/delete`,{data:id})
}

export const itachievementtrainingplatform = (id)=>{
  return service.get(`/endpoint/itachievementtrainingplatform/delete`,{data:id})
}

export const nationalregionalcenter = (id)=>{
  return service.get(`/endpoint/nationalregionalcenter/delete`,{data:id})
}

export const expertintroplan = (id)=>{
  return service.get(`/endpoint/expertintroplan/delete`,{data:id})
}

export const introwiseproject = (id)=>{
  return service.get(`/endpoint/introwiseproject/delete`,{data:id})
}

export const itmeeting = (id)=>{
  return service.get(`/endpoint/itmeeting/delete`,{data:id})
}

export const itguaranteefeature = (id)=>{
  return service.get(`/endpoint/itguaranteefeature/delete`,{data:id})
}

export const exchangecooperation = (id)=>{
  return service.get(`/endpoint/exchangecooperation/delete`,{data:id})
}

export const leaguenations = (id)=>{
  return service.get(`/endpoint/leaguenations/delete`,{data:id})
}