import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import Message from '../../componets/Message';
import Loader from '../../componets/Loader';
import Sidebar from './Sidebar';
import { toast } from 'react-toastify';
import { useGetUsersQuery,useDeleteUserMutation} from '../../slices/usersApiSlice';

const ListUsersAminScreen = () => {
    const { data: users, refetch, isLoading, error} = useGetUsersQuery();
    const [deleteUser] = useDeleteUserMutation();

    const deleteHandler = async (id) => {
      if (window.confirm('Are you sure')) {
        try {
          await deleteUser(id);
          refetch();
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      }
    };
  return (
    <>
        <div className="row">
   <div className=" col-md-2">
       <Sidebar />
   </div>
   {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className='col-md-10'>
             <h1 className="mb-4 d-flex justify-content-center">THÔNG TIN TÀI KHOẢN</h1>
              <hr />
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
            <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <FaCheck style={{ color: 'green' }} />
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                    <>
                      <LinkContainer
                        to={`/admin/user/${user._id}/edit`}
                        style={{ marginRight: '10px' }}
                      >
                        <Button variant='light' className='btn-sm'>
                          <FaEdit />
                        </Button>
                      </LinkContainer>
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(user._id)}
                      >
                        <FaTrash style={{ color: 'white' }} />
                      </Button>
                    </>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
      )}
      </div>
    </>
  )
}

export default ListUsersAminScreen