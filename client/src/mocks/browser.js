import { setupWorker } from 'msw'
import { handlers } from './handlers'

const workers = setupWorker(...handlers)

export default workers
