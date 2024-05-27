import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export const Form = ({handleSubmit, handleOnChange, handleClose, rest}) => {
    return (
        <div class="container my-3" tabIndex="-1">
            <div class="modal-content">
                <form id="userform" onSubmit={handleSubmit}>
                    <div class="modal-header">
                        <h5 class="modal-title">Info</h5>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label>Tên</label>
                            <input type="text" name="name" id="name" class="form-control" onChange={handleOnChange} value={rest.name}/>
                        </div>
                        <div class="mb-3">
                            <label>Giới tính</label>
                            <input type="text" name="gender" id="gender" class="form-control" onChange={handleOnChange} value={rest.gender}/>
                        </div>
                        <div class="mb-3">
                            <label>Trường</label>
                            <input type="text" name="school" id="school" class="form-control" onChange={handleOnChange} value={rest.school}/>
                        </div>
                        <div class="mb-3">
                            <label>Email</label>
                            <input type="text" name="email" id="email" class="form-control" onChange={handleOnChange} value={rest.email}/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="hidden" name="user_id" id="user_id" />
                        <button type="button" class="btn btn-secondary mx-1" onClick={handleClose} >Close</button>
                        <button type="submit" class="btn btn-primary mx-1">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}