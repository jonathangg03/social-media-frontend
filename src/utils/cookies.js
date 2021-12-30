export function getCookie({ name }) {
  try {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${name}=`))
      .split('=')[1]
    return token
  } catch (error) {
    return null
  }
}

export function setCookie({ name, value }) {
  document.cookie = `${name}=${value}`
}
