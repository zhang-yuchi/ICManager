import service from "../index";

export const teacherexchange = (id)=>{
  return service.get(`/endpoint/teacherexchange/info/${id}`)
}

export const longtermexpert = (id)=>{
  return service.get(`/endpoint/longtermexpert/info/${id}`)
}

export const shorttermexpert = (id)=>{
  return service.get(`/endpoint/shorttermexpert/info/${id}`)
}

export const publicationjob = (id)=>{
  return service.get(`/endpoint/publicationjob/info/${id}`)
}

export const expertjob = (id)=>{
  return service.get(`/endpoint/expertjob/info/${id}`)
}

export const expertaward = (id)=>{
  return service.get(`/endpoint/expertaward/info/${id}`)
}

export const studentexchange = (id)=>{
  return service.get(`/endpoint/studentexchange/info/${id}`)
}

export const iternationalstudentedu = (id)=>{
  return service.get(`/endpoint/iternationalstudentedu/info/${id}`)
}

export const itcourse = (id)=>{
  return service.get(`/endpoint/itcourse/info/${id}`)
}

export const cooperativeeducation = (id)=>{
  return service.get(`/endpoint/cooperativeeducation/info/${id}`)
}

export const stuexchangeproject = (id)=>{
  return service.get(`/endpoint/stuexchangeproject/info/${id}`)
}

export const itresearchplatform = (id)=>{
  return service.get(`/endpoint/itresearchplatform/info/${id}`)
}

export const itachievementtrainingplatform = (id)=>{
  return service.get(`/endpoint/itachievementtrainingplatform/info/${id}`)
}

export const nationalregionalcenter = (id)=>{
  return service.get(`/endpoint/nationalregionalcenter/info/${id}`)
}

export const expertintroplan = (id)=>{
  return service.get(`/endpoint/expertintroplan/info/${id}`)
}

export const introwiseproject = (id)=>{
  return service.get(`/endpoint/introwiseproject/info/${id}`)
}

export const itmeeting = (id)=>{
  return service.get(`/endpoint/itmeeting/info/${id}`)
}

export const itguaranteefeature = (id)=>{
  return service.get(`/endpoint/itguaranteefeature/info/${id}`)
}

export const exchangecooperation = (id)=>{
  return service.get(`/endpoint/exchangecooperation/info/${id}`)
}

export const leaguenations = (id)=>{
  return service.get(`/endpoint/leaguenations/info/${id}`)
}