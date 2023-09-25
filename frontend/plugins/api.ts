import { useFetch } from "nuxt/app";

const api = async (method: any, path: string, query?: Record<string, string>, body?: any) => {
  const response = await useFetch(path, {
    method,
    body,
    query,
    onResponseError({ response }) {
      alert(response);
    },
    onRequestError({ error }) {
      alert(error);
    }
  })

  return { ...response }
}

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      api
    }
  }
})
