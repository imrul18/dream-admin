// ** React Import
import { useEffect, useState } from "react"

// ** Custom Components
import Sidebar from "@components/sidebar"
import { selectThemeColors } from '@utils'
import makeAnimated from 'react-select/animated'

// ** Utils

// ** Third Party Components
import { Controller, useForm } from "react-hook-form"

// ** Reactstrap Imports
import { Button, Form, Input, Label } from "reactstrap"

// ** Store & Actions
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"
import { getAllDepartment, getUser, updateUser } from "../store"

const defaultValues = {
  name: "",
  email: "",
  designation_id: "",
  department_id: "",
  role: "",
  status: "",
  password: null
}

const ViewSidebar = ({ user_id, open, toggleSidebar }) => {
  // ** States
  const dispatch = useDispatch()

  const animatedComponents = makeAnimated()

  const [data, setData] = useState({
    name: "",
    email: "",
    employee_id: "",
    designation_id: "",
    department_id: "",
    division_id: null,
    status: "",
    role: "",
    password: null
  })

  const store = useSelector((state) => state.users)

  useEffect(() => {
    if (data?.division_id && open) dispatch(getAllDepartment(data?.division_id))
  }, [data?.division_id])

  useEffect(() => {
    if (open) {
      dispatch(getUser(user_id))
    }
  }, [open])

  useEffect(() => {
    if (store?.selectedUser) {
      setData(store?.selectedUser)
    }
  }, [store?.selectedUser])

  // ** Vars
  const {
    control
  } = useForm({ defaultValues })

  // ** Function to handle form submit
  const onSubmit = (e) => {
    e.preventDefault()
    const updateData = {...data, role: data?.role?.map(item => item?.label)}
    dispatch(updateUser({ updateData, id: user_id }))
    toggleSidebar()
  }

  const onChangeText = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <Sidebar
      size="lg"
      open={open}
      title="View User"
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
      onClosed={() => setData(defaultValues)}
    >
      <Form>
        <div className="mb-1">
          <Label className="form-label" for="name">
            Name <span className="text-danger">*</span>
          </Label>
          <Controller
            name="name"
            control={control}
            render={() => (
              <Input
                value={data?.name}
                disabled
              />
            )}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="name">
            Employee ID <span className="text-danger">*</span>
          </Label>
          <Input
                value={data?.employee_id}
                disabled
              />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="email">
            Email <span className="text-danger">*</span>
          </Label>
          <Input
                value={data?.email}
                disabled
              />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="select-designation_id">
            Select Designation
          </Label>
          <Input
            value={store.designationOptions?.find(
              (item) => item?.value === data?.designation_id
            )?.label}
            disabled
            />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="select-division">
            Select Division <span className="text-danger">*</span>
          </Label>
          <Select
            isClearable={false}
            value={store.divisionOptions?.find(
              (item) => item?.value === data?.division_id
            )}
            options={store.divisionOptions}
            className="react-select"
            classNamePrefix="select"
            onChange={(data) => {
              onChangeText({
                target: { value: data.value, name: "division_id" }
              })
            }}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="select-department_id">
            Select Department <span className="text-danger">*</span>
          </Label>
          <Select
            isClearable={false}
            value={store.departmentOptions?.find(
              (item) => item?.value === data?.department_id
            )}
            options={store.departmentOptions}
            className="react-select"
            classNamePrefix="select"
            onChange={(data) => {
              onChangeText({
                target: { value: data.value, name: "department_id" }
              })
            }}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="select-role">
            Select Role <span className="text-danger">*</span>
          </Label>
          <Select
            isClearable={false}
            isMulti
            value={data?.role}
            theme={selectThemeColors}
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={store.roleOptions}
            className="react-select"
            classNamePrefix="select"
            onChange={(data) => {
              onChangeText({ target: { value: data, name: "role" } })
            }}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="select-supervisor_id">
            Select Supervisor <span className="text-danger"></span>
          </Label>
          <Select
            isClearable={false}
            value={store.supervisorOptions?.find(
              (item) => item?.value === data?.supervisor_id
            )}
            options={store.supervisorOptions}
            className="react-select"
            classNamePrefix="select"
            onChange={(data) => {
              onChangeText({ target: { value: data, name: "supervisor_id" } })
            }}
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="select-status">
            Select Status <span className="text-danger">*</span>
          </Label>
          <Select
            isClearable={false}
            value={store.statusOptions?.find(
              (item) => item?.value === data?.status
            )}
            options={store.statusOptions}
            className="react-select"
            classNamePrefix="select"
            onChange={(data) => {
              onChangeText({ target: { value: data.value, name: "status" } })
            }}
          />
        </div>

        <Button
          type="submit"
          className="me-1"
          color="primary"
          onClick={onSubmit}
        >
          Update
        </Button>
        <Button type="reset" color="secondary" outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default ViewSidebar