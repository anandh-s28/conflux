'use server'
'use cache'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  console.log(data)

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log(error)
    redirect('/error')
  }

  revalidatePath('/dashboard', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options : {
      data : {
        username: formData.get('username') as string,
      }
    }
  }
  console.log(data)

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log(error)
    redirect('/error')
  }

  revalidatePath('/auth', 'layout')
  redirect('/auth')
}

export async function signOut() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  redirect('/auth')
}

export async function getUserName() {
  const supabase = await createClient()
  const username = await supabase.from('profiles').select('username').eq('id', (await supabase.auth.getUser()).data.user?.id).single()
  return username
}

export async function uploadFile(file: File) {
  const supabase = await createClient()
  const user_id = (await supabase.auth.getUser()).data.user?.id
  const { data, error } = await supabase.storage.from('conflux-file-store').upload(`${user_id}/${file.name}`, file)
  if (error) {
    console.log(error)
  }
  return data
}