import z from 'zod'

export const useForm = () => {
  const schema = z.object({
    email: z.string({required_error: '必須項目です。'}).email('メールアドレスが無効です。'),
    password: z.string({required_error: '必須項目です。'}).min(8, 'パスワードは8文字以上で入力していください。')
  })

  const model = ref<Partial<z.infer<typeof schema>>>({
    email: undefined,
    password: undefined,
  })

  const submit = () => {
    console.log('submit!')
  }

  return { model, schema, submit }
}