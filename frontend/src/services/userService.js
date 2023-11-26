import axios from 'axios'
import { config } from "../config";

const url = `${config.apiUrl2}/users`;

export const findUsers = async () => {
  const token = JSON.parse(localStorage.getItem("token"))
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}
export const findAllUsersBene = async () => {
  const token = JSON.parse(localStorage.getItem("token"))
  const { data } = await axios.get(`${url}/:beneficiarios`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}
export const findAllUsersNoBene = async () => {
  const token = JSON.parse(localStorage.getItem("token"))
  const { data } = await axios.get(`${url}/no/beneficiarios`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}
export const findAllUsersOficial = async () => {
  const token = JSON.parse(localStorage.getItem("token"))
  const { data } = await axios.get(`${url}/lista/oficial`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}
export const createUser = async (body) => {
  const token = JSON.parse(localStorage.getItem("token"))
  const { data } = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}

export const updateUser = async (id, body) => {
  const token = JSON.parse(localStorage.getItem("token"))
  const { data } = await axios.patch(`${url}/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}