import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Swal from 'sweetalert2'

export default function ModalCompra({showModal,setShowModal}){
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <Modal show={showModal} style={{ fontSize: 11 }} centered>
      <Modal.Header>
        <Modal.Title className="text-danger">
          Compra
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-2">
        <div className="container h-100">
          <form onSubmit={handleSubmit}>
            <div>
                <label className="fw-bold">Rol</label>
                <select
                  required
                >
                  <option selected disabled value="">
                    -- Seleccione un medio de pago --
                  </option>
                  <option value="vendedor">Efectivo</option>
                  <option value="agencia">Nequi</option>
                </select>
            </div>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button type="submit" variant="success">
                Aceptar
              </Button>
              <Button variant="secondary" onClick={(e) => {
                setShowModal(false)
              }}>
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
    )
}