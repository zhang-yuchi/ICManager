import service from './index'

export const publicationjob = (obj)=>{
  return service.post('/endpoint/publicationjob/application',{publicationJobVO:obj})
}

