import { http } from '@/api/service.js'

export const getCourse = () => {
  return http.get('/course')
}

export const getCourseByType = (params) => {
  return http.get('/course/findByType', {
		params
	})
}
