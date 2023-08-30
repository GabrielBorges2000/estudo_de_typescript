type Address = {
  street: string
  number: number
}

type User = {
  name?: string
  age: number
  address: Address
}

function pickProperty(user: User, property: UserProperties) {
  return user[property]
}

// ? Ao fazer uma keyof eu posso forçar o meu código a mostrar onde está erro.
// ? Ao usar um keyof ele retorna todos os dados de um objeto.
type UserProperties = keyof User

const user: User = {
  name: 'Gabriel',
  age: 23,
  address: {
    street: 'Rua Vicente Leporace',
    number: 153
  }
}

// ? Podemos criar um objeto e depois criar uma tipagem com baso no objeto.
// ? Para isso usamos o typeof.
const video = {
  title: 'Usando TypeScript',
  duration: 180,
}
// ? se colocarmos o keyof além de ter a tipagem ele vai os dados.
type Videoo = keyof typeof video

console.log(pickProperty(user, 'name'))

// ? Utility Types.

// ? Esse utility serve para me mostrar os possiveis retornos dessa função.
type PickpropertyReturnType = ReturnType<typeof pickProperty>

// ? Esse utility serve para omitir uma informação de uma tipagem.
type UserWithoutAddress = Omit<User, 'name' | 'address'>

// ? Esse utility serve para pegar só as propriedades que eu quero.
type UserNameAndAge = Pick<User, 'name' | 'age'>


// ! Abaixo segue uma forma de user um utility type diretamente dentro de uma função.
// type Usuario = {
//   id: string
//   name: string
//   age: number
// }

// async function pesisteUsuario(usuario: Omit<Usuario, 'id'>): Usuario {
//   // const usuarioPersistido = await db.insert(id, name)
//   // return usuarioPersistido
// }

// const usuario = pesisteUsuario({
//   name: 'Gabriel',
//   age: 23,
// })

// usuario.id

// ? Esse Utility faz com que as minha tipagem toda se torne condicinal
type UserPartial = Partial<User>

// -----------------------------------------

type DbConfig = {
  name: string
  url: string
}

// * 'AS' server para forçar uma tipagem
const conn1 = { name: 'pg', url: 'postgress://user:password' } as DbConfig


const conn2: DbConfig = { name: 'mysql', url: 'mysql://user:password' }


const conn3 = { name: 'sqlite', url: 'sqlite://user:password' } satisfies DbConfig


// ? Generic's no TypeScript
type Video = {
  title: string
  duration: number
}

function pickPropertyGeneric<ObjType extends Record<string, unknown>>(obj: ObjType, property: keyof ObjType) {
  return obj[property]
}

const video2 : Video = {
  title: 'TipeScript',
  duration: 1500
}

pickPropertyGeneric(video2, 'title')

pickPropertyGeneric({name: 'Gabriel', address: 'Rua Vicente Çeporace', number: 153}, 'name')

