import { rest } from 'msw'

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'HELLO',
          company: 'WORLD'
        }
      ])

    )
  }),
  rest.get('/companies', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Longganisa'
        }
      ])
    )
  })
]
