import React, { useReducer } from 'react'
import GuitarContext from './GuitarContext'
import guitarReducer from './GuitarReducer'
import clienteAxios from '../config/axios'

const GuitarState = (props) => {
    const initialState = { guitars: []}

    const [globalState, dispatch] = useReducer(guitarReducer, initialState)
    
    const getGuitars = async () => {
        try {
            const res = await clienteAxios.get(`/obtener-guitarras`)
            dispatch({
                type: 'OBTENER_GUITARRAS',
                payload: res.data.guitarras
            })
        } catch (error) {
            console.log(error)
        }
    }

    const createGuitar = async (dataForm) => {
        const form = {
            nombre: dataForm.nombre,
            precio: dataForm.precio,
        }
        try {
            await clienteAxios.post(`/crear-guitarra`, form)
            getGuitars()
        } catch (error) {
            console.log(error)
        }
    }

    const updateGuitar = async (id, dataForm) => {
        const form = {
            id,
            nombre: dataForm.nombre,
            precio: dataForm.precio,
        }
        try {
            await clienteAxios.put(`/actualizar-guitarra`, form)
            getGuitars()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteGuitar = async (id) => {
        const data = { id }
        try {
            await clienteAxios.delete(`/borrar-guitarra`, { data })
            getGuitars()
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <GuitarContext.Provider
            value={{
                guitars: globalState.guitars,
                createGuitar,
                getGuitars,
                updateGuitar,
                deleteGuitar,
            }}
        >
            {props.children}
        </GuitarContext.Provider>
    )
}
export default GuitarState


