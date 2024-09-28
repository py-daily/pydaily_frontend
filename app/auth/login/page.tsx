'use client'

import { signIn } from "next-auth/react"
import { Form, Input, Button } from 'antd'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  const onFinish = async (values: any) => {
    try {
      const result = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      })

      if (result?.error) {
        console.error(result.error)
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}