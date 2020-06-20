import { User } from '../models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Joao'

  expect(user.name).toEqual('Joao')
})
