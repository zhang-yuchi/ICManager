import service from './index'

export const login = (obj)=>{
  return service.post('/login',obj)
}