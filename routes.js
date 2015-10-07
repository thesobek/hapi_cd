import * as handlers from './handlers'

export default [
   {
	   method: 'GET',                               
	   path: '/',                                   
	   handler: handlers.index
   }
]